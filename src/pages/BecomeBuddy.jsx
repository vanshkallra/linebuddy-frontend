import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BecomeBuddy = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    upiId: ''
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/buddies` || 'http://localhost:3001/api/buddies', formData);
      setSuccess('Application submitted successfully! We will review and contact you soon.');
      setFormData({
        name: '',
        phone: '',
        location: '',
        upiId: ''
      });
    } catch (error) {
      setError('Failed to submit application. Please try again.');
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <div className="card">
          <h2>Please register to become a Line Buddy</h2>
          <button onClick={() => navigate('/register')} className="btn btn-primary">
            Register
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <div className="card">
        <h2 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Become a Line Buddy</h2>
        <p style={{ fontStyle: 'italic', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Waqt toh sabke paas hota hai… par Line Buddy usse paisa banata hai! ⏳💸
        </p>

        {success && (
          <div style={{ 
            background: '#d1fae5', 
            color: '#065f46', 
            padding: '1rem', 
            borderRadius: '8px', 
            marginBottom: '1rem' 
          }}>
            {success}
          </div>
        )}

        {error && (
          <div style={{ 
            background: '#fee2e2', 
            color: '#dc2626', 
            padding: '1rem', 
            borderRadius: '8px', 
            marginBottom: '1rem' 
          }}>
            {error}
          </div>
        )}

        <div style={{ 
          background: '#eff6ff', 
          padding: '1.5rem', 
          borderRadius: '10px', 
          marginBottom: '2rem' 
        }}>
          <h3 style={{ color: '#1d4ed8', marginBottom: '1rem' }}>Terms & Conditions for Buddies</h3>
          <ul style={{ lineHeight: '1.8' }}>
            <li>Be ethical and polite at all times</li>
            <li>Follow instructions given by client</li>
            <li>Never engage in illegal or dishonest acts</li>
            <li>Maintain punctuality and discipline</li>
            <li>Carry valid ID during each task</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Location (City/Area where you can provide service)</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g., South Delhi, Saket, Lajpat Nagar"
            />
          </div>

          <div className="form-group">
            <label>UPI ID (to receive payments)</label>
            <input
              type="text"
              name="upiId"
              value={formData.upiId}
              onChange={handleChange}
              required
              placeholder="yourname@paytm or phone@provider"
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-secondary" 
            style={{ width: '100%' }}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Join as Line Buddy'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeBuddy;
