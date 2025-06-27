import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';

export const siteTitle = 'EvoSim Blog';

export default function Layout({ children, home }) {
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
          <Link href="/">Home</Link> | <Link href="/download">Download</Link>
        </nav>
        <h1 className={styles.headerTitle}>{siteTitle}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}