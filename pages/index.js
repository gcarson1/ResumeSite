import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Gabriel Carson</title>
        <link rel="icon" href="/favicon1.ico" />
      </Head>
     <div>
      <a href="/" className={styles.title}>Gabriel Carson</a>
     </div>

     <div>
      <a className={styles.description}>loading...</a>
     </div>
    </div>
  );
}
