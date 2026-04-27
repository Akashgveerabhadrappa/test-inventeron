/* frontend/src/components/Home.js */
import React from 'react';
import { Link } from 'react-router-dom';

import listIcon from '../assets/how-it-works-1.png';
import discoverIcon from '../assets/how-it-works-2.png';
import exchangeIcon from '../assets/how-it-works-3.png';

const Home = () => {
    return (
        <div className="home-page">
            {/* --- HERO SECTION --- */}
            <div className="container col-xxl-8 px-4 py-5 text-center">
                <h1 className="display-4 fw-bold lh-1 mb-3">Welcome to BookExchange</h1>
                <p className="lead mx-auto mb-4 text-muted" style={{ maxWidth: '600px' }}>
                    The best place to find, lend, and sell your favorite books. Discover hidden gems in your community and share your own collection with fellow readers.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
                    <Link to="/browse" className="btn btn-primary btn-lg px-4 gap-3">Browse Books</Link>
                    <Link to="/register" className="btn btn-outline-secondary btn-lg px-4">Join Now</Link>
                </div>
            </div>

            {/* --- "HOW IT WORKS" SECTION --- */}
            <div className="container px-4 py-5" id="how-it-works">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">How It Works</h2>
                    <p className="text-muted">Start your reading journey in three simple steps</p>
                    <div className="mx-auto" style={{ width: '60px', height: '4px', background: 'var(--primary)', borderRadius: '2px' }}></div>
                </div>
                
                <div className="row g-4 justify-content-center">
                    {/* Step 1 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card-ui how-it-works-card h-100 p-4 text-center">
                            <div className="icon-circle mb-4 mx-auto">
                                <img src={listIcon} alt="List your books" />
                            </div>
                            <h3 className="h5 fw-bold mb-3">1. List Your Books</h3>
                            <p className="text-muted mb-0">Easily add books from your collection that you're willing to lend or sell. Just enter the details and upload a photo.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card-ui how-it-works-card h-100 p-4 text-center">
                            <div className="icon-circle mb-4 mx-auto">
                                <img src={discoverIcon} alt="Discover reads" />
                            </div>
                            <h3 className="h5 fw-bold mb-3">2. Discover Reads</h3>
                            <p className="text-muted mb-0">Browse or search for books available in your area. Add interesting finds to your wishlist or request them right away.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card-ui how-it-works-card h-100 p-4 text-center">
                            <div className="icon-circle mb-4 mx-auto">
                                <img src={exchangeIcon} alt="Exchange and rate" />
                            </div>
                            <h3 className="h5 fw-bold mb-3">3. Exchange & Rate</h3>
                            <p className="text-muted mb-0">Connect with other users to arrange the exchange. After you've received your book, rate your experience to build community trust.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;