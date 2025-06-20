import Link from 'next/link'

export default function FriendsPage() {
  const friends = [
    {
      name: 'Alex Chen',
      description: 'Brilliant ML researcher at Stanford',
      website: 'https://alexchen.dev',
      note: 'Always pushes me to think deeper about algorithms'
    },
    {
      name: 'Marie Dubois',
      description: 'French exchange student & design guru',
      website: 'https://mariedesigns.fr',
      note: 'Taught me that good design is invisible'
    },
    {
      name: 'James Kwame',
      description: 'Cybersecurity expert & fellow African in tech',
      website: 'https://jameskwame.com',
      note: 'Makes security concepts actually understandable'
    },
    {
      name: 'Prof. Jema Ndibwile',
      description: 'Research supervisor & mentor',
      website: 'https://cmu.edu/faculty/ndibwile',
      note: 'Believes in making technology accessible to everyone'
    }
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '700px', padding: '0 32px', paddingTop: '80px' }}>
        <main>
          <h1 style={{ fontSize: '36px', fontWeight: 'normal', color: '#374151', marginBottom: '24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            L'équipe (Friends)
          </h1>
          
          <div style={{ marginBottom: '32px' }}>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6', fontSize: '18px' }}>
              The amazing people who inspire me, challenge my thinking, and make this journey worthwhile.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              These are the folks I'm grateful to know — brilliant minds, kind hearts, and the people who 
              remind me that the best part of any project is the team you build it with.
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            {friends.map((friend, index) => (
              <div key={index} style={{ marginBottom: '24px', paddingLeft: '20px', borderLeft: '2px solid #10B981' }}>
                <h3 style={{ fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                  <a href={friend.website} style={{ color: '#D2691E', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                    {friend.name}
                  </a>
                </h3>
                <p style={{ color: '#6B7280', fontSize: '16px', marginBottom: '4px' }}>
                  {friend.description}
                </p>
                <p style={{ color: '#6B7280', fontSize: '14px', fontStyle: 'italic' }}>
                  {friend.note}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '32px', backgroundColor: '#F9FAFB', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#374151', marginBottom: '12px' }}>
              Want to be featured here?
            </h3>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6', fontSize: '14px' }}>
              If we've worked together, learned from each other, or if you're doing something amazing 
              in tech, education, or making the world a better place, I'd love to feature you here!
            </p>
            <Link href="/contact" style={{ padding: '8px 16px', backgroundColor: '#3B82F6', color: 'white', textDecoration: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '500' }}>
              Let's Connect
            </Link>
          </div>
        </main>
      </div>

      <div style={{ position: 'absolute', top: '32px', left: '32px' }}>
        <Link href="/" style={{ color: '#D2691E', textDecoration: 'none', fontSize: '14px' }}>
          ← Index
        </Link>
      </div>
    </div>
  )
}