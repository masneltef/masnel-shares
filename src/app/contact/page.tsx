import Link from 'next/link'

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Main Content */}
      <div style={{ width: '100%', maxWidth: '700px', padding: '0 32px', paddingTop: '80px' }}>
        <main>
          {/* Title */}
          <h1 style={{ fontSize: '36px', fontWeight: 'normal', color: '#374151', marginBottom: '24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Say Hello
          </h1>
          
          {/* Main Content */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6', fontSize: '18px' }}>
              Whether you're a fellow student, researcher, industry professional, or someone with an interesting project idea, I'm always interested in meaningful conversations.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              Don't hesitate to reach out – every great collaboration and friendship starts with that first conversation. 
              I'm particularly excited to connect with people passionate about accessible technology, machine learning 
              applications, or anyone who wants to geek out about why some programming languages make us question our 
              life choices (looking at you, JavaScript).
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              You can reach me via email at:
            </p>
            
            <div style={{ backgroundColor: '#F9FAFB', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '14px', border: '1px solid #E5E7EB', marginBottom: '16px' }}>
              masneltefiang &lt;at&gt; icloud &lt;dot&gt; com
            </div>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              You can also find me on{' '}
              <a href="https://github.com/masneltef" style={{ color: '#D2691E', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {' '}if you want to check out my latest projects first.
            </p>
            
            <p style={{ fontSize: '14px', color: '#9CA3AF', fontStyle: 'italic' }}>
              Last updated January 2025
            </p>
          </div>

          {/* Current Status */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'normal', color: '#374151', marginBottom: '16px' }}>Current Status</h2>
            
            <div style={{ marginBottom: '16px', paddingLeft: '20px', borderLeft: '2px solid #10B981' }}>
              <h3 style={{ fontWeight: '500', color: '#374151', marginBottom: '4px' }}>📍 Location</h3>
              <p style={{ color: '#6B7280', fontSize: '16px', marginBottom: '4px' }}>Kigali, 
              Rwanda</p>
              <p style={{ color: '#6B7280', fontSize: '14px' }}>
                Currently based in Kigali, but open to remote collaborations globally
              </p>
            </div>
            
            <div style={{ marginBottom: '16px', paddingLeft: '20px', borderLeft: '2px solid #3B82F6' }}>
              <h3 style={{ fontWeight: '500', color: '#374151', marginBottom: '4px' }}>⏰ Availability</h3>
              <p style={{ color: '#6B7280', fontSize: '16px', marginBottom: '4px' }}>Open for Opportunities</p>
              <p style={{ color: '#6B7280', fontSize: '14px' }}>
                Research collaborations, internship opportunities, technical discussions, and networking
              </p>
            </div>
            
            <div style={{ marginBottom: '16px', paddingLeft: '20px', borderLeft: '2px solid #F59E0B' }}>
              <h3 style={{ fontWeight: '500', color: '#374151', marginBottom: '4px' }}>⚡ Response Time</h3>
              <p style={{ color: '#6B7280', fontSize: '16px', marginBottom: '4px' }}>24-48 hours</p>
              <p style={{ color: '#6B7280', fontSize: '14px' }}>
                For urgent matters, please mention "URGENT" in your subject line
              </p>
            </div>
          </div>

          {/* Languages */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'normal', color: '#374151', marginBottom: '16px' }}>Languages</h2>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              Feel free to reach out in any of these languages. It is fun connecting with people from different 
              cultural backgrounds and am always eager to practice my language skills.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ padding: '8px 16px', backgroundColor: '#DCFCE7', color: '#166534', fontSize: '14px', fontWeight: '500', borderRadius: '20px' }}>
                🇺🇸 English (Native)
              </span>
              <span style={{ padding: '8px 16px', backgroundColor: '#DBEAFE', color: '#1E40AF', fontSize: '14px', fontWeight: '500', borderRadius: '20px' }}>
                🇫🇷 French (Fluent)
              </span>
              <span style={{ padding: '8px 16px', backgroundColor: '#FEF3C7', color: '#92400E', fontSize: '14px', fontWeight: '500', borderRadius: '20px' }}>
                🇩🇪 German (Novice)
              </span>
            </div>
          </div>
        </main>
      </div>

      {/* Navigation back to home */}
      <div style={{ position: 'absolute', top: '32px', left: '32px' }}>
        <Link href="/" style={{ color: '#D2691E', textDecoration: 'none', fontSize: '14px' }}>
          ← Index
        </Link>
      </div>
    </div>
  )
}