import Link from 'next/link'

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Main Content */}
      <div style={{ width: '100%', maxWidth: '700px', padding: '0 32px', paddingTop: '80px' }}>
        <main>
          {/* Title */}
          <h1 style={{ fontSize: '36px', fontWeight: 'normal', color: '#374151', marginBottom: '24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            About
          </h1>
          
          {/* Main Content */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6', fontSize: '18px' }}>
              Hi, I'm Yvan. I like to build things that matter.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              I'm a software engineer and data scientist who enjoys learning about: machine learning algorithms, 
              accessible technology design, cross-cultural communication, sustainable innovation.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              I just graduated with a Master's degree from Carnegie Mellon University, where I spent my days researching 
              gamified cybersecurity education, developing a Unity-based game to teach cybersecurity concepts,
              leading the French Club (Merci d'avoir pris le temps de lire), and being an athlete of the soccer team 
              (where I've learned that debugging and reading defenses require surprisingly similar skills).
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              When I'm not wrestling with Unity interfaces or convincing Python to behave, you'll find me 
              learning from fellow Toastmasters in the art of not saying "umm" every third word, or exploring 
              a couple of languages surprisingly, always after those daily streaks and quests on Duo, while contemplating why JavaScript was designed 
              the way it was.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              Please feel free to{' '}
              <Link href="/contact" style={{ color: '#D2691E', textDecoration: 'none' }}>
                reach out
              </Link>
              {' '}regarding anything — from why TensorFlow documentation sometimes 
              reads like ancient poetry, to deep discussions about making technology more inclusive, or even 
              just to share your thoughts on whether pineapple belongs on pizza (spoiler: it does). Dad jokes 
              and tech memes are always appreciated ツ
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              Here's my{' '}
              <Link href="/resume" style={{ color: '#D2691E', textDecoration: 'none' }}>
                resume
              </Link>
              , if you're into that kind of stuff.
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