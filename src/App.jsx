import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login'

function Home() {
  const styles = {
    container: {
      fontFamily: 'serif',
      lineHeight: '1.6',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#112537',
      color: 'white',
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      textAlign: 'center',
    },
    logo: {
      height: '60px',
      objectFit: 'contain',
      marginBottom: '3rem',
    },
    companyName: {
      fontSize: '3rem',
      fontWeight: '400',
      marginBottom: '2rem',
      letterSpacing: '0.05em',
      fontFamily: 'serif',
    },
    navigation: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '4rem',
      fontSize: '1.1rem',
      fontFamily: 'serif',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      transition: 'opacity 0.3s ease',
    },
    separator: {
      color: 'white',
      fontSize: '1.2rem',
    },
    footer: {
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '2rem',
      textAlign: 'left',
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    footerLinks: {
      display: 'flex',
      gap: '2rem',
      fontSize: '0.9rem',
      fontFamily: 'sans-serif',
    },
    footerLink: {
      color: 'white',
      textDecoration: 'none',
      opacity: 0.8,
      transition: 'opacity 0.3s ease',
    },
    copyright: {
      fontSize: '0.9rem',
      fontFamily: 'sans-serif',
      opacity: 0.8,
    },
    // Hover effects
    navLinkHover: {
      opacity: 0.7,
    },
    footerLinkHover: {
      opacity: 1,
    },
  }

  return (
    <div style={styles.container}>
      {/* Main Content */}
      <main style={styles.main}>
        <img
          src='/LFG-Logo.png'
          alt='Lauterbach Financial Group'
          style={styles.logo}
        />

        <h1 style={styles.companyName}>LAUTERBACH FINANCIAL GROUP</h1>

        <nav style={styles.navigation}>
          <a
            href='/login'
            style={styles.navLink}
            onMouseEnter={e => (e.target.style.opacity = '0.7')}
            onMouseLeave={e => (e.target.style.opacity = '1')}>
            PORTAL
          </a>
          <span style={styles.separator}>|</span>
          <a
            href='mailto:info@LFG.CPA'
            style={styles.navLink}
            onMouseEnter={e => (e.target.style.opacity = '0.7')}
            onMouseLeave={e => (e.target.style.opacity = '1')}>
            INQUIRIES
          </a>
        </nav>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLinks}>
            <a
              href='#'
              style={styles.footerLink}
              onMouseEnter={e => (e.target.style.opacity = '1')}
              onMouseLeave={e => (e.target.style.opacity = '0.8')}>
              DISCLOSURES
            </a>
            <a
              href='#'
              style={styles.footerLink}
              onMouseEnter={e => (e.target.style.opacity = '1')}
              onMouseLeave={e => (e.target.style.opacity = '0.8')}>
              PRIVACY POLICY
            </a>
            <a
              href='#'
              style={styles.footerLink}
              onMouseEnter={e => (e.target.style.opacity = '1')}
              onMouseLeave={e => (e.target.style.opacity = '0.8')}>
              ADV BROCHURE
            </a>
            <a
              href='#'
              style={styles.footerLink}
              onMouseEnter={e => (e.target.style.opacity = '1')}
              onMouseLeave={e => (e.target.style.opacity = '0.8')}>
              FORM CRS
            </a>
          </div>
          <div style={styles.copyright}>© 2025 LAUTERBACH FINANCIAL GROUP</div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
