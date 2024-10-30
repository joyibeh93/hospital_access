import React from 'react'

import '../styles/footer.css'

function Footer() {
  return (
    <>
     <footer className="footer">
      <h2 className="footer-title">Healthcare Access</h2>
      <p className="footer-description">
        Discover personalised healthcare access points nearby.
      </p>
      <div className="footer-icons">
        <a href="#" className="footer-icon">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="footer-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="footer-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="footer-icon">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="footer-location">
        <i className="fas fa-location-dot"></i>
        <p className="location-text">Your address</p>
      </div>
    </footer>
    </>
  )
}

export default Footer
