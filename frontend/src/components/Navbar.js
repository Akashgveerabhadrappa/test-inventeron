import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function Navbar({ token, logout }) {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUsername(decoded.username);
      } catch (error) { 
        logout(); 
      }
    } else {
      setUsername(null);
    }
  }, [token, logout]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm">
      <div className="container">
        {/* Brand with modern icon and typography */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div className="bg-primary rounded-3 p-1 d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-book-half" viewBox="0 0 16 16">
              <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388 1.175.885.652 1.098 1.79 1.002 3.102-.098 1.313-.59 2.582-1.175 3.388-.585.806-1.212 1.24-1.936 1.488A6.954 6.954 0 0 1 11.5 14H8.5V2.687zM8.5 1.5C7.382.155 5.468-.582 3.896.155 1.794.996.5 3.29.5 6c0 2.685 1.294 4.953 3.396 5.845.3.118.63.2.98.223.334.024.66.01.953-.034a7.065 7.065 0 0 0 1.666-.334c.33-.09.65-.213.955-.371.325-.166.623-.38.896-.646.273-.266.52-.578.717-.92.196-.342.34-.744.408-1.213.068-.469.043-.993-.06-1.554a3.27 3.27 0 0 1-.41-.92c-.15-.365-.355-.715-.605-1.037a4.91 4.91 0 0 0-.852-.95c-.34-.28-.75-.52-1.229-.684-.48-.164-1.02-.27-1.582-.275a5.26 5.26 0 0 0-1.666.248zM8.5 14V1H11.5a5.95 5.95 0 0 1 2.914.823c.97.555 1.621 1.545 1.68 2.823.058 1.278-.474 2.37-1.39 3.185-.918.814-2.22 1.2-3.488.994A5.95 5.95 0 0 1 8.5 14z"/>
            </svg>
          </div>
          <span className="fw-bold tracking-tight text-dark">BookExchange</span>
        </Link>

        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link px-3 text-secondary-emphasis fw-medium" to="/browse">Browse Books</Link>
            </li>
            {token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link px-3 text-secondary-emphasis fw-medium" to="/add-book">Add Book</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3 text-secondary-emphasis fw-medium" to="/requests">My Requests</Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link px-3 text-secondary-emphasis fw-medium" to="/about">About</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            {token && username ? (
              <div className="dropdown">
                <button 
                  className="btn btn-light d-flex align-items-center gap-2 rounded-pill px-3 py-2 border shadow-sm transition-all" 
                  type="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  <div className="bg-primary-subtle rounded-circle p-1 d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill text-primary" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                  </div>
                  <span className="small fw-semibold text-dark">{username}</span>
                </button>
                
                <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg mt-3 p-2 rounded-4">
                  <li><h6 className="dropdown-header text-uppercase fs-xs tracking-wider text-muted py-2">Account Settings</h6></li>
                  <li>
                    <Link to="/profile" className="dropdown-item d-flex align-items-center gap-2 py-2 rounded-3">
                      <i className="bi bi-person me-2"></i> My Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-books" className="dropdown-item d-flex align-items-center gap-2 py-2 rounded-3">
                      <i className="bi bi-journal-text me-2"></i> My Books
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="dropdown-item d-flex align-items-center gap-2 py-2 rounded-3">
                      <i className="bi bi-heart me-2"></i> Wishlist
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider mx-2" /></li>
                  <li>
                    <button className="dropdown-item d-flex align-items-center gap-2 py-2 rounded-3 text-danger" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right me-2"></i> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="d-flex gap-2">
                <Link to="/login" className="btn btn-light border-0 fw-semibold px-4">Login</Link>
                <Link to="/register" className="btn btn-primary fw-semibold px-4 shadow-sm">Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}