function Login() {
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
      marginBottom: '2rem',
    },
    loginContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      padding: '3rem',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      maxWidth: '400px',
      width: '100%',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '400',
      marginBottom: '2rem',
      fontFamily: 'serif',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    input: {
      padding: '0.75rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '4px',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: 'white',
      fontSize: '1rem',
      fontFamily: 'sans-serif',
    },
    button: {
      padding: '0.75rem',
      backgroundColor: '#3B82F6',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    backLink: {
      color: 'white',
      textDecoration: 'none',
      marginTop: '2rem',
      opacity: 0.8,
      transition: 'opacity 0.3s ease',
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
  }

  const handleSubmit = e => {
    e.preventDefault()
    // For now, just show an alert since no login system is implemented
    alert('Login system coming soon. Please contact info@LFG.CPA for access.')
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

        <div style={styles.loginContainer}>
          <h1 style={styles.title}>PORTAL LOGIN</h1>

          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Email'
              style={styles.input}
              required
            />
            <input
              type='password'
              placeholder='Password'
              style={styles.input}
              required
            />
            <button
              type='submit'
              style={styles.button}
              onMouseEnter={e => (e.target.style.backgroundColor = '#2563EB')}
              onMouseLeave={e => (e.target.style.backgroundColor = '#3B82F6')}>
              LOGIN
            </button>
          </form>

          <a
            href='/'
            style={styles.backLink}
            onMouseEnter={e => (e.target.style.opacity = '1')}
            onMouseLeave={e => (e.target.style.opacity = '0.8')}>
            ← Back to Home
          </a>
        </div>
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

export default Login
