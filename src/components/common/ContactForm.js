
import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = ({ 
  title = "Get in Touch", 
  subtitle = "We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
  showTitle = true
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    try {
      // Replace with your EmailJS service ID, template ID, and user ID
      // For demonstration purposes, we're simulating a successful submission
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formData,
      //   'YOUR_USER_ID'
      // );
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,     
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,    
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID   
      );
  
      
      // Simulate API call
      //await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prevState => ({
          ...prevState,
          submitted: false
        }));
      }, 5000);
      
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'There was an error sending your message. Please try again.'
      });
    }
  };
  
  return (
    <div className="contact-form-container">
      {showTitle && (
        <div className="text-center mb-4">
          <h3 className="contact-form-title">{title}</h3>
          <p className="contact-form-subtitle">{subtitle}</p>
        </div>
      )}
      
      {formStatus.submitted && (
        <Alert variant="success" className="mb-4">
          Thank you for your message! We'll get back to you soon.
        </Alert>
      )}
      
      {formStatus.error && (
        <Alert variant="danger" className="mb-4">
          {formStatus.error}
        </Alert>
      )}
      
      <Form onSubmit={handleSubmit}>
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
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of your message"
            required
          />
        </Form.Group>
        
        <Form.Group className="mb-4">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={5}
            required
          />
        </Form.Group>
        
        <Button 
          variant="primary" 
          type="submit" 
          className="contact-submit-btn"
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
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
