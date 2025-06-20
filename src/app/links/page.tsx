import Link from 'next/link'

export default function LinksPage() {
  const links = [
    // Accessibility & Inclusive Design
    {
      title: 'WebAIM',
      url: 'https://webaim.org',
      description: 'Leading resource for web accessibility knowledge and tools'
    },
    {
      title: 'A11y Project',
      url: 'https://www.a11yproject.com',
      description: 'Community-driven effort to make digital accessibility easier'
    },
    {
      title: 'Inclusive Design Toolkit',
      url: 'https://inclusivedesigntoolkit.com',
      description: 'Microsoft\'s comprehensive guide to inclusive design principles'
    },
    {
      title: 'Deque Accessibility Blog',
      url: 'https://www.deque.com/blog',
      description: 'Expert insights on digital accessibility and compliance'
    },
    {
      title: 'WAVE Web Accessibility Evaluation Tool',
      url: 'https://wave.webaim.org',
      description: 'Essential tool for testing web accessibility in real-time'
    },

    // Machine Learning & AI
    {
      title: 'Distill',
      url: 'https://distill.pub',
      description: 'Clear, interactive explanations of machine learning concepts'
    },
    {
      title: 'Google AI Blog',
      url: 'https://ai.googleblog.com',
      description: 'Latest research and developments from Google\'s AI teams'
    },
    {
      title: 'OpenAI Blog',
      url: 'https://openai.com/blog',
      description: 'Cutting-edge AI research and responsible AI development'
    },
    {
      title: 'Papers With Code',
      url: 'https://paperswithcode.com',
      description: 'ML papers with code implementations and benchmarks'
    },
    {
      title: 'Towards Data Science',
      url: 'https://towardsdatascience.com',
      description: 'Medium publication sharing concepts, ideas and codes about data science'
    },

    // African Tech & Innovation
    {
      title: 'TechCrunch Africa',
      url: 'https://techcrunch.com/category/startups/africa',
      description: 'Latest news and trends in African tech and startups'
    },
    {
      title: 'Disrupt Africa',
      url: 'https://disrupt-africa.com',
      description: 'African tech startup news, funding, and ecosystem insights'
    },
    {
      title: 'Africa.com Tech',
      url: 'https://www.africa.com/technology',
      description: 'Technology developments and digital transformation across Africa'
    },
    {
      title: 'iAfrikan',
      url: 'https://www.iafrikan.com',
      description: 'African technology, business, and innovation stories'
    },

    // Autism & Neurodiversity
    {
      title: 'Autistic Self Advocacy Network',
      url: 'https://autisticadvocacy.org',
      description: 'Run by and for autistic people, advocating for human rights'
    },
    {
      title: 'Neurodiversity Hub',
      url: 'https://neurodiversityhub.org',
      description: 'Resources and advocacy for neurodivergent individuals'
    },
    {
      title: 'Autism Research Institute',
      url: 'https://autism.org',
      description: 'Research and resources for autism spectrum conditions'
    },
    {
      title: 'Thinking Person\'s Guide to Autism',
      url: 'https://thinkingautismguide.com',
      description: 'Evidence-based information about autism from multiple perspectives'
    },

    // AgriTech & Sustainable Agriculture
    {
      title: 'AgFunder News',
      url: 'https://agfundernews.com',
      description: 'Global food and agriculture technology investment news'
    },
    {
      title: 'Modern Farmer',
      url: 'https://modernfarmer.com',
      description: 'Agriculture, food, and life for the modern world'
    },
    {
      title: 'Precision Agriculture',
      url: 'https://www.precisionag.com',
      description: 'Technology solutions for modern farming practices'
    },
    {
      title: 'Food and Agriculture Organization (FAO)',
      url: 'https://www.fao.org/digital-agriculture/en',
      description: 'UN\'s digital agriculture initiatives and sustainable farming'
    },

    // Drone Technology
    {
      title: 'DroneLife',
      url: 'https://dronelife.com',
      description: 'Commercial drone industry news and applications'
    },
    {
      title: 'sUAS News',
      url: 'https://www.suasnews.com',
      description: 'Small unmanned aircraft systems news and developments'
    },
    {
      title: 'DroneDJ',
      url: 'https://dronedj.com',
      description: 'Latest drone technology news and reviews'
    },

    // Educational Technology
    {
      title: 'EdTech Hub',
      url: 'https://edtechhub.org',
      description: 'Evidence-based insights on education technology'
    },
    {
      title: 'MIT Technology Review - AI Education',
      url: 'https://www.technologyreview.com/topic/artificial-intelligence',
      description: 'How AI is transforming education and learning'
    },
    {
      title: 'EdSurge',
      url: 'https://www.edsurge.com',
      description: 'Education technology news and research'
    },

    // Cybersecurity
    {
      title: 'KrebsOnSecurity',
      url: 'https://krebsonsecurity.com',
      description: 'In-depth security news and investigation'
    },
    {
      title: 'SANS Institute',
      url: 'https://www.sans.org/blog',
      description: 'Cybersecurity training and awareness resources'
    },
    {
      title: 'Schneier on Security',
      url: 'https://www.schneier.com',
      description: 'Expert analysis on security and privacy issues'
    },

    // Developer Resources
    {
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org',
      description: 'Comprehensive web development documentation'
    },
    {
      title: 'Smashing Magazine',
      url: 'https://www.smashingmagazine.com',
      description: 'Web design and development articles and resources'
    },
    {
      title: 'CSS-Tricks',
      url: 'https://css-tricks.com',
      description: 'Daily articles about CSS, HTML, JavaScript, and web design'
    },

    // Innovation & Future Tech
    {
      title: 'MIT Technology Review',
      url: 'https://www.technologyreview.com',
      description: 'Authoritative source for emerging technology trends'
    },
    {
      title: 'Wired',
      url: 'https://www.wired.com',
      description: 'Technology, science, culture, and their intersection'
    },
    {
      title: 'Next Big Future',
      url: 'https://www.nextbigfuture.com',
      description: 'News and analysis of future technology developments'
    },

    // French Tech & Culture (Personal Interest)
    {
      title: 'French Tech',
      url: 'https://lafrenchtech.com/en',
      description: 'Official platform for French tech ecosystem and innovation'
    },
    {
      title: 'L\'Usine Digitale',
      url: 'https://www.usine-digitale.fr',
      description: 'French digital industry news and trends'
    }
  ]

  const categories = [
    'Accessibility & Inclusive Design',
    'Machine Learning & AI',
    'African Tech & Innovation',
    'Autism & Neurodiversity',
    'AgriTech & Sustainable Agriculture',
    'Drone Technology',
    'Educational Technology',
    'Cybersecurity',
    'Developer Resources',
    'Innovation & Future Tech',
    'French Tech & Culture'
  ]

  const getCategoryLinks = (category) => {
    const categoryMap = {
      'Accessibility & Inclusive Design': links.slice(0, 5),
      'Machine Learning & AI': links.slice(5, 10),
      'African Tech & Innovation': links.slice(10, 14),
      'Autism & Neurodiversity': links.slice(14, 18),
      'AgriTech & Sustainable Agriculture': links.slice(18, 22),
      'Drone Technology': links.slice(22, 25),
      'Educational Technology': links.slice(25, 28),
      'Cybersecurity': links.slice(28, 31),
      'Developer Resources': links.slice(31, 34),
      'Innovation & Future Tech': links.slice(34, 37),
      'French Tech & Culture': links.slice(37, 39)
    }
    return categoryMap[category] || []
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '700px', padding: '0 32px', paddingTop: '80px' }}>
        <main>
          <h1 style={{ fontSize: '36px', fontWeight: 'normal', color: '#374151', marginBottom: '24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Links I Like
          </h1>
          
          <div style={{ marginBottom: '32px' }}>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6', fontSize: '18px' }}>
              A curated collection of websites, blogs, and resources that fuel my curiosity and shape my understanding of technology and accessibility.
            </p>
            
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              These are the digital spaces where I go to learn, stay updated. From accessibility guides to African tech innovations, each link represents 
              a piece of the knowledge puzzle that drives my work.
            </p>
          </div>

          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '500', color: '#374151', marginBottom: '16px', borderBottom: '1px solid #E5E7EB', paddingBottom: '8px' }}>
                {category}
              </h2>
              
              <div style={{ display: 'grid', gap: '16px' }}>
                {getCategoryLinks(category).map((link, linkIndex) => (
                  <div key={linkIndex} style={{ paddingLeft: '20px', borderLeft: '2px solid #F1F5F9', paddingBottom: '8px' }}>
                    <h3 style={{ fontWeight: '500', color: '#374151', marginBottom: '4px', fontSize: '16px' }}>
                      <a href={link.url} style={{ color: '#D2691E', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                        {link.title}
                      </a>
                    </h3>
                    <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.4' }}>
                      {link.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ marginBottom: '32px', backgroundColor: '#F9FAFB', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#374151', marginBottom: '12px' }}>
              Always Learning
            </h3>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6', fontSize: '14px' }}>
              These resources continuously shape my perspective on technology, accessibility, and innovation. 
              If you know of other great blogs or websites that align with inclusive design, African tech, 
              or cutting-edge research, I'd love to discover them!
            </p>
            <Link href="/contact" style={{ padding: '8px 16px', backgroundColor: '#3B82F6', color: 'white', textDecoration: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '500' }}>
              Share a Resource
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