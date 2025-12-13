// pages/index.js
import { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Modal from "../components/Modal";

// Lazy animated background (no SSR)
const AnimatedBackground = dynamic(
  () => import("animated-backgrounds").then((m) => m.AnimatedBackground),
  { ssr: false }
);

/** Typed-ish docs for yourself:
 * @typedef {'smartcart'|'resume'|'fldpca'|'classmate'} ProjectId
 */

/** Single source of truth for projects (100-word summaries) */
const PROJECTS = {
  smartcart: {
    title: "SmartCart",
    img: "ResumeSite (4).png",
    desc: "Assistant to help customers navigate stores using RAG.",
    live: "https://smartcart.cloud/",
    github: "https://github.com/gcarson1/SmartCart",
    tech: [
      "Python/Flask",
      "PostgreSQL",
      "Docker",
      "Azure AI Search (RAG)",
      "OpenAI API",
      "Azure Container Apps",
      "Azure Key Vault",
      "CI/CD",
    ],
    summary:
      "SmartCart is a store-navigation and product discovery assistant. Shoppers ask natural questions (“Where’s oat milk?”, “Cheapest gluten-free pasta?”) and get aisle-level answers plus an optimized route that minimizes backtracking. A retrieval-augmented index built from the catalog and planogram-like metadata grounds responses; the LLM interprets intent and formats concise directions with sensible substitutions when items are out of stock. The API is a containerized Flask service fronting Azure AI Search; PostgreSQL stores sessions and lists; secrets live in Azure Key Vault. Everything ships via Docker and CI/CD to Azure Container Apps with structured logs and hit-rate/latency metrics for quick debugging.",
  },
  resume: {
    title: "Resume Site",
    img: "ResumeSite.png",
    desc: "My personal Portfolio and Digital Resume.",
    live: "https://resume-site-puce.vercel.app/",
    github: "https://github.com/gcarson1/ResumeSite",
    tech: ["Next.js", "React", "CSS Modules", "Dynamic Imports", "Vercel", "Accessible Modals"],
    summary:
      "A lean personal portfolio focused on clarity, speed, and maintainability. Next.js handles routing and rendering; the animated background is dynamically imported so initial payloads stay light. UI is React with CSS Modules, keeping styles scoped and predictable. “Contact” and “More Info” modals are accessible (ESC to close, focus management, scroll lock). Projects render from a single data object, avoiding duplicated markup. Imagery is sized for solid LCP and wrapped with subtle shadows and radius. Deployed on Vercel for edge caching and instant rollbacks. Result: a clean, fast portfolio that’s easy to extend with posts, analytics, and richer case studies.",
  },
  fldpca: {
    title: "FLD / PCA & Clustering for Image Data",
    img: "ResumeSite (1).png",
    desc: "Image clustering using dimensionality reduction.",
    live: null,
    github: "https://github.com/gcarson1/FLD-PCA-and-Clustering-for-Image-Data",
    tech: ["NumPy", "SciPy", "Matplotlib", "Fisher’s LDA", "PCA (eigendecomp/SVD)", "k-Means", "Winner-Take-All"],
    summary:
      "This repo tests how classical dimensionality reduction changes clustering on image data. PCA captures variance with orthogonal components; Fisher’s LDA projects onto directions maximizing class separation. After projection, we compare k-Means (batch) and a Winner-Take-All online variant, tracking convergence and stability. Implementations are first-principles NumPy/SciPy with clear math: scatter matrices for LDA, covariance/eigendecomposition or SVD for PCA. Evaluation includes reconstruction error, within-cluster sums, silhouette, and simple k-NN accuracy. Takeaway: PCA denoises; LDA sharpens separation when labels exist; reduced spaces make clustering more stable and interpretable—useful baselines before jumping to heavier models.",
  },
  classmate: {
    title: "ClassMate",
    img: "ResumeSite (2).png",
    desc: "My team's take on RateMyProfessor but for classes.",
    live: "https://classmate-q4pt.onrender.com/",
    github: "https://github.com/gcarson1/ClassMate",
    tech: ["React UI", "Node/Express API", "PostgreSQL", "Auth & Sessions", "Input Validation", "Deployed on Render"],
    summary:
      "ClassMate lets students review courses—not just instructors—so peers see workload, assessment style, and fit before enrolling. The UI offers searchable, filterable lists, badges for attributes (writing-heavy, lab-based), and tidy rating distributions. The backend is a small Express service with PostgreSQL storing normalized courses, sections, and reviews; indexes keep list queries fast. Session auth gates posting; server-side validation and rate limits curb spam. The React frontend uses CSS Modules and responsive layouts; filters collapse into a mobile drawer. Deployed on Render with environment-scoped secrets. Practical goal: calmer, clearer choices when building a schedule.",
  },
};

/** Order you want to render in */
const PROJECT_ORDER = ["smartcart", "resume", "fldpca", "classmate"];

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  /** @type {[keyof typeof PROJECTS | null, Function]} */
  const [activeProject, setActiveProject] = useState(null);

  const openProject = (id) => setActiveProject(id);
  const closeProject = () => setActiveProject(null);
  const project = activeProject ? PROJECTS[activeProject] : null;

  return (
    <>
      <Head>
        <title>Gabriel Carson — Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AnimatedBackground animationName="fireflies" theme="portfolio" opacity={1.0} fps={30} />

      {/* HERO */}
      <section className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.title}>Gabriel Carson</div>
          <h2 className={styles.description}>Software Engineer</h2>
          <p className={styles.description}>
            Passionate about building secure, scalable cloud-native applications.
            Experienced with Infrastructure and AI-powered solutions.
          </p>
          <div className={styles.heroButtonGroup}>
            <a onClick={() => setShowContact(true)} className={styles.contactButton}>
              Contact Me
            </a>
            <a href="/blog" target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
              Blog
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <div id="skills" className={styles.skills}>
        <div className={styles.title}><a>Skills</a></div>
        <div className={styles.gallery}>
          <div className={styles.galleryLogo}><img src="c_logo_icon.png" alt="C" width="90" /></div>
          <div className={styles.galleryLogo}><img src="13841574.png" alt="C++" width="90" /></div>
          <div className={styles.galleryLogo}><img src="Python-logo-notext.svg.png" alt="Python" width="90" /></div>
          <div className={styles.galleryLogo}><img src="azure_logo_icon.png" alt="Azure" width="90" /></div>
          <div className={styles.galleryLogo}><img src="/terraform.png" alt="Terraform" width="90" /></div>
          <div className={styles.galleryLogo}><img src="next-js.svg" alt="Next.js" width="90" /></div>
        </div>
      </div>

      {/* PROJECTS */}
      <div id="projects" className={styles.skills}>
        <div className={styles.title}><a>Projects</a></div>
        <div className={styles.description}><p>Click a project’s image or button to learn more.</p></div>

        <div className={styles.projectGallery}>
          {PROJECT_ORDER.map((id) => {
            const p = PROJECTS[id];
            return (
              <div key={id} className={styles.projectSubject}>
                <button
                  type="button"
                  onClick={() => openProject(id)}
                  aria-label={`Open more info for ${p.title}`}
                  title={`More about ${p.title}`}
                >
                  <img className={styles.projectImage} src={p.img} width="284" alt={`${p.title} preview`} />
                </button>

                <p className={styles.projectDescription}>{p.desc}</p>

                <div className={styles.options}>
                  {p.live && (
                    <a className={styles.option} href={p.live} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a className={styles.option} href={p.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  <button
                    type="button"
                    className={styles.option} 
                    onClick={() => openProject(id)}
                  >
                    More Info
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div id="experience" className={styles.skills}>
        <div className={styles.title}><a>Experience</a></div>
        <div className={styles.experienceGallery}>
          <div className={styles.experienceLogo}>
            <img src="University - HorizLeftLogo-OnDark (RGB).png" width="200" alt="University" />
            <a className={styles.desc}>Jan '22 - Dec '25 / Bachelor of Science in Computer Science</a>
          </div>
          <div className={styles.experienceLogo}>
            <img src="OLCF_official_white_10_26_15.png" width="205" alt="OLCF" />
            <a className={styles.desc}>Jun '24 - May '25 / Azure Cloud Engineer Intern</a>
          </div>
        </div>
      </div>

      {/* RESUME */}
      <div id="resume" className={styles.skills}>
        <div className={styles.title}><a>Resume</a></div>
        <a href="/Gabriel Carson Resume.pdf" className={styles.resumedownload} target="_blank" rel="noopener noreferrer">
          <img
            src="57-571497_related-papers-download-pdf-button-png-removebg-preview.png"
            width="50"
            alt="Download Resume"
          />
        </a>
      </div>

      {/* CONTACT MODAL */}
      <Modal isOpen={showContact} onClose={() => setShowContact(false)} title="Get in Touch" wide>
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
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
              <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
              <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
            </svg>
            <a href="mailto:gabecarson22@gmail.com" className={styles.contactLink}>
              gabecarson22@gmail.com
            </a>
          </li>
        </ul>
      </Modal>

      {/* PROJECT MODAL */}
      <Modal isOpen={!!activeProject} onClose={closeProject} title={project?.title} wide>
        {project && (
          <div className={styles.projectModalBody}>
            <div className={styles.projectModalGrid}>
              <div className={styles.modalMedia}>
                <img src={project.img} alt={`${project.title} preview`} className={styles.modalImage} />
              </div>

              <div className={styles.modalMeta}>
                <p className={styles.modalSummary}>{project.summary}</p>

                {project.tech?.length > 0 && (
                  <div className={styles.techChips}>
                    {project.tech.map((t) => (
                      <span key={t} className={styles.techChip}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className={styles.modalActions}>
                  {project.live && (
                    <a
                      className={`${styles.btn} ${styles.btnSecondary}`}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      className={`${styles.btn} ${styles.btnSecondary}`}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
