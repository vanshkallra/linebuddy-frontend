import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookBuddy = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    duration: '15',
    tip: 'none',
    referralCode: ''
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const priceMap = {
    '15': 35,
    '30': 60,
    '45': 85,
    '60': 110,
    '120': 200,
    '180': 280
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const bookingData = {
        ...formData,
        price: priceMap[formData.duration]
      };

      await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/bookings` || 'http://localhost:3001/api/bookings', bookingData);
      setSuccess('Booking request submitted successfully! We will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        location: '',
        duration: '15',
        tip: 'none',
        referralCode: ''
      });
    } catch (error) {
      setError('Failed to submit booking. Please try again.');
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <div className="card">
          <h2>Please login to book a Line Buddy</h2>
          <button onClick={() => navigate('/login')} className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <div className="card">
        <h2 style={{ color: '#10b981', marginBottom: '1rem' }}>Book Your Line Buddy</h2>
        <p style={{ fontStyle: 'italic', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Life chhoti hai, line badi. Line chhodo life pakdo. BOOK YOUR LINE BUDDY NOW 🙂
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
            <label>Where Do You Need a Buddy? (e.g., South Delhi, Saket, Lajpat Nagar)</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>How long do you need the buddy?</label>
            <select name="duration" value={formData.duration} onChange={handleChange}>
              <option value="15">15 minutes - ₹35</option>
              <option value="30">30 minutes - ₹60</option>
              <option value="45">45 minutes - ₹85</option>
              <option value="60">1 hour - ₹110</option>
              <option value="120">2 hours - ₹200</option>
              <option value="180">3 hours - ₹280</option>
            </select>
          </div>

          <div className="form-group">
            <label>Tip Option (Optional)</label>
            <select name="tip" value={formData.tip} onChange={handleChange}>
              <option value="none">No Tip</option>
              <option value="10">₹10 - Chai ho jaaye Buddy!</option>
              <option value="20">₹20 - Aaj bhi line bachayi!</option>
              <option value="50">₹50+ - As per your gratitude</option>
            </select>
          </div>

          <div className="form-group">
            <label>Referral Code (Get 50% off your first booking!)</label>
            <input
              type="text"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
              placeholder="Enter Referral Code"
            />
          </div>

          <div style={{ 
            background: '#f3f4f6', 
            padding: '1rem', 
            borderRadius: '8px', 
            marginBottom: '1rem' 
          }}>
            <h4>Payment Information</h4>
            <p><strong>UPI:</strong> 8949557447@PTSBI</p>
            <p><strong>Total Amount:</strong> ₹{priceMap[formData.duration]}</p>
            <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>
              Please pay the amount and we'll contact you to confirm your booking.
            </p>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%' }}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Request Line Buddy'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookBuddy;