import Link from 'next/link'

export default function BookshelfPage() {
  const books = [
    // Tech & Programming
    { title: "Clean Code", author: "Robert C. Martin", category: "Tech", description: "A handbook of agile software craftsmanship" },
    { title: "The Pragmatic Programmer", author: "David Thomas & Andrew Hunt", category: "Tech", description: "Your journey to mastery" },
    { title: "Design Patterns", author: "Gang of Four", category: "Tech", description: "Elements of reusable object-oriented software" },
    { title: "You Don't Know JS", author: "Kyle Simpson", category: "Tech", description: "Deep dive into JavaScript mechanics" },
    { title: "Python Crash Course", author: "Eric Matthes", category: "Tech", description: "A hands-on, project-based introduction to programming" },
    { title: "Introduction to Algorithms", author: "Cormen, Leiserson, Rivest, Stein", category: "Tech", description: "The comprehensive guide to algorithms" },
    { title: "The Phoenix Project", author: "Gene Kim", category: "Tech", description: "A novel about IT, DevOps, and helping your business win" },
    { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", category: "Tech", description: "The big ideas behind reliable, scalable systems" },

    // Machine Learning & AI
    { title: "Hands-On Machine Learning", author: "Aurélien Géron", category: "AI/ML", description: "Using Scikit-Learn, Keras, and TensorFlow" },
    { title: "Pattern Recognition and Machine Learning", author: "Christopher Bishop", category: "AI/ML", description: "Comprehensive introduction to ML and pattern recognition" },
    { title: "The Elements of Statistical Learning", author: "Hastie, Tibshirani, Friedman", category: "AI/ML", description: "Data mining, inference, and prediction" },
    { title: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell & Peter Norvig", category: "AI/ML", description: "The leading textbook in artificial intelligence" },
    { title: "Deep Learning", author: "Ian Goodfellow", category: "AI/ML", description: "Mathematical and conceptual background for deep learning" },

    // African Stories & Literature
    { title: "Things Fall Apart", author: "Chinua Achebe", category: "African Literature", description: "Classic Nigerian novel about colonialism's impact" },
    { title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", category: "African Literature", description: "A powerful story of the Biafran War" },
    { title: "The Beautiful Ones Are Not Yet Born", author: "Ayi Kwei Armah", category: "African Literature", description: "Post-independence Ghana through critical eyes" },
    { title: "Nervous Conditions", author: "Tsitsi Dangarembga", category: "African Literature", description: "Coming of age in colonial Zimbabwe" },
    { title: "Purple Hibiscus", author: "Chimamanda Ngozi Adichie", category: "African Literature", description: "A story of a family torn apart by expectations" },
    { title: "The Joys of Motherhood", author: "Buchi Emecheta", category: "African Literature", description: "Exploring womanhood in traditional Nigerian society" },
    { title: "Born a Crime", author: "Trevor Noah", category: "African Memoir", description: "Stories from a South African childhood" },
    { title: "Long Walk to Freedom", author: "Nelson Mandela", category: "African Memoir", description: "The autobiography of South Africa's first Black president" },

    // Disciplined Agile & Project Management
    { title: "Choose Your WoW!", author: "Scott Ambler & Mark Lines", category: "Agile", description: "A disciplined agile delivery handbook" },
    { title: "Disciplined Agile Delivery", author: "Scott Ambler & Mark Lines", category: "Agile", description: "A practitioner's guide to agile software delivery" },
    { title: "The Agile Manifesto", author: "Kent Beck et al.", category: "Agile", description: "Principles behind the agile methodology" },
    { title: "Scrum: The Art of Doing Twice the Work in Half the Time", author: "Jeff Sutherland", category: "Agile", description: "Revolutionary approach to project management" },
    { title: "Lean Startup", author: "Eric Ries", category: "Agile", description: "How today's entrepreneurs use continuous innovation" },

    // Autism & Neurodiversity
    { title: "The Autistic Brain", author: "Temple Grandin", category: "Autism", description: "Thinking across the spectrum" },
    { title: "NeuroTribes", author: "Steve Silberman", category: "Autism", description: "The legacy of autism and the future of neurodiversity" },
    { title: "The Reason I Jump", author: "Naoki Higashida", category: "Autism", description: "The inner voice of a thirteen-year-old boy with autism" },
    { title: "Uniquely Human", author: "Barry Prizant", category: "Autism", description: "A different way of seeing autism" },
    { title: "The Complete Guide to Asperger's Syndrome", author: "Tony Attwood", category: "Autism", description: "Comprehensive resource for understanding autism spectrum" },

    // Drones & AgriTech
    { title: "The Drone Pilot's Handbook", author: "Adam Juniper", category: "Drones", description: "Everything you need to know about flying drones" },
    { title: "Precision Agriculture Technology for Crop Farming", author: "Qin Zhang", category: "AgriTech", description: "Modern farming with technology integration" },
    { title: "The Future of Agriculture", author: "Dennis Keeney", category: "AgriTech", description: "Sustainable farming in the 21st century" },
    { title: "Smart Farming with IoT", author: "Various Authors", category: "AgriTech", description: "Internet of Things applications in agriculture" },

    // Personal Development & Philosophy
    { title: "Atomic Habits", author: "James Clear", category: "Personal Development", description: "Tiny changes, remarkable results" },
    { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", category: "Personal Development", description: "Powerful lessons in personal change" },
    { title: "Mindset", author: "Carol Dweck", category: "Psychology", description: "The new psychology of success" },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Psychology", description: "How we make decisions" },
    { title: "The Power of Habit", author: "Charles Duhigg", category: "Psychology", description: "Why we do what we do in life and business" },

    // Leadership & Communication
    { title: "The Art of Public Speaking", author: "Dale Carnegie", category: "Communication", description: "Classic guide to effective public speaking" },
    { title: "How to Win Friends and Influence People", author: "Dale Carnegie", category: "Communication", description: "Timeless principles for building relationships" },
    { title: "Leaders Eat Last", author: "Simon Sinek", category: "Leadership", description: "Why some teams pull together and others don't" },
    { title: "The Culture Code", author: "Daniel Coyle", category: "Leadership", description: "The secrets of highly successful groups" },

    // Innovation & Future Tech
    { title: "The Innovator's Dilemma", author: "Clayton Christensen", category: "Innovation", description: "Revolutionary book that will change your understanding of competition" },
    { title: "Zero to One", author: "Peter Thiel", category: "Innovation", description: "Notes on startups, or how to build the future" },
    { title: "The Second Machine Age", author: "Erik Brynjolfsson & Andrew McAfee", category: "Future Tech", description: "Work, progress, and prosperity in a time of brilliant technologies" },
    { title: "Weapons of Math Destruction", author: "Cathy O'Neil", category: "Tech Ethics", description: "How big data increases inequality and threatens democracy" },

    // Accessibility & Inclusive Design
    { title: "Design for Everyone", author: "Kat Holmes", category: "Accessibility", description: "How to build products that serve everyone" },
    { title: "A Web for Everyone", author: "Sarah Horton & Whitney Quesenbery", category: "Accessibility", description: "Designing accessible user experiences" },
    { title: "Inclusive Design Patterns", author: "Heydon Pickering", category: "Accessibility", description: "Coding accessibility into web design" }
  ]

  const categories = [...new Set(books.map(book => book.category))]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '700px', padding: '0 32px', paddingTop: '80px' }}>
        <main>
          <h1 style={{ fontSize: '36px', fontWeight: 'normal', color: '#374151', marginBottom: '24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Étagère à livres
          </h1>
          
          <div style={{ marginBottom: '32px' }}>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6', fontSize: '18px' }}>
              Books that have shaped my thinking, sparked my curiosity, and continue to inspire my work.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              From technical deep-dives to African literature, from accessibility guides to agricultural innovation — 
              this collection reflects my diverse interests and the knowledge that fuels my passion for building 
              inclusive technology.
            </p>
          </div>

          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '500', color: '#374151', marginBottom: '16px', borderBottom: '1px solid #E5E7EB', paddingBottom: '8px' }}>
                {category}
              </h2>
              
              <div style={{ display: 'grid', gap: '16px' }}>
                {books.filter(book => book.category === category).map((book, bookIndex) => (
                  <div key={bookIndex} style={{ paddingLeft: '20px', borderLeft: '2px solid #F1F5F9', paddingBottom: '8px' }}>
                    <h3 style={{ fontWeight: '500', color: '#374151', marginBottom: '4px', fontSize: '16px' }}>
                      {book.title}
                    </h3>
                    <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '4px', fontStyle: 'italic' }}>
                      by {book.author}
                    </p>
                    <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.4' }}>
                      {book.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ marginBottom: '32px', backgroundColor: '#F9FAFB', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#374151', marginBottom: '12px' }}>
              Reading is Building
            </h3>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6', fontSize: '14px' }}>
              Every book here has contributed to my understanding of technology, culture, and human experience. 
              If you have recommendations that align with accessible tech, African narratives, or innovative 
              approaches to complex problems, I'd love to hear them!
            </p>
            <Link href="/contact" style={{ padding: '8px 16px', backgroundColor: '#3B82F6', color: 'white', textDecoration: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '500' }}>
              Share a Recommendation
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