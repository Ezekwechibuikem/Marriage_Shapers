import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone, faClock, } from '@fortawesome/free-solid-svg-icons';

import Hero from '../../common/Hero';
import SectionTitle from '../../common/SectionTitle';
import ContactForm from '../../common/ContactForm';

import './Contact.css';
import heroImage from '../../../assets/images/contact/bgContactUs.avif';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions or to book a session."
        image={heroImage}
        height="50vh"
      />
      
      {/* Contact Info Section */}
      <section className="section contact-info-section">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="contact-card h-100">
                <Card.Body className="text-center">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <Card.Title className="contact-title">Connect With Us</Card.Title>
                  <Card.Text className="contact-text">
                    We are available online,<br />
                    to serve clients everywhere
                  </Card.Text>
                  {/* <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link"
                  >
                    Get Directions
                  </a> */}
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6} className="mb-4">
              <Card className="contact-card h-100">
                <Card.Body className="text-center">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <Card.Title className="contact-title">Email Us</Card.Title>
                  <Card.Text className="contact-text">
                    marriageshapers@gmail.com<br />
                    marriageshapers@gmail.com
                  </Card.Text>
                  <a 
                    // href="mailto:bonaventex001@gmail.com" 
                    href="mailto:marriageshapers@gmail.com?subject=Inquiry%20About%20Marriage%20Shapers&body=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20programs." 
                    className="contact-link"
                  >
                    Send Email
                  </a>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4} md={6} className="mb-4">
              <Card className="contact-card h-100">
                <Card.Body className="text-center">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <Card.Title className="contact-title">Call Us</Card.Title>
                  <Card.Text className="contact-text">
                    +234 816 519 9373                   {/* +234 816 519 9373 */}
                  </Card.Text>
                  <a 
                    href="tel:+234 816 519 9373" 
                    className="contact-link"
                  >
                    Call Now
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Contact Form Section */}
      <section className="section contact-form-section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <SectionTitle
                title="Get in Touch"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />
              
              <div className="contact-form-wrapper">
                <ContactForm showTitle={false} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Office Hours Section */}
      <section className="section office-hours-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="office-hours-content">
                <div className="hours-icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <h2>Office Hours</h2>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Monday - Friday:</span>
                    <span className="time">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday:</span>
                    <span className="time">Closed</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday:</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
                <p className="hours-note">
                  Evening appointments available upon request.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Map Section */}
      {/* <section className="section map-section">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0674431817924!2d-122.41941708468204!3d37.77492997975918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5158e35!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1626887555948!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Marriage Shapers Location"
          ></iframe>
        </div>
      </section> */}
      
      {/* Social Media Section */}
      <section className="section social-media-section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="social-media-content">
                <h2>Connect With Us</h2>
                <p>Follow us on social media to stay updated with our latest events, articles, and resources.</p>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
