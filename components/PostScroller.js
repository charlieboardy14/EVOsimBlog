import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './layout.module.css'; // Using existing styles for now

const PostScroller = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 5000); // Change post every 5 seconds
    return () => clearInterval(interval);
  }, [posts.length]);

  if (!posts || posts.length === 0) {
    return null;
  }

  const currentPost = posts[currentIndex];

  // Simple function to strip HTML and truncate for snippet
  const getSnippet = (htmlContent) => {
    if (!htmlContent) return '';
    const text = htmlContent.replace(/<[^>]*>?/gm, ''); // Strip HTML tags
    return text.substring(0, 150) + (text.length > 150 ? '...' : '');
  };

  return (
    <section className={styles.postScroller}>
      <div className={styles.scrollerContent}>
        <h2>{currentPost.title}</h2>
        <p>{getSnippet(currentPost.contentHtml)}</p>
        <Link href={`/posts/${currentPost.id}`}>
          <a className={styles.readMoreButton}>Read More</a>
        </Link>
      </div>
    </section>
  );
};

export default PostScroller;