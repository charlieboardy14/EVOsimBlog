const fs = require('fs');
const path = require('path');
const FlexSearch = require('flexsearch');
const matter = require('gray-matter');
const { remark } = require('remark');
const html = require('remark-html');

const postsDirectory = path.join(process.cwd(), 'posts');
const publicDirectory = path.join(process.cwd(), 'public');

function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = remark()
      .use(html)
      .processSync(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

async function generateSearchIndex() {
  const allPostsData = getSortedPostsData();

  const index = new FlexSearch.Document({
    document: {
      id: 'id',
      index: ['title', 'contentHtml'],
    },
  });

  allPostsData.forEach((post) => {
    index.add({
      id: post.id,
      title: post.title,
      contentHtml: post.contentHtml,
    });
  });

  const serializedIndex = JSON.stringify(index.export());
  const outputPath = path.join(publicDirectory, 'search-index.json');

  fs.writeFileSync(outputPath, serializedIndex, 'utf8');
  console.log('FlexSearch index generated and saved to public/search-index.json');
}

generateSearchIndex();
