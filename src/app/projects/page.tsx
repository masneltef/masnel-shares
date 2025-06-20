import Link from 'next/link'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Electric Vehicle Rental Platform - EcoRides Kigali",
      period: "Aug 2024 - Jan 2025",
      description: "Architected and developed full-stack EV rental platform serving the growing sustainable transportation market in Kigali.",
      highlights: [
        "Built with React.js, Node.js, and MongoDB",
        "Real-time booking system processing 500+ daily transactions",
        "Secure payment gateway supporting multiple currencies with 99.9% uptime",
        "Scalable architecture handling high-volume concurrent users"
      ],
      technologies: ["React.js", "TypeScript","Node.js","Express.js","MongoDB", "Payment Integration", "Real-time Systems", "Agile Development","Jira"],
      type: "Full-Stack Development"
    },
    {
      title: "Student Records Management System - Angaza Center",
      period: "Aug 2023 - Sep 2023",
      description: "Led development of a comprehensive SaaS platform designed to streamline educational administration across multiple institutions.",
      highlights: [
        "Serves 10+ educational institutions with centralized management",
        "Built using ReactJS and PostgreSQL for robust data handling",
        "Secure REST APIs handling 2000+ daily requests",
        "Comprehensive technical documentation and staff training program"
      ],
      technologies: ["ReactJS","Express.js","Node.js","Typescript", "PostgreSQL", "REST APIs", "SaaS Architecture","Agile development","Jira", "Technical Documentation", "Africa Talking","CI/CD", "AWS"],
      type: "Enterprise Software"
    },
    {
      title: "Customer Classification Research Project",
      period: "Dec 2023 - Jan 2024",
      description: "End-to-end machine learning project focused on customer segmentation using advanced classification algorithms.",
      highlights: [
        "Implemented complete ML pipeline using scikit-learn and Python",
        "Comprehensive data preparation, EDA, and feature engineering",
        "Achieved 85% accuracy in customer segmentation models",
        "Published technical documentation and presented findings to faculty"
      ],
      technologies: ["Python", "scikit-learn", "Pandas", "Statistical Analysis", "Machine Learning", "Hugging Face", "Data Visualization", "Technical Documentation","Jupyter Notebooks", "Weights & Biases", "Git"],
      type: "Data Science & ML"
    }
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Main Content */}
      <div style={{ width: '100%', maxWidth: '800px', padding: '0 32px', paddingTop: '80px' }}>
        <main>
          {/* Title */}
          <h1 style={{ fontSize: '36px', fontWeight: 'normal', color: '#374151', marginBottom: '24px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            Technical Projects
          </h1>
          
          {/* Introduction */}
          <p style={{ color: '#6B7280', marginBottom: '32px', lineHeight: '1.6', fontSize: '18px' }}>
            A collection of software engineering and data science projects showcasing full-stack development, 
            machine learning applications, and scalable system design.
          </p>

          {/* Projects List */}
          <div style={{ marginBottom: '32px' }}>
            {projects.map((project, index) => (
              <div key={index} style={{ marginBottom: '48px', padding: '32px', border: '1px solid #F1F5F9', borderRadius: '12px', backgroundColor: '#FEFEFE' }}>
                {/* Project Header */}
                <div style={{ marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    {project.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '14px', color: '#6B7280', fontWeight: '500' }}>
                      {project.period}
                    </span>
                    <span style={{ padding: '4px 12px', backgroundColor: '#D1FAE5', color: '#065F46', fontSize: '12px', borderRadius: '16px', fontWeight: '500' }}>
                      {project.type}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p style={{ color: '#6B7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  {project.description}
                </p>
                
                {/* Key Achievements */}
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontWeight: '500', color: '#374151', marginBottom: '12px', fontSize: '16px' }}>Key Achievements:</h4>
                  <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px', fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                        <span style={{ width: '6px', height: '6px', backgroundColor: '#D2691E', borderRadius: '50%', marginTop: '8px', marginRight: '12px', flexShrink: 0 }}></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 style={{ fontWeight: '500', color: '#374151', marginBottom: '12px', fontSize: '16px' }}>Technologies:</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} style={{ padding: '6px 14px', backgroundColor: '#F8FAFC', color: '#334155', fontSize: '14px', fontWeight: '500', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div style={{ backgroundColor: '#F9FAFB', padding: '24px', borderRadius: '12px', border: '1px solid #F3F4F6', marginBottom: '32px' }}>
            <h3 style={{ fontWeight: '500', color: '#374151', marginBottom: '12px', fontSize: '18px' }}>Looking for More Details?</h3>
            <p style={{ color: '#6B7280', marginBottom: '16px', lineHeight: '1.6' }}>
              These projects represent a selection of my technical work. For additional projects, 
              code samples, or detailed technical discussions, feel free to reach out.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link href="/contact" style={{ color: '#D2691E', textDecoration: 'none', fontWeight: '500' }}>
                Get in Touch
              </Link>
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