import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StatsBar = ({ token }) => {
    const [stats, setStats] = useState({
        books: 0,
        users: 0,
        exchanges: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            if (!token) return;
            
            try {
                // This calls the new route you added to userRoutes.js
                const res = await axios.get('http://localhost:5000/api/user/stats', {
                    headers: { 
        'Authorization': `Bearer ${token}` 
    }
                });
                
            setStats({
                books: res.data.booksCount,        // Correctly maps to "My Books Listed"
                users: res.data.usersCount,     // Maps requests to "Active Members" (or update labels)
                exchanges: res.data.exchangedCount // Correctly maps to "Exchanges Completed"
            });
            } catch (err) {
                console.error("Error fetching real-time stats:", err);
            }
        };

        if (token) {
            fetchStats();
        }
    }, [token]);

    return (
        <section className="stats-bar py-4 bg-light rounded shadow-sm">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4 stat-item">
                        <h2 className="fw-bold text-primary">{stats.books}</h2>
                        <p className="text-muted mb-0">My Books Listed</p>
                    </div>
                    <div className="col-md-4 stat-item">
                        <h2 className="fw-bold text-success">{stats.users}</h2>
                        <p className="text-muted mb-0">Active Members</p>
                    </div>
                    <div className="col-md-4 stat-item">
                        <h2 className="fw-bold text-warning">{stats.exchanges}</h2>
                        <p className="text-muted mb-0">Exchanges Completed</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsBar;