
import React, { useState } from 'react';

const Footer = () => {
  const [active, setActive] = useState('Home');

  const links = ['Home', 'Product', 'About', 'Cart'];

  return (
    <nav style={{
      display: 'flex',
      gap: '25px',
      backgroundColor: 'black',
      color: 'white',
      fontSize: '25px',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: '20px',
      flexWrap: 'wrap'
    }}>
      <div style={{ fontWeight: 'bold' }}>
        My App
      </div>

      <div style={{
        display: 'flex',
        gap: '25px',
        flexWrap: 'wrap'
      }}>
        {links.map((link) => (
          <div
            key={link}
            onClick={() => setActive(link)}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'orange';
              e.currentTarget.style.cursor = 'pointer';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                active === link ? 'orange' : 'white';
            }}
            style={{
              color: active === link ? 'orange' : 'white',
              transition: 'color 0.3s'
            }}
          >
            {link}
          </div>
        ))}
      </div>

      <div style={{ fontSize: '16px' }}>
        Selected: {active}
      </div>
    </nav>
  );
};

export default Footer;
