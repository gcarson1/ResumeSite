import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
const AnimatedBackground = dynamic(
  () =>
    import('animated-backgrounds').then(m => m.AnimatedBackground),
  { ssr: false }
);

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
        <>
              <AnimatedBackground 
        animationName="fireflies"
        theme="portfolio"
        opacity={1.0}
        fps={30}
      />
<section className={styles.heroWrapper}>
  <div className={styles.heroContent}>
    <div className={styles.title}>Gabriel Carson</div>
    <h2 className={styles.description}>Cloud Engineer</h2>
    <p className={styles.description}>
      Passionate about building secure, scalable cloud-native applications.
      Experienced with Infrastructure and AI-powered solutions.
    </p>

    <div className={styles.heroButtonGroup}>
      <a
        onClick={() => setShowContact(true)}
        className={styles.contactButton}
      >
        Contact Me
      </a>
    </div>
  </div>
</section>
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
            <a href="https://smartcart.cloud/" target="_blank" rel="noopener noreferrer">
              <img className={styles.projectImage} src="ResumeSite (4).png" width="284px" alt="Resume Site Preview" />
            </a>
            <p className={styles.projectDescription}>Assistant to help customers navigate stores using RAG.</p>

            <div className={styles.options}>
              <a className={styles.option} href="https://smartcart.cloud/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a className={styles.option} href="https://github.com/gcarson1/SmartCart" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className={styles.option} href="/" target="_blank" rel="noopener noreferrer">More Info</a>
            </div>
          </div>


          <div className={styles.projectSubject}>
            <a href="https://github.com/gcarson1/ResumeSite" target="_blank" rel="noopener noreferrer">
              <img className={styles.projectImage} src="ResumeSite.png" width="284px" alt="Resume Site Preview" />
            </a>
            <p className={styles.projectDescription}>My personal Portfolio and Digital Resume.</p>

            <div className={styles.options}>
              <a className={styles.option} href="https://resume-site-puce.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a className={styles.option} href="https://github.com/gcarson1/ResumeSite" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className={styles.option} href="/" target="_blank" rel="noopener noreferrer">More Info</a>
            </div>
          </div>

          <div className={styles.projectSubject}>
          <a href="https://github.com/gcarson1/FLD-PCA-and-Clustering-for-Image-Data/tree/main" target="_blank" rel="noopener noreferrer">
              <img className={styles.projectImage} src="ResumeSite (1).png" width="284px" alt="Resume Site Preview" />
            </a>
            <p className={styles.projectDescription}>Clustering Methods using dimen- sionality reduction for image data.</p>

            <div className={styles.options}>
              <a className={styles.option} href="/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a className={styles.option} href="https://github.com/gcarson1/FLD-PCA-and-Clustering-for-Image-Data" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className={styles.option} href="/" target="_blank" rel="noopener noreferrer">More Info</a>
            </div>

          </div>

          <div className={styles.projectSubject}>
          <a href="https://github.com/gcarson1/ClassMate" target="_blank" rel="noopener noreferrer">
              <img className={styles.projectImage} src="ResumeSite (2).png" width="284px" alt="Resume Site Preview" />
            </a>
            <p className={styles.projectDescription}>My teams take on RateMyProfessor but for classes.</p>

            <div className={styles.options}>
              <a className={styles.option} href="https://classmate-q4pt.onrender.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a className={styles.option} href="https://github.com/gcarson1/ClassMate" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className={styles.option} href="/" target="_blank" rel="noopener noreferrer">More Info</a>
            </div>
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
              Jan '22 - Dec '25 / Bachelor of Science in Computer Science
              </a>
          </div>

          <div className={styles.experienceLogo}>
              <img src="OLCF_official_white_10_26_15.png" width="205" alt="OLCF Logo" />
              <a className={styles.desc}>
              Jun '24 - May '25 / Azure Cloud Engineer Intern
              </a>
          </div>
        </div>
    </div>



    <div id="resume" className={styles.skills}>
        <div  className={styles.title}>
          <a>Resume</a>
        </div>

        <div className={styles.description}>
          <a></a>
        </div>
        
<a 
  href="/Gabriel Carson Resume.pdf" 
  className={styles.resumedownload} 
  target="_blank" 
  rel="noopener noreferrer"
>        <img src="57-571497_related-papers-download-pdf-button-png-removebg-preview.png" width="50" alt="Download Icon" />
        </a>
    </div>

    {showContact && (
<div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center transition-opacity duration-300 ease-in-out">
    <div className="bg-[#212121] text-white p-8 rounded-lg w-full max-w-md shadow-xl relative">
      <button
        onClick={() => setShowContact(false)}
        className="absolute top-3 right-3 text-gray-300 hover:text-white"
      >
        ✖
      </button>
<h3 className={styles.contactTitle}>Get in Touch</h3>
<ul className={styles.contactList}>
  <li className={styles.contactItem}>
    <i className="fa-brands fa-linkedin"></i>
    <a
      href="https://linkedin.com/in/gcarson1"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.contactLink}
    >
      linkedin.com/in/gcarson1
    </a>
  </li>

  <li className={styles.contactItem}>
    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
      <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
    </svg>
    <a
      href="mailto:gabecarson22@gmail.com"
      className={styles.contactLink}
    >
      gabecarson22@gmail.com
    </a>
  </li>
</ul>


    </div>
  </div>
)}

    </>
  );
}
