import { Link } from 'react-router-dom'

function PrivacyPolicy() {
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
      padding: '2rem',
      textAlign: 'center',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    },
    logo: {
      height: '60px',
      objectFit: 'contain',
      marginBottom: '1rem',
    },
    companyName: {
      fontSize: '2rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      letterSpacing: '0.1em',
      fontFamily: '"Cinzel", serif',
      textTransform: 'uppercase',
    },
    backLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1rem',
      fontFamily: '"Cinzel", serif',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      opacity: 0.8,
      transition: 'opacity 0.3s ease',
    },
    main: {
      flex: 1,
      maxWidth: '800px',
      margin: '0 auto',
      padding: '3rem 2rem',
      textAlign: 'left',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '600',
      marginBottom: '2rem',
      letterSpacing: '0.1em',
      fontFamily: '"Cinzel", serif',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    section: {
      marginBottom: '2rem',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
      letterSpacing: '0.05em',
      fontFamily: '"Cinzel", serif',
      textTransform: 'uppercase',
    },
    paragraph: {
      marginBottom: '1rem',
      fontSize: '1rem',
      lineHeight: '1.7',
    },
    list: {
      marginBottom: '1rem',
      paddingLeft: '1.5rem',
    },
    listItem: {
      marginBottom: '0.5rem',
      fontSize: '1rem',
      lineHeight: '1.7',
    },
    contactInfo: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '1.5rem',
      borderRadius: '8px',
      marginTop: '2rem',
    },
    footer: {
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '2rem',
      textAlign: 'center',
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
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
    address: {
      fontSize: '0.9rem',
      fontFamily: '"Cinzel", serif',
      opacity: 0.8,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      textAlign: 'center',
    },
    copyright: {
      fontSize: '0.9rem',
      fontFamily: '"Cinzel", serif',
      opacity: 0.8,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      textAlign: 'right',
    },
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.companyName}>LAUTERBACH FINANCIAL GROUP</div>
        <Link to='/' style={styles.backLink}>
          ← Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <h1 style={styles.title}>Privacy Policy</h1>

        <div style={styles.section}>
          <p style={styles.paragraph}>
            Lauterbach Financial Group, LLC ("we," "our," or "us") values your
            trust and is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website. Please read this policy
            carefully to understand our practices regarding your personal
            information.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>1. Information We Collect</h2>
          <p style={styles.paragraph}>
            We may collect the following types of information:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Personal Information:</strong> Name, email address, phone
              number, and any details you provide through contact forms or
              account setup.
            </li>
            <li style={styles.listItem}>
              <strong>Financial Information:</strong> If applicable, limited
              information necessary to provide financial services, such as
              account details or transaction history (handled securely).
            </li>
            <li style={styles.listItem}>
              <strong>Technical Information:</strong> IP address, browser type,
              device information, and usage data collected through cookies or
              analytics tools.
            </li>
            <li style={styles.listItem}>
              <strong>Other Information:</strong> Any data you voluntarily
              provide (e.g., surveys, inquiries, job applications).
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>2. How We Use Your Information</h2>
          <p style={styles.paragraph}>
            We may use the information we collect to:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Provide financial services and manage client relationships.
            </li>
            <li style={styles.listItem}>
              Respond to inquiries and provide customer support.
            </li>
            <li style={styles.listItem}>
              Improve our website, services, and communications.
            </li>
            <li style={styles.listItem}>
              Send important updates, newsletters, or promotional materials (if
              you opt in).
            </li>
            <li style={styles.listItem}>
              Meet regulatory, legal, and compliance requirements.
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            3. Information Sharing & Disclosure
          </h2>
          <p style={styles.paragraph}>
            We do not sell your personal information. We may share information
            only in the following situations:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Service Providers:</strong> With trusted partners who
              assist us in delivering services (e.g., IT support, analytics,
              compliance tools).
            </li>
            <li style={styles.listItem}>
              <strong>Legal Requirements:</strong> If required by law,
              regulation, or legal process.
            </li>
            <li style={styles.listItem}>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or reorganization.
            </li>
          </ul>
          <p style={styles.paragraph}>
            All third parties are required to maintain confidentiality and
            protect your information.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>4. Data Security</h2>
          <p style={styles.paragraph}>
            We implement administrative, technical, and physical safeguards to
            protect your information from unauthorized access, use, or
            disclosure. However, no method of transmission over the Internet or
            method of electronic storage is 100% secure.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>5. Your Privacy Choices</h2>
          <p style={styles.paragraph}>You may:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Opt out of receiving marketing communications by following the
              unsubscribe instructions in emails.
            </li>
            <li style={styles.listItem}>
              Request access, updates, or deletion of your personal information
              by contacting us at info@lfg.cpa.
            </li>
            <li style={styles.listItem}>
              Adjust your browser settings to refuse cookies or limit data
              collection.
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>6. Cookies & Tracking</h2>
          <p style={styles.paragraph}>
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience, analyze traffic, and understand
            user behavior. You can disable cookies in your browser settings,
            though some site features may not function properly.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>7. Children's Privacy</h2>
          <p style={styles.paragraph}>
            Our services are not directed to children under 13. We do not
            knowingly collect personal information from children.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>8. Changes to This Privacy Policy</h2>
          <p style={styles.paragraph}>
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page with a new effective date.
          </p>
        </div>

        <div style={styles.contactInfo}>
          <h2 style={styles.sectionTitle}>9. Contact Us</h2>
          <p style={styles.paragraph}>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <p style={styles.paragraph}>
            <strong>Lauterbach Financial Group, LLC</strong>
            <br />
            Email: info@lfg.cpa
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLinks}>
            <Link to='/privacy-policy' style={styles.footerLink}>
              PRIVACY POLICY
            </Link>
          </div>
          <div style={styles.address}>
            1214 W. 6TH STE. 216, AUSTIN, TX 78703
          </div>
          <div style={styles.copyright}>
            © 2025 LAUTERBACH FINANCIAL GROUP, LLC
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPolicy
