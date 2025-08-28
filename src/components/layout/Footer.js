
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faYoutube, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <Container>
        <Row className="py-5">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading">Marriage Shapers</h5>
            <p className="footer-text">
              Building strong relationships through Christ-centered principles.
              We help singles and couples develop healthy, lasting relationships.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading">Services</h5>
            <ul className="footer-links">
              <li><Link to="/services">Premarital Counseling</Link></li>
              <li><Link to="/services">Marriage Counseling</Link></li>
              <li><Link to="/services">Relationship Workshops</Link></li>
              <li><Link to="/services">Singles Events</Link></li>
              <li><Link to="/services">Couples Retreats</Link></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6}>
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="footer-contact">
              <li>Chevron drive, eti Osa local government</li>
              <li>Email: marriageshapers@gmail.com</li>
              <li>Phone: +234 812 215 0640</li>
              <li>Hours: Mon-Fri 9am - 5pm</li>
            </ul>
          </Col>
        </Row>
        
        <Row className="copyright-row">
          <Col className="text-center py-3">
            <p className="mb-0">
              &copy; {currentYear} Marriage Shapers. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
