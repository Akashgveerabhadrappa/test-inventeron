import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="app-footer mt-auto">
            <div className="container">
                <div className="row g-5">
                    {/* Brand Section with a 'Card' feel */}
                    <div className="col-lg-5">
                        <div className="footer-brand-card p-4 rounded-4 mb-4">
                            <Link className="footer-brand d-flex align-items-center gap-3 mb-3 text-decoration-none" to="/">
                                <div className="brand-icon-box">
                                    <i className="bi bi-book-half"></i>
                                </div>
                                <span className="fs-3 fw-bold">BookExchange</span>
                            </Link>
                            <p className="text-muted mb-4 pe-lg-4">
                                Join a global network of book enthusiasts. We're building a sustainable future for reading through community-driven book sharing and secondary markets.
                            </p>
                            <div className="social-group d-flex gap-2">
                                <button type="button" className="social-btn" aria-label="Facebook"><i className="bi bi-facebook"></i></button>
                                <button type="button" className="social-btn" aria-label="Twitter"><i className="bi bi-twitter-x"></i></button>
                                <button type="button" className="social-btn" aria-label="Instagram"><i className="bi bi-instagram"></i></button>
                                <button type="button" className="social-btn" aria-label="GitHub"><i className="bi bi-github"></i></button>
                            </div>
                        </div>
                    </div>

                    {/* Links and Newsletter Section */}
                    <div className="col-lg-7">
                        <div className="row g-4">
                            <div className="col-6 col-sm-4">
                                <h6 className="footer-heading">Platform</h6>
                                <ul className="footer-link-list">
                                    <li><Link to="/browse">Explore Books</Link></li>
                                    <li><Link to="/add-book">List Your Own</Link></li>
                                    <li><Link to="/requests">Marketplace</Link></li>
                                    <li><Link to="/wishlist">Your Wishlist</Link></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-4">
                                <h6 className="footer-heading">About</h6>
                                <ul className="footer-link-list">
                                    <li><Link to="/about">Our Story</Link></li>
                                    <li><Link to="/about">Security</Link></li>
                                    <li><Link to="/about">Privacy</Link></li>
                                    <li><Link to="/about">Guidelines</Link></li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-4">
                                <h6 className="footer-heading">Newsletter</h6>
                                <p className="text-muted small mb-3">Get curated book lists and community updates.</p>
                                <div className="newsletter-box">
                                    <input type="email" placeholder="Email address" className="newsletter-input" />
                                    <button className="newsletter-btn" type="button">
                                        <i className="bi bi-arrow-right-short fs-4"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Refined Bottom Bar */}
                <div className="footer-bottom-bar mt-5 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <p className="footer-copyright mb-0">
                        &copy; {new Date().getFullYear()} BookExchange. Designed with precision.
                    </p>
                    <div className="system-status d-flex align-items-center gap-2">
                        <span className="status-dot"></span>
                        <span className="status-text">Network Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
