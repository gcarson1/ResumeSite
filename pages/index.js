import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
        <>
<section className={styles.heroWrapper}>
  <div className={styles.heroContent}>
    <div className={styles.title}>Gabriel Carson</div>
    <h2 className={styles.description}>Cloud Engineer</h2>
    <p className={styles.description}>
      Passionate about building secure, scalable cloud-native applications.
      Experienced with Azure, OpenTofu, and AI-powered solutions.
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
            <a href="https://smart-cart-0fafb1441615.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img className={styles.projectImage} src="ResumeSite (4).png" width="256px" alt="Resume Site Preview" />
            </a>
            <p className={styles.projectDescription}>Assistant to help customers navigate stores using RAG.</p>

            <div className={styles.projectTags}>
              <p className={styles.tag}>Tags:</p>
              <a className={styles.tagBubble1}>LLM</a>
              <a className={styles.tagBubble2}>Flask</a>
              <a className={styles.tagBubble1}>Team</a>
              <a className={styles.tagBubble2}>RAG</a>
            </div>
          </div>


          <div className={styles.projectSubject}>
            <a href="https://github.com/gcarson1/ResumeSite" target="_blank" rel="noopener noreferrer">
              <img className={styles.projectImage} src="ResumeSite.png" width="256px" alt="Resume Site Preview" />
            </a>
            <p className={styles.projectDescription}>My personal Portfolio and Digital Resume.</p>

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
          <a href="https://github.com/gcarson1/ClassMate" target="_blank" rel="noopener noreferrer">
              <img className={styles.projectImage} src="ResumeSite (2).png" width="256px" alt="Resume Site Preview" />
            </a>
            <p className={styles.projectDescription}>Team project to create a service like Rate My Professor but for Classes.</p>

            <div className={styles.projectTags}>
              <p className={styles.tag}>Tags:</p>
              <a className={styles.tagBubble1}>Azure</a>
              <a className={styles.tagBubble2}>JavaScript</a>
              <a className={styles.tagBubble1}>SQL</a>
              <a className={styles.tagBubble2}>Team</a>
          
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
              Jan '22 - Current / Bachelor of Science in Computer Science
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
    <img src="/email-icon.png" alt="Email" className={styles.contactIcon} />
    <a
      href="mailto:gabe@example.com"
      className={styles.contactLink}
    >
      gabe@example.com
    </a>
  </li>
</ul>


    </div>
  </div>
)}

    </>
  );
}
