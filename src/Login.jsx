function Login() {
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
      marginBottom: '1rem',
      fontFamily: '"Cinzel", serif',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    services: {
      fontSize: '1.2rem',
      fontFamily: '"Cinzel", serif',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: 'white',
      marginBottom: '2rem',
      textAlign: 'center',
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
      fontFamily:
        '"Trajan Pro", "Cinzel", "Times Ten LT Std Display", "Garamond Premier Pro Display", Georgia, "Times New Roman", Times, serif',
      opacity: 0.8,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
  }

  const handleSubmit = e => {
    e.preventDefault()
    // For now, just show an alert since no login system is implemented
    alert('Login system coming soon. Please contact info@LFG.CPA for access.')
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
              PRIVACY POLICY
            </a>
          </div>
          <div style={styles.copyright}>© 2025 LAUTERBACH FINANCIAL GROUP</div>
        </div>
      </footer>
    </div>
  )
}

export default Login
