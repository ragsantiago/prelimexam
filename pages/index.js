import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>No Talent Required</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h4>Put 10 things that requires 0 talent:</h4>
        <ol>
          <li>Being On Time</li>
          <li>Effort</li>
          <li>Body Language</li>
          <li>Energy</li>
          <li>Attitude</li>
          <li>Being Prepared</li>
          <li>Passion</li>
          <li>Doing extra</li>
          <li>Being Coachable</li>
          <li>Work Ethic</li>
        </ol>
       <h5>(This is a sample website - you’ll be building a site like this on our Next.js tutorial.)</h5>
      </section>
    </Layout>
  );
}