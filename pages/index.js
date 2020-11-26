import styles from '../styles/Home.module.css';
import Messages from '../components/Messages';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat with Haochuan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>
        <Messages />
      </main>
    </div>
  );
}
