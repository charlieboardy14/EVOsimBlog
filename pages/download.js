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
            {allDownloadsData.map(({ id, title, description, file, version, changelog, system_requirements }) => (
              <li key={id}>
                <h3>{title} {version && `(v${version})`}</h3>
                <p>{description}</p>
                {changelog && (
                  <div>
                    <h4>Changelog:</h4>
                    <div dangerouslySetInnerHTML={{ __html: changelog }} />
                  </div>
                )}
                {system_requirements && (
                  <p><strong>System Requirements:</strong> {system_requirements}</p>
                )}
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