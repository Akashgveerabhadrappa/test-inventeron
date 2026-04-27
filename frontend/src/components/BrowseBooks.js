/* frontend/src/components/BrowseBooks.js */
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

export default function BrowseBooks({ token }) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState({ city: '', state: '' });
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  const currentUserId = token ? jwtDecode(token).userId : null;

  const fetchBooks = useCallback((city = '', state = '') => {
    const params = new URLSearchParams();
    if (city) params.set('city', city);
    if (state) params.set('state', state);

    fetch(`http://localhost:5000/api/books?${params.toString()}`)
      .then(res => res.json()).then(setBooks).catch(err => console.error(err));
  }, []);

  const fetchWishlist = useCallback(async () => {
    if (!token) {
      setWishlist([]);
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/user/wishlist`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Failed to fetch wishlist');
      const data = await res.json();
      setWishlist(data.map(book => book._id));
    } catch (err) { console.error(err); }
  }, [token]);

  useEffect(() => {
    fetchBooks();
    fetchWishlist();
  }, [fetchBooks, fetchWishlist]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchBooks(search.city, search.state);
  };

  const handleRequest = async (bookId) => {
    if (!token) { navigate('/login'); return; }
    try {
      const res = await fetch('http://localhost:5000/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ bookId }),
      });
      if (res.ok) toast.success('Request sent!');
    } catch (err) { toast.error('Request failed'); }
  };

  const handleAddToWishlist = async (bookId) => {
    if (!token) { navigate('/login'); return; }

    try {
      const res = await fetch(`http://localhost:5000/api/user/wishlist/${bookId}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to add to wishlist');

      setWishlist(prevWishlist => [...prevWishlist, bookId]);
      toast.success('Book added to wishlist!');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="py-4">
      <div className="text-center mb-5 pb-3">
        <h1 className="display-4 fw-extrabold mb-3">Discover Your Next Read</h1>
        <p className="text-muted fs-5">Join the community of readers exchanging thousands of books daily.</p>
        
        <form onSubmit={handleSearchSubmit} className="mt-4 d-flex gap-2 justify-content-center flex-wrap">
          <input 
            type="text" 
            placeholder="City..." 
            className="form-control w-auto" 
            onChange={e => setSearch({...search, city: e.target.value})} 
          />
          <input 
            type="text" 
            placeholder="State..." 
            className="form-control w-auto" 
            onChange={e => setSearch({...search, state: e.target.value})} 
          />
          <button className="btn btn-primary px-4">Search</button>
        </form>
      </div>

      <div className="row g-4 row-cols-1 row-cols-md-3 row-cols-lg-4">
        {books.map(book => {
          const isOwner = currentUserId === book.userId?._id;
          const isInWishlist = wishlist.includes(book._id);

          return (
            <div key={book._id} className="col">
              <div className="card-ui h-100">
                <div className="image-overlay-container">
                  <img src={book.imageUrl || 'https://via.placeholder.com/300x400'} className="w-100 h-100 object-fit-cover" alt={book.title} />
                  <div className="image-overlay-content">
                    <span className="badge bg-white text-dark mb-2">Condition: {book.condition}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="mb-0 fw-bold">{book.title}</h5>
                    <span className={`badge ${book.type === 'sell' ? 'bg-success' : 'bg-primary'}`}>
                      {book.type === 'sell' ? `$${book.price}` : 'Lend'}
                    </span>
                  </div>
                  <p className="text-muted small mb-3">by {book.author}</p>
                  <div className="small mb-4">
                    <div className="text-secondary"><i className="bi bi-person me-2"></i>{book.userId?.username}</div>
                    <div className="text-secondary"><i className="bi bi-geo-alt me-2"></i>{book.city}, {book.state}</div>
                  </div>
                  <div className="d-grid gap-2">
                    <button 
                      onClick={() => handleRequest(book._id)} 
                      className={`btn ${isOwner ? 'btn-outline-secondary' : 'btn-primary'}`}
                      disabled={isOwner}
                    >
                      {isOwner ? 'Your Listing' : 'Request Book'}
                    </button>
                    {!isOwner && token && (
                      <button 
                        className="btn btn-outline-warning btn-sm"
                        onClick={() => handleAddToWishlist(book._id)}
                        disabled={isInWishlist}
                      >
                        {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
