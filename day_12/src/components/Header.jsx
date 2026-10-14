```jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#061B33',
      color: '#FFFFFF',
      padding: '10px 25px'
    }}>

      <h2 style={{ color: '#94e7f5' }}>
        My App
      </h2>

      <div style={{
        display: 'flex',
        gap: '20px'
      }}>
        <Link to="/" style={{
          color: '#FFFFFF',
          textDecoration: 'none'
        }}>Home</Link>

        <Link to="/about" style={{
          color: '#A58BFA',
          textDecoration: 'none'
        }}>About</Link>

        <Link to="/products" style={{
          color: '#FB9A1E',
          textDecoration: 'none'
        }}>Products</Link>

        <Link to="/cart" style={{
          color: '#20B685',
          textDecoration: 'none'
        }}>Cart</Link>

        <Link to="/contact" style={{
          color: '#FF5740',
          textDecoration: 'none'
        }}>Contact</Link>
      </div>

      <button
        onClick={() => navigate('/login')}
        style={{
          backgroundColor: '#E6FB3F',
          color: '#061B33',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Login
      </button>

    </div>
  );
};

export default Header;
```