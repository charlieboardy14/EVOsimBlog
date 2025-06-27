import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import FlexSearch from 'flexsearch';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  // Create a FlexSearch index
  const index = new FlexSearch.Document({
    document: {
      id: 'id',
      index: ['title', 'contentHtml'], // Use contentHtml here
    },
  });

  allPostsData.forEach((post) => {
    index.add({
      id: post.id,
      title: post.title,
      contentHtml: post.contentHtml, // Pass contentHtml to the index
    });
  });

  return {
    props: {
      allPostsData,
      searchIndex: JSON.stringify(index.export()), // Stringify the index for serialization
    },
  };
}

export default function Home({ allPostsData, searchIndex }) {
  return (
    <Layout home searchIndex={searchIndex}> {/* Pass searchIndex to Layout */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>Blog Posts</h2>
        <div className="posts-list">
          {allPostsData.map(({ id, date, title }) => (
            <div key={id} className="post-preview">
              <Link href={`/posts/${id}`}>
                <h3>{title}</h3>
              </Link>
              <small className="lightText">
                <Date dateString={date} />
              </small>
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
        .posts-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .post-preview {
          margin-bottom: 2em;
          border-bottom: 1px solid #eee;
          padding-bottom: 1.5em;
        }
        .post-preview:last-child {
          border-bottom: none;
        }
        .post-preview h3 {
          margin: 0;
          font-size: 1.8em;
          line-height: 1.3;
        }
        .post-preview a {
          text-decoration: none;
          color: inherit;
        }
        .post-preview a:hover {
          text-decoration: underline;
        }
      `}</style>
    </Layout>
  );
}