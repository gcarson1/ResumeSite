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
          Hi, I'm Gabriel Carson, a tech enthusiast passionate about building innovative solutions that blend cloud technologies, AI, and cybersecurity. With experience in Azure-based data analytics, Infrastructure as Code (IaC), and hands-on projects in machine learning and secure web development, I thrive on solving complex problems and delivering impactful results. I'm excited to contribute my skills to create cutting-edge technologies that shape the future.          </a>
        </div>

    </div>



    <div id="skills" className={styles.skills}>
        <div className={styles.title}>
          <a>Skills</a>
        </div>

        <div className={styles.gallery}>
          <div className={styles.galleryLogo}>
              <img src="c_logo_icon.png" alt="C Logo" width="90px" />
          </div>

          <div className={styles.galleryLogo}>
              <img src="13841574.png" alt="c++ Logo" width="90px" />
          </div>

          <div className={styles.galleryLogo}>
              <img src="Python-logo-notext.svg.png" alt="Python Logo" width="90px" />
          </div>

          <div className={styles.galleryLogo}>
              <img src="azure_logo_icon.png" alt="Azure Logo"width="90px" />
          </div>

          <div className={styles.galleryLogo}>
              <img src="/terraform.png" alt="Terraform Logo"width="90px" />
          </div>

          <div className={styles.galleryLogo}>
              <img src="next-js.svg" alt="Next.js Logo"width="90px"/>
          </div>
        </div>
    </div>



    <div id="projects" className={styles.skills}>
        <div className={styles.title}>
          <a>Projects</a>
        </div>
        <div className={styles.description}>
          <p>Click On a Project's Preview Image to Learn More About It!</p>
        </div>

        <div className={styles.projectGallery}>
          <div className={styles.projectSubject}>
            <a href="https://github.com/gcarson1/ResumeSite" target="_blank" rel="noopener noreferrer">
              <img className={styles.projectImage} src="ResumeSite.png" width="256px" alt="Resume Site Preview" />
            </a>
            <p className={styles.projectDescription}>This is my personal Portfolio and Digital Resume</p>

            <div className={styles.projectTags}>
              <p className={styles.tag}>Tags:</p>
              <a className={styles.tagBubble1}>HTML</a>
              <a className={styles.tagBubble2}>CSS</a>
              <a className={styles.tagBubble1}>JavaScript</a>
              <a className={styles.tagBubble2}>Vercel</a>
            </div>
          </div>

          <div className={styles.projectSubject}>
          <a href="https://github.com/gcarson1/FLD-PCA-and-Clustering-for-Image-Data/tree/main" target="_blank" rel="noopener noreferrer">
              <img className={styles.projectImage} src="ResumeSite (1).png" width="256px" alt="Resume Site Preview" />
            </a>
            <p className={styles.projectDescription}>Clustering Methods using dimen- sionality reduction for image data.</p>

            <div className={styles.projectTags}>
              <p className={styles.tag}>Tags:</p>
              <a className={styles.tagBubble1}>Python</a>
              <a className={styles.tagBubble2}>ML</a>
          </div>

          </div>

          <div className={styles.projectSubject}>

          </div>

          <div className={styles.projectSubject}>

          </div>
        </div>
    </div>



    <div id="experience" className={styles.skills}>
        <div className={styles.title}>
          <a>Experience</a>
        </div>

        <div className={styles.experienceGallery}>
          <div className={styles.experienceLogo}>
              <img src="University - HorizLeftLogo-OnDark (RGB).png" width="200" alt="University Logo" />
              <a className={styles.desc}>
              Jan '22 - Current / Bachelor or Science in Computer Science
              </a>
          </div>

          <div className={styles.experienceLogo}>
              <img src="OLCF_official_white_10_26_15.png" width="205" alt="OLCF Logo" />
              <a className={styles.desc}>
              Jun '24 - Current / Azure Cloud Engineer Intern
              </a>
          </div>
        </div>
    </div>



    <div id="resume" className={styles.skills}>
        <div  className={styles.title}>
          <a>Resume</a>
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
