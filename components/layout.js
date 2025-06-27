import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import { useState, useEffect } from 'react';
import { Document } from 'flexsearch'; // Explicitly import Document

export const siteTitle = 'EvoSim Blog';

export default function Layout({ children, home, searchIndex }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searcher, setSearcher] = useState(null);

  useEffect(() => {
    if (searchIndex) {
      const newSearcher = new Document({
        document: {
          id: 'id',
          index: ['title', 'contentHtml'],
        },
      });
      newSearcher.import(JSON.parse(searchIndex));
      setSearcher(newSearcher);
    }
  }, [searchIndex]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 2 && searcher) { // Only search if query is at least 3 characters
      const results = searcher.search(query, {
        enrich: true,
      });
      setSearchResults(results[0]?.result || []);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A blog for the EvoSim evolution simulator"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <nav>
          <Link href="/">Home</Link> | <Link href="/download">Download</Link> | <Link href="/admin">Admin</Link>
        </nav>
        <h1 className={styles.headerTitle}>{siteTitle}</h1>
        {home && (
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={handleSearch}
              className={styles.searchInput}
            />
            {searchResults.length > 0 && (
              <ul className={styles.searchResults}>
                {searchResults.map((result) => (
                  <li key={result.id}>
                    <Link href={`/posts/${result.id}`}>
                      {result.doc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}