import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './blog-post.module.css';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [homeHover, setHomeHover] = useState(false);
  const [blogHover, setBlogHover] = useState(false);

  // Blog post data
  const blogPosts = {
    'debugging-flaky-ci': {
      title: 'Debugging a Flaky CI Pipeline',
      date: 'October 12, 2025',
      image: 'https://picsum.photos/seed/code/900/400',
      content: `
        <h2>Debugging a Flaky CI Pipeline</h2>
        <p>Intermittent CI failures can be caused by test order dependence, shared state, or resource limits. I walk through a reproducible approach: isolate flaky tests, add deterministic seeding, and surface hidden dependencies with parallel runs.</p>
        
        <h3>Understanding Flakiness</h3>
        <p>Flaky tests are one of the most frustrating problems in continuous integration. They pass sometimes and fail other times, making it hard to know if your changes actually broke something or if the test suite is just being unreliable.</p>
        
        <h3>Root Causes</h3>
        <p>There are several common causes of test flakiness:</p>
        <ul>
          <li><strong>Test Order Dependence:</strong> Tests that pass when run individually but fail when run after other tests</li>
          <li><strong>Shared State:</strong> Tests that don't properly clean up after themselves</li>
          <li><strong>Resource Limits:</strong> Tests that depend on available system resources</li>
          <li><strong>Timing Issues:</strong> Tests that rely on specific timing or network delays</li>
          <li><strong>Non-deterministic Randomness:</strong> Tests using random data without proper seeding</li>
        </ul>
        
        <h3>Solving the Problem</h3>
        <p>A systematic approach to solving flaky tests involves:</p>
        <ol>
          <li>Isolate the flaky test by running it multiple times</li>
          <li>Add deterministic seeding to remove randomness</li>
          <li>Run tests in parallel to surface hidden dependencies</li>
          <li>Add proper cleanup and setup hooks</li>
          <li>Monitor CI metrics to catch new flakiness early</li>
        </ol>
        
        <h3>Conclusion</h3>
        <p>By taking a methodical approach to test flakiness, you can build confidence in your CI system and prevent it from becoming a bottleneck to development velocity.</p>
      `
    },
    'default': {
      title: 'Blog Post',
      date: new Date().toLocaleDateString(),
      image: 'https://picsum.photos/seed/blog/900/400',
      content: '<h2>Loading blog post...</h2><p>The blog post content will appear here.</p>'
    }
  };

  const post = blogPosts[slug] || blogPosts['default'];

  return (
    <>
      <Head>
        <title>{post.title} — Gabriel Carson</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ 
        background: '#080808', 
        minHeight: '100vh',
        color: '#e0e0e0',
        fontFamily: 'Inter, sans-serif'
      }}>
        {/* Header matching blog home page */}
        <header style={{
          textAlign: 'center',
          padding: '60px 20px 44px 20px',
          background: 'linear-gradient(180deg, rgba(18,20,22,0.96), rgba(8,9,10,0.75))',
          borderBottom: '1px solid rgba(255,255,255,0.03)',
          backdropFilter: 'blur(6px)',
          position: 'relative',
          overflow: 'visible'
        }}>
          <div style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 20px',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              width: '100%',
              marginBottom: '24px'
            }}>
              <h1 style={{
                margin: 0,
                fontFamily: 'Merriweather, Georgia, serif',
                fontWeight: 700,
                fontSize: '2.6rem',
                color: '#ffffff',
                letterSpacing: '-0.5px'
              }}>{post.title}</h1>
            </div>
            <p style={{ color: '#9aa0a6', fontWeight: 300, margin: '8px 0 0 0' }}>{post.date}</p>
            <div style={{ marginTop: '18px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <a 
                href="/" 
                style={{
                  display: 'inline-block',
                  background: '#F6B54A',
                  color: '#04221f',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 6px 18px rgba(14,28,26,0.18)',
                  transition: 'transform 160ms ease, box-shadow 160ms ease',
                  cursor: 'pointer',
                  transform: homeHover ? 'translateY(-3px)' : 'translateY(0)',
                  boxShadow: homeHover ? '0 14px 34px rgba(14,28,26,0.28)' : '0 6px 18px rgba(14,28,26,0.18)'
                }}
                onMouseEnter={() => setHomeHover(true)}
                onMouseLeave={() => setHomeHover(false)}
              >
                Home
              </a>
              <a 
                href="/blog" 
                style={{
                  display: 'inline-block',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#F6B54A',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: 'none',
                  transition: 'transform 160ms ease',
                  cursor: 'pointer',
                  transform: blogHover ? 'translateY(-3px)' : 'translateY(0)'
                }}
                onMouseEnter={() => setBlogHover(true)}
                onMouseLeave={() => setBlogHover(false)}
              >
                Back to Blog
              </a>
            </div>
          </div>
          <div style={{
            position: 'absolute',
            right: '-6%',
            top: '10px',
            width: '260px',
            height: '260px',
            background: 'radial-gradient(circle at 30% 30%, rgba(246,181,74,0.08), transparent 30%)',
            filter: 'blur(18px)',
            pointerEvents: 'none',
            transform: 'rotate(-8deg)',
            zIndex: 0
          }}></div>
        </header>

        {/* Main content */}
        <main style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1rem' }}>
          <article style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            {/* Featured Image */}
            <figure style={{ margin: 0 }}>
              <img 
                src={post.image} 
                alt={post.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  display: 'block'
                }}
              />
            </figure>

            {/* Article Metadata & Content */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
              {/* Post metadata */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                paddingBottom: '1.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{
                  display: 'inline-flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  alignItems: 'center'
                }}>
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(246,181,74,0.12)',
                    color: '#F6B54A',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    Article
                  </span>
                  <time style={{
                    color: '#9aa0a6',
                    fontSize: '0.95rem'
                  }}>
                    {post.date}
                  </time>
                </div>
                <div style={{
                  color: '#9aa0a6',
                  fontSize: '0.9rem',
                  display: 'flex',
                  gap: '1.5rem',
                  flexWrap: 'wrap'
                }}>
                  <span>Reading time: ~5 min</span>
                </div>
              </div>

              {/* Main article content with enhanced typography */}
              <div 
                className={styles.articleContent}
              >
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Article footer */}
              <div style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div>
                  <p style={{ margin: '0 0 0.5rem 0', color: '#9aa0a6', fontSize: '0.9rem' }}>Share this article</p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#F6B54A',
                      textDecoration: 'none',
                      transition: 'all 160ms ease',
                      fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(246,181,74,0.12)';
                      e.target.style.borderColor = 'rgba(246,181,74,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                    }}
                    >
                      𝕏
                    </a>
                    <a href="#" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#F6B54A',
                      textDecoration: 'none',
                      transition: 'all 160ms ease',
                      fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(246,181,74,0.12)';
                      e.target.style.borderColor = 'rgba(246,181,74,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                    }}
                    >
                      in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>

        {/* Footer spacer */}
        <footer style={{ padding: '4rem 1rem', textAlign: 'center', color: '#666' }}>
          <p>&copy; 2025 Gabriel Carson. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
