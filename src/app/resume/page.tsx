import Link from 'next/link'

export default function ResumePage() {
 return (
   <div style={{ minHeight: '100vh', backgroundColor: 'white', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
     <div style={{ width: '100%', maxWidth: '700px', padding: '0 32px', paddingTop: '80px' }}>
       <main>
         <h1 style={{ fontSize: '36px', fontWeight: 'normal', color: '#374151', marginBottom: '24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
           Resume
         </h1>
         
         <div style={{ marginBottom: '32px' }}>
           <div style={{ backgroundColor: '#1F2937', color: '#F9FAFB', padding: '24px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.6', overflow: 'auto' }}>
             <div style={{ color: '#9CA3AF', marginBottom: '8px' }}></div>
             <div>
               <span style={{ color: '#F59E0B' }}>function</span>{' '}
               <span style={{ color: '#10B981' }}>CareerCheck</span>
               <span style={{ color: '#F9FAFB' }}>() {'{'}</span>
             </div>
             <div style={{ marginLeft: '16px' }}>
               <span style={{ color: '#F59E0B' }}>if</span>{' '}
               <span style={{ color: '#F9FAFB' }}>(comparingResumes) {'{'}</span>
             </div>
             <div style={{ marginLeft: '32px' }}>
               <span style={{ color: '#F9FAFB' }}>return </span>
               <span style={{ color: '#EF4444' }}>"Let's have coffee instead ☕"</span>
               <span style={{ color: '#F9FAFB' }}>;</span>
             </div>
             <div style={{ marginLeft: '16px' }}>
               <span style={{ color: '#F9FAFB' }}>{'}'}</span>
             </div>
             <div style={{ marginLeft: '16px' }}>
               <span style={{ color: '#F59E0B' }}>if</span>{' '}
               <span style={{ color: '#F9FAFB' }}>(growingDaily) {'{'}</span>
             </div>
             <div style={{ marginLeft: '32px' }}>
               <span style={{ color: '#10B981' }}>// This is what matters 🚀</span>
             </div>
             <div style={{ marginLeft: '32px' }}>
               <span style={{ color: '#F9FAFB' }}>return </span>
               <span style={{ color: '#EF4444' }}>"Keep building cool stuff!"</span>
               <span style={{ color: '#F9FAFB' }}>;</span>
             </div>
             <div style={{ marginLeft: '16px' }}>
               <span style={{ color: '#F9FAFB' }}>{'}'}</span>
             </div>
             <div>
               <span style={{ color: '#F9FAFB' }}>{'}'}</span>
             </div>
           </div>
         </div>

         <div style={{ marginBottom: '32px' }}>
           <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6', fontSize: '18px' }}>
             I believe everyone's journey is unique and comparing resumes is like comparing apples to rocket ships.
           </p>
           
           <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
             Here's the short version: I love building scalable, and sustainable systems with Python, JavaScript, C++, C Sharp 
             and Unity while leading teams and learning from great minds.
           </p>
           
           <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
             When I'm not debugging code, you'll find me practicing languages with international students, 
             playing chess, or strategizing on the soccer pitch.
           </p>
           
           <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
             Want the traditional format? Here's my{' '}
             <a href="https://www.linkedin.com/in/yvan-tefiang-009b85180/" style={{ color: '#D2691E', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
               LinkedIn
             </a>
             . But honestly, I'd rather{' '}
             <Link href="/contact" style={{ color: '#D2691E', textDecoration: 'none' }}>
               have a chat
             </Link>
             {' '}about what you're building and how we might collaborate.
           </p>
           
           <p style={{ fontSize: '14px', color: '#9CA3AF', fontStyle: 'italic' }}>
             Last updated January 2025
           </p>
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