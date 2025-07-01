import Link from 'next/link'

export default function ResearchPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Main Content */}
      <div style={{ width: '100%', maxWidth: '700px', padding: '0 32px', paddingTop: '80px' }}>
        <main>
          {/* Title */}
          <h1 style={{ fontSize: '36px', fontWeight: 'normal', color: '#374151', marginBottom: '24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Research Experience
          </h1>
          
          {/* Main Content */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6', fontSize: '18px' }}>
              I'm passionate about making technology more accessible and educational experiences more inclusive.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              Currently, I'm working under the supervision of Prof. Jema Ndibwile at Carnegie Mellon to create gamified cybersecurity 
              training that actually works for everyone, including people with autism and diverse cultural backgrounds. 
              Turns out, making security training both fun and accessible is harder than convincing people to use 
              strong passwords, but infinitely more rewarding.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              My approach involves collaborating with educators and autism specialists (who are absolute heroes, by the way) 
              to build interfaces in Unity that don't overwhelm anyone's senses. I'm also diving deep into Python 
              analytics to understand how different people learn and what makes them stick around rather than clicking 
              the dreaded "X" button.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              Beyond my current work, I've explored customer classification using machine learning basically teaching 
              computers to understand people better than some humans do. Achieved 85% accuracy, which I'm told is pretty 
              good (though I'm still working on understanding my own preferences half the time).
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              What gets me excited about research is the possibility of bridging technology gaps and making digital 
              experiences work for everyone, not just those who speak fluent tech. Because everyone deserves to feel 
              included in our increasingly digital world.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              Interested in collaborating or curious about my work? Feel free to{' '}
              <Link href="/contact" style={{ color: '#D2691E', textDecoration: 'none' }}>
                reach out
              </Link>
              {' '}— I love talking about research challenges, especially over good coffee.
            </p>
            
            <p style={{ fontSize: '14px', color: '#9CA3AF', fontStyle: 'italic' }}>
              Last updated January 2025
            </p>
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