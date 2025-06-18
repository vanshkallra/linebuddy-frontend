import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [buddies, setBuddies] = useState([]);
  const [activeTab, setActiveTab] = useState('bookings');
  const [loading, setLoading] = useState(true);
  const { user, token } = useAuth(); // Get token from context
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/');
      return;
    }

    fetchData();
  }, [user, navigate]);

  const fetchData = async () => {
    try {
      // Create axios config with auth header
      const config = {
        headers: {
          'Authorization': `Bearer ${token}` // Include auth token
        }
      };

      console.log('Fetching data with token:', token); // Debug log

      const [bookingsRes, buddiesRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/bookings` || 'http://localhost:3001/api/bookings', config),
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/buddies` ||'http://localhost:3001/api/buddies', config)
      ]);
      
      console.log('Bookings response:', bookingsRes.data);
      console.log('Buddies response:', buddiesRes.data);
      
      setBookings(bookingsRes.data);
      setBuddies(buddiesRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      console.error('Error response:', error.response?.data);
    }
    setLoading(false);
  };

  if (!user || user.role !== 'admin') {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <div className="card">
          <h2>Access Denied</h2>
          <p>You need admin privileges to access this page.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <div className="card">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <div className="card">
        <h2 style={{ color: '#10b981', marginBottom: '2rem' }}>Admin Dashboard</h2>
        
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem',
          borderBottom: '2px solid #e5e7eb',
          paddingBottom: '1rem'
        }}>
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`btn ${activeTab === 'bookings' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Bookings ({bookings.length})
          </button>
          <button 
            onClick={() => setActiveTab('buddies')}
            className={`btn ${activeTab === 'buddies' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Buddy Applications ({buddies.length})
          </button>
        </div>

        {activeTab === 'bookings' && (
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Customer Bookings</h3>
            {bookings.length === 0 ? (
              <p>No bookings yet.</p>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Location</th>
                      <th>Duration</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking._id}>
                        <td>{booking.name}</td>
                        <td>{booking.phone}</td>
                        <td>{booking.location}</td>
                        <td>{booking.duration} mins</td>
                        <td>₹{booking.price}</td>
                        <td>
                          <span style={{
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            background: booking.status === 'pending' ? '#fef3c7' : 
                                       booking.status === 'confirmed' ? '#d1fae5' : '#fee2e2',
                            color: booking.status === 'pending' ? '#92400e' : 
                                   booking.status === 'confirmed' ? '#065f46' : '#dc2626'
                          }}>
                            {booking.status}
                          </span>
                        </td>
                        <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'buddies' && (
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Buddy Applications</h3>
            {buddies.length === 0 ? (
              <p>No buddy applications yet.</p>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Location</th>
                      <th>UPI ID</th>
                      <th>Status</th>
                      <th>Applied Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buddies.map((buddy) => (
                      <tr key={buddy._id}>
                        <td>{buddy.name}</td>
                        <td>{buddy.phone}</td>
                        <td>{buddy.location}</td>
                        <td>{buddy.upiId}</td>
                        <td>
                          <span style={{
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            background: buddy.status === 'pending' ? '#fef3c7' : 
                                       buddy.status === 'approved' ? '#d1fae5' : '#fee2e2',
                            color: buddy.status === 'pending' ? '#92400e' : 
                                   buddy.status === 'approved' ? '#065f46' : '#dc2626'
                          }}>
                            {buddy.status}
                          </span>
                        </td>
                        <td>{new Date(buddy.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;