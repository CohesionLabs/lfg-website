import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login'

function Home() {
  const styles = {
    container: {
      fontFamily: 'Georgia, "Times New Roman", serif',
      lineHeight: '1.6',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#112537',
      color: 'white',
    },
    header: {
      position: 'absolute',
      top: '8rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10,
    },
    logo: {
      height: '100px',
      objectFit: 'contain',
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
    companyName: {
      fontSize: '3.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
      letterSpacing: '0.1em',
      fontFamily: '"Cinzel", serif',
      textTransform: 'uppercase',
    },
    services: {
      fontSize: '1.2rem',
      fontFamily: '"Cinzel", serif',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'white',
      marginBottom: '3rem',
      textAlign: 'center',
    },
    navigation: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      fontSize: '1.2rem',
      fontFamily: '"Cinzel", serif',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontVariant: 'small-caps',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      transition: 'opacity 0.3s ease',
      fontWeight: '400',
    },
    separator: {
      color: 'white',
      fontSize: '1.2rem',
      fontWeight: '300',
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
      fontFamily: '"Cinzel", serif',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    footerLink: {
      color: 'white',
      textDecoration: 'none',
      opacity: 0.8,
      transition: 'opacity 0.3s ease',
    },
    copyright: {
      fontSize: '0.9rem',
      fontFamily: '"Cinzel", serif',
      opacity: 0.8,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
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
      {/* Header with Logo */}
      <header style={styles.header}>
        <img
          src='/LFG-Icon-Logo-Dark.png'
          alt='Lauterbach Financial Group'
          style={styles.logo}
        />
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <h1 style={styles.companyName}>LAUTERBACH FINANCIAL GROUP</h1>

        <div style={styles.services}>
          ACCOUNTING | TAX | TRANSACTIONS | ADVISORY
        </div>

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
              PRIVACY POLICY
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
