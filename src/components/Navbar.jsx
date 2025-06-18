import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={{
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <Link to="/" style={{
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#10b981',
          textDecoration: 'none'
        }}>
          Line Buddy
        </Link>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
            Home
          </Link>
          
          {user ? (
            <>
              <span style={{ color: '#10b981', fontWeight: '500' }}>
                Hello, {user.name}
              </span>
              {user.role === 'admin' && (
                <Link to="/admin" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '14px' }}>
                  Dashboard
                </Link>
              )}
              <button 
                onClick={handleLogout}
                className="btn btn-primary"
                style={{ padding: '8px 16px', fontSize: '14px' }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '14px' }}>
                Login
              </Link>
              <Link to="/register" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
