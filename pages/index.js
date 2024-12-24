import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    
    <div>

      <Head>
        <title>Gabriel Carson</title>
        <link rel="icon" href="/favicon1.ico" />
      </Head>

      <div id="gabe" className={styles.home}>

      <div>
        <a href="/" className={styles.title}>Hi, I'm Gabriel</a>
      </div>

      <div>
        <a className={styles.description}>I am a Computer Science student at The University of Tennessee-Knoxville graduating in December 2025. I have professional experience in Cloud Development and Data Governance. I also enjoy digital audio software stemming from my hobby of music production. I like the outdoors, basketball, cooking, and obviously video games.</a>
      </div>

     </div>

     <div id="skills" className={styles.skills}>

      <div>
        <a href="/" className={styles.title}>Skills</a>
      </div>

      <div className={styles.gallery}>
          <img src="C_logo.png"/>
      </div>

      <div className={styles.gallery}>
          <img src="13841574.png"/>
      </div>

      <div className={styles.gallery}>
          <img src="azure.png"/>
      </div>

      <div className={styles.gallery}>
          <img src="Microsoft_Purview_logo.svg.png"/>
      </div>

      <div className={styles.gallery}>
          <img src="Python-logo-notext.svg.png"/>
      </div>

      <div className={styles.gallery}>
          <img src="terraform.png" />
      </div>

      <div className={styles.gallery}>
          <img src="next-js.svg" />          
      </div>

     </div>

    <div id="projects" className={styles.skills}>

     <div>
      <a href="/" className={styles.title}>Projects</a>
     </div>

    </div>

    <div id="experience" className={styles.skills}>

      <div>
        <a href="/" className={styles.title}>Experience</a>
      </div>

     </div>

     <div id="resume" className={styles.skills}>

      <div>
        <a href="/" className={styles.title}>Resume</a>
      </div>

     </div>

    </div>
    
  );
}
