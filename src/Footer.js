import React from 'react';

const Footer = () => {
  return (
    <footer
      className="container-fluid text-center"
      style={{
        backgroundColor: '#6c3333',
        color: 'white',
        padding: '10px', // Adjusted padding for a smaller footer
        position: 'relative', // Ensure it stays at the bottom of content
        bottom: 0, // Ensures footer stays at the bottom of the page
        width: '100%', // Ensure footer spans the entire width of the page
        textAlign: 'center',
      }}
    >
      <p>For inquiries, contact us at xxxxx</p>
    </footer>
  );
};

export default Footer;
