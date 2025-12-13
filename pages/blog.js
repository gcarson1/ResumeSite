import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function BlogFrame() {
  return (
    <>
      <Head>
        <title>Blog — Gabriel Carson</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ padding: '1rem', background: '#080808', minHeight: '100vh' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        </div>

        <div style={{ height: 'calc(100vh - 64px)', marginTop: 12 }}>
          <iframe
            src="/blog/blog.html"
            title="Blog"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: 8,
              boxShadow: '0 6px 24px rgba(0,0,0,0.5)'
            }}
          />
        </div>
      </div>
    </>
  );
}
