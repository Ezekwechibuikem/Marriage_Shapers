
import React, { useState } from 'react';
import { Form, Button, Alert, Spinner, Row, Col } from 'react-bootstrap';
import './BookingForm.css';

const BookingForm = ({ 
  title = "Book a Session", 
  subtitle = "Fill out the form below to book your session with us.",
  services = [
    "Premarital Counseling",
    "Marriage Counseling",
    "Relationship Workshop",
    "Singles Event",
    "Couples Retreat"
  ],
  showTitle = true
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    date: '',
    time: '',
    message: '',
    preferredMode: 'in-person'
  });
  
  const [formStatus, setFormStatus] = useState({
    step: 1,
    submitting: false,
    submitted: false,
    error: null,
    paymentInitiated: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleNextStep = () => {
    setFormStatus(prevState => ({
      ...prevState,
      step: prevState.step + 1
    }));
  };
  
  const handlePrevStep = () => {
    setFormStatus(prevState => ({
      ...prevState,
      step: prevState.step - 1
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(prevState => ({
      ...prevState,
      submitting: true,
      error: null
    }));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus(prevState => ({
        ...prevState,
        submitting: false,
        submitted: true,
        paymentInitiated: true
      }));
      
      // Simulate payment gateway redirect
      setTimeout(() => {
        alert("In a real application, you would be redirected to a payment gateway (Paystack/Flutterwave) to complete your booking.");
      }, 1000);
      
    } catch (error) {
      setFormStatus(prevState => ({
        ...prevState,
        submitting: false,
        error: 'There was an error processing your booking. Please try again.'
      }));
    }
  };
  
  const renderStepOne = () => {
    return (
      <>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            required
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Your city and country"
            required
          />
        </Form.Group>
        
        <div className="d-grid">
          <Button 
            variant="primary" 
            onClick={handleNextStep}
            className="booking-next-btn"
          >
            Next Step
          </Button>
        </div>
      </>
    );
  };
  
  const renderStepTwo = () => {
    return (
      <>
        <Form.Group className="mb-3">
          <Form.Label>Service Type</Form.Label>
          <Form.Select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Preferred Mode</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              label="In-person"
              name="preferredMode"
              value="in-person"
              checked={formData.preferredMode === 'in-person'}
              onChange={handleChange}
              id="in-person-mode"
            />
            <Form.Check
              inline
              type="radio"
              label="Virtual (Zoom/Google Meet)"
              name="preferredMode"
              value="virtual"
              checked={formData.preferredMode === 'virtual'}
              onChange={handleChange}
              id="virtual-mode"
            />
          </div>
        </Form.Group>
        
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Preferred Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Preferred Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        
        <Form.Group className="mb-4">
          <Form.Label>Additional Information</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any specific requirements or questions"
            rows={3}
          />
        </Form.Group>
        
        <div className="d-flex justify-content-between">
          <Button 
            variant="outline-secondary" 
            onClick={handlePrevStep}
          >
            Back
          </Button>
          <Button 
            variant="primary" 
            type="submit"
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Processing...
              </>
            ) : (
              'Book Session'
            )}
          </Button>
        </div>
      </>
    );
  };
  
  const renderConfirmation = () => {
    return (
      <div className="text-center booking-confirmation">
        <div className="booking-success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
        </div>
        <h3 className="mb-3">Booking Initiated!</h3>
        <p className="mb-4">
          Your booking request has been received. Please complete the payment process to confirm your session.
        </p>
        <div className="payment-buttons">
          <Button variant="success" className="mb-2 w-100">
            Proceed to Payment
          </Button>
          <small className="d-block text-muted mb-3">
            You will be redirected to our secure payment gateway
          </small>
        </div>
      </div>
    );
  };
  
  return (
    <div className="booking-form-container">
      {showTitle && !formStatus.submitted && (
        <div className="text-center mb-4">
          <h3 className="booking-form-title">{title}</h3>
          <p className="booking-form-subtitle">{subtitle}</p>
        </div>
      )}
      
      {formStatus.error && (
        <Alert variant="danger" className="mb-4">
          {formStatus.error}
        </Alert>
      )}
      
      {!formStatus.submitted ? (
        <Form onSubmit={handleSubmit}>
          {formStatus.step === 1 && renderStepOne()}
          {formStatus.step === 2 && renderStepTwo()}
        </Form>
      ) : (
        renderConfirmation()
      )}
      
      <div className="booking-steps">
        <div className={`booking-step ${formStatus.step >= 1 ? 'active' : ''} ${formStatus.step > 1 ? 'completed' : ''}`}>
          <div className="step-number">1</div>
          <div className="step-label">Personal Info</div>
        </div>
        <div className={`booking-step ${formStatus.step >= 2 ? 'active' : ''} ${formStatus.submitted ? 'completed' : ''}`}>
          <div className="step-number">2</div>
          <div className="step-label">Session Details</div>
        </div>
        <div className={`booking-step ${formStatus.submitted ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <div className="step-label">Payment</div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
