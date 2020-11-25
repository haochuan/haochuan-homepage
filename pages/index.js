import styles from '../styles/Home.module.css';
import Messages from '../components/Messages';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Messages />
      </main>
    </div>
  );
}
