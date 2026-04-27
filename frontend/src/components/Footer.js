/* frontend/src/components/Footer.js */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="footer-brand-card p-4 rounded-3">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="brand-icon-box">B</div>
                <span className="footer-brand mb-0">BookExchange</span>
              </div>
              <p className="small">Connecting readers across the community through easy book lending and exchange. Join our growing network of book lovers.</p>
            </div>
          </div>
          
          <div className="col-md-4 col-lg-2 offset-lg-2">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-link-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/browse">Browse Books</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3">
            <h6 className="footer-heading">Join Our Journey</h6>
            <p className="small mb-3">Stay updated with the latest additions to our library.</p>
            <div className="newsletter-box">
              <input type="email" className="newsletter-input" placeholder="Your email..." />
              <button className="newsletter-btn">
                <i className="bi bi-arrow-right">→</i>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar mt-5 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="footer-copyright mb-0">© 2026 BookExchange. Built for readers.</p>
          <div className="system-status d-flex align-items-center gap-2 mt-3 mt-md-0">
            <div className="status-dot"></div>
            <span className="status-text">Network Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;