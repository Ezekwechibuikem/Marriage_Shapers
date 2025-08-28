import React, { useState } from 'react';
import { Card, Button, Badge, Modal, Form, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt, faNairaSign } from '@fortawesome/free-solid-svg-icons';
import { PaystackButton } from 'react-paystack';
import './EventCard.css';

const EventCard = ({ 
  title, 
  description,
  date, 
  time, 
  location, 
  image, 
  price = 0, // Event price in kobo (1 NGN = 100 kobo)
  eventId,
  isVirtual = false,
  isFeatured = false,
  isFree = false
}) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: '',
    name: '',
    phone: ''
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // Your Paystack public key (get this from your Paystack dashboard)
  const publicKey = "pk_test_707cb154e62663db1f123b955582eb4ee667e581"; // Replace with your actual public key

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentSuccess = (reference) => {
    console.log('Payment successful!', reference);
    
    // Store registration data in localStorage (since no backend)
    const registrationData = {
      eventId,
      eventTitle: title,
      userDetails,
      paymentReference: reference.reference,
      amount: price,
      registrationDate: new Date().toISOString(),
      eventDate: date,
      eventTime: time,
      eventLocation: location
    };

    // Get existing registrations or create new array
    const existingRegistrations = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
    existingRegistrations.push(registrationData);
    localStorage.setItem('eventRegistrations', JSON.stringify(existingRegistrations));

    setShowPaymentModal(false);
    setShowSuccessAlert(true);
    
    // Hide success alert after 5 seconds
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 5000);
  };

  const handlePaymentClose = () => {
    console.log('Payment closed');
    setShowPaymentModal(false);
  };

  const handleRegisterClick = () => {
    if (isFree || price === 0) {
      // Handle free event registration
      const registrationData = {
        eventId,
        eventTitle: title,
        userDetails: { name: 'Free Registration', email: '', phone: '' },
        paymentReference: 'FREE_' + Date.now(),
        amount: 0,
        registrationDate: new Date().toISOString(),
        eventDate: date,
        eventTime: time,
        eventLocation: location
      };

      const existingRegistrations = JSON.parse(localStorage.getItem('eventRegistrations') || '[]');
      existingRegistrations.push(registrationData);
      localStorage.setItem('eventRegistrations', JSON.stringify(existingRegistrations));
      
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 5000);
    } else {
      // Show payment modal for paid events
      setShowPaymentModal(true);
    }
  };

  const paystackProps = {
    email: userDetails.email,
    amount: price, // Amount in kobo
    publicKey,
    text: `Pay ₦${(price / 100).toLocaleString()} for ${title}`,
    onSuccess: handlePaymentSuccess,
    onClose: handlePaymentClose,
    metadata: {
      name: userDetails.name,
      phone: userDetails.phone,
      eventId,
      eventTitle: title
    }
  };

  return (
    <>
      <Card className={`event-card ${isFeatured ? 'featured-event' : ''}`}>
        <div className="event-image-container">
          <Card.Img variant="top" src={image} className="event-image" />
          {isVirtual && (
            <Badge bg="info" className="event-badge">
              Virtual Event
            </Badge>
          )}
          {isFeatured && (
            <Badge bg="warning" className="event-badge featured-badge">
              Featured Event
            </Badge>
          )}
          {isFree && (
            <Badge bg="success" className="event-badge free-badge">
              Free Event
            </Badge>
          )}
        </div>
        <Card.Body>
          <Card.Title className="event-title">{title}</Card.Title>
          <div className="event-details">
            <div className="event-detail">
              <FontAwesomeIcon icon={faCalendarAlt} className="event-icon" />
              <span>{date}</span>
            </div>
            <div className="event-detail">
              <FontAwesomeIcon icon={faClock} className="event-icon" />
              <span>{time}</span>
            </div>
            <div className="event-detail">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="event-icon" />
              <span>{location}</span>
            </div>
            {!isFree && price > 0 && (
              <div className="event-detail event-price">
                <FontAwesomeIcon icon={faNairaSign} className="event-icon" />
                <span className="price-amount">₦{(price / 100).toLocaleString()}</span>
              </div>
            )}
          </div>
          <Card.Text className="event-description">{description}</Card.Text>
          
          <Button 
            onClick={handleRegisterClick}
            variant="primary" 
            className="event-register-btn"
          >
            {isFree || price === 0 ? 'Register for Free' : `Register Now - ₦${(price / 100).toLocaleString()}`}
          </Button>
        </Card.Body>
      </Card>

      {/* Success Alert */}
      {showSuccessAlert && (
        <Alert 
          variant="success" 
          className="fixed-top mx-3 mt-3"
          dismissible
          onClose={() => setShowSuccessAlert(false)}
        >
          <Alert.Heading>Registration Successful!</Alert.Heading>
          <p>You have successfully registered for <strong>{title}</strong>. 
             {!isFree && ' Your payment has been processed.'}</p>
        </Alert>
      )}

      {/* Payment Modal */}
      <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Complete Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <h5>{title}</h5>
            <p><strong>Amount:</strong> ₦{(price / 100).toLocaleString()}</p>
            <p><strong>Date:</strong> {date} at {time}</p>
            <p><strong>Location:</strong> {location}</p>
          </div>
          
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Email Address *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPaymentModal(false)}>
            Cancel
          </Button>
          <PaystackButton 
            {...paystackProps}
            className="btn btn-primary"
            disabled={!userDetails.name || !userDetails.email || !userDetails.phone}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EventCard;