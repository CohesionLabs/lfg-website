function App() {
  // Check if screen is mobile
  const isMobile = window.innerWidth <= 768

  // Smooth scroll function
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const styles = {
    container: {
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      lineHeight: '1.6',
      margin: 0,
      padding: 0,
      scrollBehavior: 'smooth',
    },
    header: {
      backgroundColor: '#fff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      height: '80px',
      objectFit: 'contain',
    },
    nav: {
      display: isMobile ? 'none' : 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: '500',
      transition: 'color 0.3s',
    },
    button: {
      backgroundColor: '#0A0D12',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    hero: {
      background: '#0A0D12',
      color: 'white',
      padding: '6rem 0',
      position: 'relative',
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '2rem' : '4rem',
      alignItems: 'center',
    },
    heroText: {
      textAlign: isMobile ? 'center' : 'left',
    },
    heroImageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heroImage: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    },
    heroTitle: {
      fontSize: isMobile ? '2.5rem' : '3.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
      lineHeight: '1.2',
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      opacity: 0.9,
      maxWidth: '600px',
      margin: '0 auto 2rem',
    },
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      marginBottom: '2rem',
      flexWrap: 'wrap',
    },
    primaryButton: {
      backgroundColor: '#3B82F6',
      color: 'white',
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: 'white',
      padding: '1rem 2rem',
      border: '2px solid white',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    services: {
      padding: '6rem 0',
      backgroundColor: '#f8f9fa',
    },
    servicesContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#0A0D12',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
    },
    serviceCard: {
      backgroundColor: 'white',
      padding: '2.5rem',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    serviceIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      color: '#3B82F6',
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#0A0D12',
      position: 'relative',
    },
    serviceDescription: {
      color: '#666',
      lineHeight: '1.6',
    },
    contact: {
      padding: '6rem 0',
      backgroundColor: '#0A0D12',
      color: 'white',
      textAlign: 'center',
    },
    contactContent: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    contactTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
    },
    contactSubtitle: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      opacity: 0.9,
    },
    footer: {
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '3rem 0',
      textAlign: 'center',
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    // Media query styles for mobile
    '@media (max-width: 768px)': {
      heroContent: {
        gridTemplateColumns: '1fr',
        gap: '2rem',
        textAlign: 'center',
      },
      heroTitle: {
        fontSize: '2.5rem',
      },
      nav: {
        display: 'none',
      },
    },
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <img
            src='/LFG-Logo.png'
            alt='Lauterbach Financial Group'
            style={styles.logo}
          />
          <nav style={styles.nav}>
            <a href='#' style={styles.navLink}>
              Home
            </a>
            <a href='#' style={styles.navLink}>
              About
            </a>
            <a
              href='#services'
              style={styles.navLink}
              onClick={e => {
                e.preventDefault()
                scrollToSection('services')
              }}>
              Services
            </a>
            <a href='#' style={styles.navLink}>
              Contact
            </a>
          </nav>
          <button style={styles.button}>Get Quote</button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              Trusted Financial Expertise for Your Success
            </h1>
            <p style={styles.heroSubtitle}>
              Professional accounting, tax, transaction, and advisory services
              tailored to your business needs
            </p>
            <div style={styles.ctaButtons}>
              <button style={styles.primaryButton}>
                Schedule Consultation
              </button>
              <button
                style={styles.secondaryButton}
                onClick={() => scrollToSection('services')}>
                Our Services
              </button>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '2rem',
              }}>
              <span style={{ fontSize: '1.25rem' }}>⭐⭐⭐⭐⭐</span>
              <span>5.0</span>
              <span style={{ opacity: 0.8 }}>200+ reviews</span>
            </div>
          </div>
          <div style={styles.heroImageContainer}>
            <img
              src='https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              alt='Professional team meeting discussing financial strategies'
              style={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' style={styles.services}>
        <div style={styles.servicesContent}>
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <div style={styles.servicesGrid}>
            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>📊</div>
              <h3 style={styles.serviceTitle}>
                Accounting
                <div
                  style={{
                    width: '40px',
                    height: '3px',
                    backgroundColor: '#3B82F6',
                    margin: '0.5rem auto',
                  }}></div>
              </h3>
              <p style={styles.serviceDescription}>
                Comprehensive bookkeeping, financial reporting, and accounting
                services to maintain accurate records and ensure regulatory
                compliance.
              </p>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>📋</div>
              <h3 style={styles.serviceTitle}>
                Tax
                <div
                  style={{
                    width: '40px',
                    height: '3px',
                    backgroundColor: '#3B82F6',
                    margin: '0.5rem auto',
                  }}></div>
              </h3>
              <p style={styles.serviceDescription}>
                Strategic tax preparation, planning, and compliance services
                designed to minimize your tax liability while ensuring full
                adherence to current regulations.
              </p>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>🤝</div>
              <h3 style={styles.serviceTitle}>
                Transactions
                <div
                  style={{
                    width: '40px',
                    height: '3px',
                    backgroundColor: '#3B82F6',
                    margin: '0.5rem auto',
                  }}></div>
              </h3>
              <p style={styles.serviceDescription}>
                Expert guidance through complex business transactions including
                mergers, acquisitions, due diligence, and financial
                restructuring to maximize value.
              </p>
            </div>

            <div style={styles.serviceCard}>
              <div style={styles.serviceIcon}>💡</div>
              <h3 style={styles.serviceTitle}>
                Advisory
                <div
                  style={{
                    width: '40px',
                    height: '3px',
                    backgroundColor: '#3B82F6',
                    margin: '0.5rem auto',
                  }}></div>
              </h3>
              <p style={styles.serviceDescription}>
                Strategic financial consulting and business advisory services to
                help optimize operations, improve profitability, and achieve
                long-term growth objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contact}>
        <div style={styles.contactContent}>
          <h2 style={styles.contactTitle}>Ready to Get Started?</h2>
          <p style={styles.contactSubtitle}>
            Contact us today to discover how we can help your business thrive
            with professional financial services.
          </p>
          <button
            style={{
              ...styles.primaryButton,
              fontSize: '1.25rem',
              padding: '1.25rem 2.5rem',
            }}>
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={{ marginBottom: '2rem' }}>
            <img
              src='/LFG-Logo.png'
              alt='Lauterbach Financial Group'
              style={{
                height: '60px',
                objectFit: 'contain',
                marginBottom: '1rem',
              }}
            />
            <p style={{ opacity: 0.8 }}>
              Professional financial services for your business success.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem',
            }}>
            <div>
              <h4 style={{ marginBottom: '1rem', color: 'white' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem', opacity: 0.8 }}>
                  Accounting
                </li>
                <li style={{ marginBottom: '0.5rem', opacity: 0.8 }}>
                  Tax Planning
                </li>
                <li style={{ marginBottom: '0.5rem', opacity: 0.8 }}>
                  Transactions
                </li>
                <li style={{ marginBottom: '0.5rem', opacity: 0.8 }}>
                  Advisory
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem', color: 'white' }}>Contact</h4>
              <p style={{ opacity: 0.8, margin: 0 }}>
                Ready to work with trusted professionals?
              </p>
            </div>
          </div>
          <div
            style={{
              borderTop: '1px solid #333',
              paddingTop: '2rem',
              opacity: 0.7,
            }}>
            <p>&copy; 2025 Lauterbach Financial Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
