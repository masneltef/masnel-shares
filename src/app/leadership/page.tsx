import Link from 'next/link'

export default function LeadershipPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Main Content */}
      <div style={{ width: '100%', maxWidth: '700px', padding: '0 32px', paddingTop: '80px' }}>
        <main>
          {/* Title */}
          <h1 style={{ fontSize: '36px', fontWeight: 'normal', color: '#374151', marginBottom: '24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Leadership & Service
          </h1>
          
          {/* Main Content */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6', fontSize: '18px' }}>
              Through various leadership roles at Carnegie Mellon University, I've developed skills in team management, cultural bridge-building, and community engagement while contributing to the diverse campus experience.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              My leadership journey at Carnegie Mellon has been defined by a commitment to inclusive excellence and collaborative growth. As President of the French Club, I've led cultural exchange initiatives that bring together students from diverse backgrounds, fostering understanding and appreciation for French culture and language.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              In my role as Sergeant at Arms for Toastmasters, I've supported the public speaking development of fellow students, helping create an environment where everyone feels comfortable expressing their ideas and building confidence in communication. This experience has taught me the value of structured learning and supportive mentorship.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              As Team Captain of the CMU Football Team, I've learned to balance competitive excellence with academic achievement, leading by example and fostering team cohesion both on and off the field. This role has reinforced my belief that leadership is about serving others and helping them reach their potential.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              These experiences have shaped my understanding that effective leadership involves creating inclusive environments where diverse perspectives are valued, supporting others' growth while maintaining high standards, and building bridges between different communities and cultures.
            </p>
            
            <p style={{ fontSize: '14px', color: '#9CA3AF', fontStyle: 'italic' }}>
              Last updated January 2025
            </p>
          </div>

          {/* Current Leadership Positions */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'normal', color: '#374151', marginBottom: '16px' }}>Current Leadership Positions</h2>
            
            <div style={{ marginBottom: '24px', paddingLeft: '20px', borderLeft: '2px solid #3B82F6' }}>
              <h3 style={{ fontWeight: '500', color: '#374151', marginBottom: '4px' }}>President</h3>
              <p style={{ color: '#6B7280', fontSize: '16px', marginBottom: '4px' }}>French Club - Carnegie Mellon University</p>
              <p style={{ fontSize: '14px', color: '#6B7280', fontWeight: '500', marginBottom: '8px' }}>January 2024 - January 2025</p>
              
              <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '12px' }}>
                Leading cultural exchange initiatives and language learning programs for the CMU community, fostering cross-cultural understanding and appreciation.
              </p>
              
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#4B5563', marginBottom: '8px' }}>Key Contributions</h4>
                <ul style={{ color: '#6B7280', fontSize: '14px', paddingLeft: '20px', marginBottom: '12px' }}>
                  <li style={{ marginBottom: '4px' }}>Organized monthly cultural events attracting 100+ participants</li>
                  <li style={{ marginBottom: '4px' }}>Established partnerships with local French cultural organizations</li>
                  <li style={{ marginBottom: '4px' }}>Coordinated language exchange programs with native speakers</li>
                  <li style={{ marginBottom: '4px' }}>Managed club budget and strategic planning for cultural activities</li>
                </ul>
              </div>
            </div>
            
            <div style={{ marginBottom: '24px', paddingLeft: '20px', borderLeft: '2px solid #10B981' }}>
              <h3 style={{ fontWeight: '500', color: '#374151', marginBottom: '4px' }}>Sergeant at Arms</h3>
              <p style={{ color: '#6B7280', fontSize: '16px', marginBottom: '4px' }}>Toastmasters - Carnegie Mellon University</p>
              <p style={{ fontSize: '14px', color: '#6B7280', fontWeight: '500', marginBottom: '8px' }}>January 2024 - January 2025</p>
              
              <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '12px' }}>
                Supporting public speaking development and maintaining meeting protocols for enhanced learning experiences in communication and leadership skills.
              </p>
              
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#4B5563', marginBottom: '8px' }}>Key Contributions</h4>
                <ul style={{ color: '#6B7280', fontSize: '14px', paddingLeft: '20px', marginBottom: '12px' }}>
                  <li style={{ marginBottom: '4px' }}>Facilitated structured speaking sessions for skill development</li>
                  <li style={{ marginBottom: '4px' }}>Mentored new members in public speaking techniques</li>
                  <li style={{ marginBottom: '4px' }}>Maintained meeting order and time management protocols</li>
                  <li style={{ marginBottom: '4px' }}>Contributed to creating a supportive learning environment</li>
                </ul>
              </div>
            </div>
            
            <div style={{ marginBottom: '24px', paddingLeft: '20px', borderLeft: '2px solid #F59E0B' }}>
              <h3 style={{ fontWeight: '500', color: '#374151', marginBottom: '4px' }}>Team Captain</h3>
              <p style={{ color: '#6B7280', fontSize: '16px', marginBottom: '4px' }}>CMU Football Team - Carnegie Mellon University</p>
              <p style={{ fontSize: '14px', color: '#6B7280', fontWeight: '500', marginBottom: '8px' }}>August 2023 - May 2025</p>
              
              <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '12px' }}>
                Leading team strategy, fostering team cohesion, and representing student-athletes in university athletics while promoting academic excellence.
              </p>
              
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '500', color: '#4B5563', marginBottom: '8px' }}>Key Contributions</h4>
                <ul style={{ color: '#6B7280', fontSize: '14px', paddingLeft: '20px', marginBottom: '12px' }}>
                  <li style={{ marginBottom: '4px' }}>Led team through competitive seasons with improved performance</li>
                  <li style={{ marginBottom: '4px' }}>Coordinated training schedules and team building activities</li>
                  <li style={{ marginBottom: '4px' }}>Served as liaison between coaching staff and team members</li>
                  <li style={{ marginBottom: '4px' }}>Promoted academic excellence alongside athletic achievement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Leadership Philosophy */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'normal', color: '#374151', marginBottom: '16px' }}>Leadership Philosophy</h2>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              My approach to leadership is rooted in the belief that the best outcomes emerge when team members support each other's growth while maintaining high standards and clear communication. I strive to create inclusive environments where diverse perspectives are valued and everyone has the opportunity to contribute meaningfully to our shared goals.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              Through my various roles, I've learned that effective leadership is about serving others and helping them reach their potential. Whether it's facilitating cultural exchange, supporting public speaking development, or building team cohesion, I focus on creating collaborative environments that foster both individual and collective success.
            </p>
            
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#4B5563', marginBottom: '8px' }}>Core Leadership Principles</h3>
              <ul style={{ color: '#6B7280', fontSize: '14px', paddingLeft: '20px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '4px' }}>Inclusive leadership that values diverse perspectives and experiences</li>
                <li style={{ marginBottom: '4px' }}>Excellence through collaboration and mutual support</li>
                <li style={{ marginBottom: '4px' }}>Clear communication and transparent decision-making</li>
                <li style={{ marginBottom: '4px' }}>Commitment to serving others and fostering growth</li>
                <li style={{ marginBottom: '4px' }}>Building bridges between different communities and cultures</li>
              </ul>
            </div>
          </div>

          {/* Skills Developed */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'normal', color: '#374151', marginBottom: '16px' }}>Skills Developed Through Leadership</h2>
            
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#4B5563', marginBottom: '8px' }}>Communication & Interpersonal Skills</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                <span style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', color: '#334155', fontSize: '14px', fontWeight: '500', borderRadius: '20px', border: '1px solid #E2E8F0' }}>Cross-cultural Communication</span>
                <span style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', color: '#334155', fontSize: '14px', fontWeight: '500', borderRadius: '20px', border: '1px solid #E2E8F0' }}>Public Speaking</span>
                <span style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', color: '#334155', fontSize: '14px', fontWeight: '500', borderRadius: '20px', border: '1px solid #E2E8F0' }}>Conflict Resolution</span>
                <span style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', color: '#334155', fontSize: '14px', fontWeight: '500', borderRadius: '20px', border: '1px solid #E2E8F0' }}>Active Listening</span>
              </div>
            </div>
            
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#4B5563', marginBottom: '8px' }}>Project Management & Organization</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                <span style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', color: '#334155', fontSize: '14px', fontWeight: '500', borderRadius: '20px', border: '1px solid #E2E8F0' }}>Event Planning</span>
                <span style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', color: '#334155', fontSize: '14px', fontWeight: '500', borderRadius: '20px', border: '1px solid #E2E8F0' }}>Budget Management</span>
                <span style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', color: '#334155', fontSize: '14px', fontWeight: '500', borderRadius: '20px', border: '1px solid #E2E8F0' }}>Strategic Planning</span>
                <span style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', color: '#334155', fontSize: '14px', fontWeight: '500', borderRadius: '20px', border: '1px solid #E2E8F0' }}>Time Management</span>
              </div>
            </div>
            
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#4B5563', marginBottom: '8px' }}>Team Development & Mentorship</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', color: '#334155', fontSize: '14px', fontWeight: '500', borderRadius: '20px', border: '1px solid #E2E8F0' }}>Team Building</span>
                <span style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', color: '#334155', fontSize: '14px', fontWeight: '500', borderRadius: '20px', border: '1px solid #E2E8F0' }}>Mentorship</span>
                <span style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', color: '#334155', fontSize: '14px', fontWeight: '500', borderRadius: '20px', border: '1px solid #E2E8F0' }}>Motivation & Inspiration</span>
                <span style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', color: '#334155', fontSize: '14px', fontWeight: '500', borderRadius: '20px', border: '1px solid #E2E8F0' }}>Collaborative Problem-Solving</span>
              </div>
            </div>
          </div>

          {/* Community Impact */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'normal', color: '#374151', marginBottom: '16px' }}>Community Impact</h2>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              These leadership experiences have taught me the importance of serving others while developing my own capabilities. Whether fostering cultural understanding through the French Club, supporting personal development through Toastmasters, or building team cohesion on the football field, each role has contributed to the vibrant Carnegie Mellon community.
            </p>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              Through these roles, I've learned that leadership is not about commanding others, but about creating environments where everyone can thrive and contribute their unique strengths. The experience has reinforced my commitment to inclusive excellence and collaborative growth in all my future endeavors.
            </p>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              If you're interested in learning more about my leadership approach or discussing collaboration opportunities, please feel free to{' '}
              <Link href="/contact" style={{ color: '#D2691E', textDecoration: 'none' }}>
                connect with me
              </Link>
              . You can also learn more{' '}
              <Link href="/about" style={{ color: '#D2691E', textDecoration: 'none' }}>
                about my background
              </Link>
              {' '}and explore my{' '}
              <Link href="/projects" style={{ color: '#D2691E', textDecoration: 'none' }}>
                technical projects
              </Link>
              .
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