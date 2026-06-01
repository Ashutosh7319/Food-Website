export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/DesignIN.png" alt="Design.in Logo" />
        </div>
        <p>
          Crafted as a demo website by <span>Priyanshu Saha</span> — Founder of{' '}
          <a href="https://designdotin.netlify.app/" target="_blank" rel="noopener noreferrer">
            DESIGN.IN
          </a>
        </p>
      </div>
      
      <style>{`
        .footer {
          padding: 4rem 8%;
          background: var(--bg-soft);
          border-top: var(--border-card);
          text-align: center;
        }
        .footer-logo img {
          width: 80px;
          border-radius: 50%;
          margin-bottom: 1.5rem;
        }
        .footer p {
          color: var(--text-muted);
          font-size: 1.1rem;
        }
        .footer span {
          color: var(--text);
          font-weight: 600;
        }
        .footer a {
          color: var(--accent);
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>
    </footer>
  );
}
