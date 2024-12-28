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
          <a className={styles.title}>Hi, I'm Gabriel</a>
        </div>
        <div>
          <a className={styles.description}>
            I am a Computer Science student at The University of Tennessee-Knoxville graduating in December 2025. I have professional experience in Cloud Development and Data Governance. I also enjoy digital audio software stemming from my hobby of music production. I like the outdoors, basketball, cooking, and obviously video games.
          </a>
        </div>
      </div>

      <div id="skills" className={styles.skills}>
        <div className={styles.title}>
          <a>Skills</a>
        </div>

        {/* Optimized Gallery */}
        <div className={styles.gallery}>
          <img src="c_logo_icon.png" alt="C Logo" className={styles.galleryLogo} />
          <img src="13841574.png" alt="c++ Logo" className={styles.galleryLogo} />
          <img src="Python-logo-notext.svg.png" alt="Python Logo" className={styles.galleryLogo} />
          <img src="azure_logo_icon.png" alt="Azure Logo" className={styles.galleryLogo} />
          <img src="purview_logo_icon.png" alt="Purview Logo" className={styles.galleryLogo} />
          <img src="/terraform.png" alt="Terraform Logo" className={styles.galleryLogo} />
          <img src="next-js.svg" alt="Next.js Logo" className={styles.galleryLogo} />
        </div>
      </div>

      <div id="projects" className={styles.skills}>
        <div>
          <a className={styles.title}>Projects</a>
        </div>

        <div className={styles.projectGallery}>
          <div className={styles.projectSubject}>
            <img src="streamline-ultimate-regular---free--24x24-SVG/Cloud-Add--Streamline-Ultimate.svg" alt="C Logo"/>
            <a> Cloud </a>
          </div>

          <div className={styles.projectSubject}>
            <img src="streamline-ultimate-regular---free--24x24-SVG/Fiber-Access-1--Streamline-Ultimate.svg" alt="c++ Logo" />
            <a> Systems Programming </a>
          </div>

          <div className={styles.projectSubject}>
            <img src="streamline-ultimate-regular---free--24x24-SVG/Help-Question-Network--Streamline-Ultimate.svg" alt="Python Logo"/>
            <a> Machine Learning </a>
          </div>

          <div className={styles.projectSubject}>
            <img src="streamline-ultimate-regular---free--24x24-SVG/Lock-Hierarchy--Streamline-Ultimate.svg" alt="Purview Logo" />
            <a> CyberSec </a>
          </div> 
        </div>
      </div>

      <div id="experience" className={styles.skills}>
        <div>
          <a className={styles.title}>Experience</a>
        </div>

        <div className={styles.projectGallery}>

        <div className={styles.experienceLogo}>
          <img src="University - HorizLeftLogo-OnDark (RGB).png" width="200" alt="University Logo" />
          <a className={styles.desc}>
          Jan '22 - Current / Bachelor or Science in Computer Science
          </a>
        </div>

        <div className={styles.experienceLogo}>
          <img src="OLCF_official_white_10_26_15.png" width="205" alt="OLCF Logo" />
          <a className={styles.desc}>
          Jun '24 - Current / Cloud Engineering Intern
          </a>
        </div>

        </div>

      </div>

      <div id="resume" className={styles.skills}>
        <div>
          <a className={styles.title}>Resume</a>
        </div>
        <div className={styles.description}>
          <a>Click Below to View</a>
        </div>
        <a href="Copy of Resume.pdf" className={styles.resumedownload} target='_blank'>
          <img src="Business-User-Curriculum--Streamline-Core.png" width="50" alt="Download Icon" />
        </a>
      </div>
    </div>
  );
}
