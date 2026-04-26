import React from 'react';
import { Link } from 'react-router-dom';
import StatsBar from './StatsBar'; // Reusing your existing StatsBar

const Dashboard = ({ token }) => {
  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="display-5 fw-bold">Welcome Back!</h2>
          <p className="text-muted">Manage your books and track your exchange requests here.</p>
        </div>
      </div>

      {/* Statistics Section */}
      <StatsBar token={token} />

      <div className="row mt-5 g-4">
        {/* Quick Action: Add Book */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <i className="bi bi-plus-circle-fill text-primary" style={{ fontSize: '2rem' }}></i>
              </div>
              <h4>List a Book</h4>
              <p className="text-muted">Have something new to share with the community?</p>
              <Link to="/add-book" className="btn btn-primary w-100">Add New Listing</Link>
            </div>
          </div>
        </div>

        {/* Quick Action: Requests */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <i className="bi bi-arrow-left-right text-success" style={{ fontSize: '2rem' }}></i>
              </div>
              <h4>Requests</h4>
              <p className="text-muted">Check if someone wants your books or track yours.</p>
              <Link to="/requests" className="btn btn-success w-100">View Requests</Link>
            </div>
          </div>
        </div>

        {/* Quick Action: Browse */}
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <i className="bi bi-search text-warning" style={{ fontSize: '2rem' }}></i>
              </div>
              <h4>Find Books</h4>
              <p className="text-muted">Discover what other community members are offering.</p>
              <Link to="/browse" className="btn btn-warning w-100 text-white">Browse All</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;