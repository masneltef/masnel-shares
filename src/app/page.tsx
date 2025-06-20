import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* Main Content */}
      <div style={{ width: '100%', maxWidth: '600px', padding: '0 32px', flex: 1, display: 'flex', alignItems: 'center' }}>
        <main style={{ width: '100%' }}>
          {/* Name */}
          <h1 style={{ fontSize: '36px', fontWeight: 'normal', color: '#374151', marginBottom: '24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Yvan Masnel Tefiang
          </h1>
          
          {/* Introduction */}
          <div style={{ marginBottom: '24px' }}>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              Hello, I'm Yvan. I like to build stuff.
            </p>
            <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
              Explore some of my work listed below,{' '}
              <Link href="/about" style={{ color: '#D2691E', textDecoration: 'none' }}>
                here's more about me.
              </Link>
            </p>
          </div>

          {/* Work Categories with bullets */}
          <div style={{ marginLeft: '32px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ width: '4px', height: '4px', backgroundColor: '#9CA3AF', borderRadius: '50%', marginRight: '12px', display: 'inline-block' }}></span>
              <Link href="/projects" style={{ color: '#D2691E', textDecoration: 'none' }}>
                Technical Projects
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ width: '4px', height: '4px', backgroundColor: '#9CA3AF', borderRadius: '50%', marginRight: '12px', display: 'inline-block' }}></span>
              <Link href="/research" style={{ color: '#D2691E', textDecoration: 'none' }}>
                Research Experience
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ width: '4px', height: '4px', backgroundColor: '#9CA3AF', borderRadius: '50%', marginRight: '12px', display: 'inline-block' }}></span>
              <Link href="/links" style={{ color: '#D2691E', textDecoration: 'none' }}>
                Links I Like
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ width: '4px', height: '4px', backgroundColor: '#9CA3AF', borderRadius: '50%', marginRight: '12px', display: 'inline-block' }}></span>
              <Link href="/bookshelf" style={{ color: '#D2691E', textDecoration: 'none' }}>
                Étagère à livres
              </Link>
            </div>
          </div>

          {/* Quote Generator */}
          <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
            ...or{' '}
            <Link href="/random-quote" style={{ color: '#D2691E', textDecoration: 'none' }}>
              get inspired by a random quote
            </Link>
            .
          </p>
        </main>
      </div>

      {/* Footer - Aligned with main content at bottom */}
      <footer style={{ width: '100%', maxWidth: '600px', padding: '0 32px', paddingBottom: '32px' }}>
        <p style={{ fontSize: '12px', color: '#9CA3AF', fontStyle: 'italic' }}>
          © Yvan Masnel Tefiang, 2024. Some Rights Reserved.
        </p>
      </footer>
    </div>
  )
}