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
      <a href="/" className={styles.title}>Gabriel...</a>
     </div>

     <div>
      <a className={styles.description}>I am a Computer Science student at The University of Tennessee-Knoxville graduating in December 2025. I have professional experience in Cloud Development and Data Governance. I also enjoy digital audio software stemming from my hobby of music production. I like the outdoors, basketball, cooking, and obviously video games.</a>
     </div>

     <div>
      <a href="/" className={styles.title}>Skills</a>
     </div>

     <div>
      <a href="/" className={styles.title}>Projects</a>
     </div>


     <div>
      <a href="/" className={styles.title}>Experience</a>
     </div>


     <div>
      <a href="/" className={styles.title}>Resume</a>
     </div>

    </div>
    
  );
}
