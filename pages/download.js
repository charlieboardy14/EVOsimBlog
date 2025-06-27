import Head from 'next/head';
import Layout from '../components/layout';

export default function Download() {
  return (
    <Layout>
      <Head>
        <title>Download EvoSim</title>
      </Head>
      <section>
        <h2>Download EvoSim</h2>
        <p>
          Click the button below to download the Python script for the
          evolution simulator.
        </p>
        <a href="/EvoSim.py" download>
          <button>Download EvoSim.py</button>
        </a>
      </section>
    </Layout>
  );
}