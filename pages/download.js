import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedDownloadsData } from '../lib/downloads';

export async function getStaticProps() {
  const allDownloadsData = getSortedDownloadsData();
  return {
    props: {
      allDownloadsData,
    },
  };
}

export default function Download({ allDownloadsData }) {
  return (
    <Layout>
      <Head>
        <title>Download EvoSim</title>
      </Head>
      <section>
        <h2>Downloadable Files</h2>
        {allDownloadsData.length === 0 ? (
          <p>No downloadable files available yet.</p>
        ) : (
          <ul>
            {allDownloadsData.map(({ id, title, description, file }) => (
              <li key={id}>
                <h3>{title}</h3>
                <p>{description}</p>
                {file && (
                  <a href={file} download>
                    <button>Download</button>
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </Layout>
  );
}