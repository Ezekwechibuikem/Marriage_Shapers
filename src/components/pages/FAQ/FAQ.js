
import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Hero from '../../common/Hero';
import SectionTitle from '../../common/SectionTitle';
import FaqItem from '../../common/FaqItem';
import ContactForm from '../../common/ContactForm';

import './FAQ.css';

// Placeholder image (in a real project, this would be imported from assets)
import heroImage from '../../../assets/images/faq/faqimage.avif';

const FAQ = () => {
  // FAQ categories
  const categories = [
    'All',
    'Services',
    'Counseling',
    'Events',
    'Booking',
    'Payment'
  ];
  
  // FAQ data
  const allFaqs = [
    {
      id: 1,
      question: 'What is Marriage Shapers?',
      answer: 'Marriage Shapers is a Christian organization dedicated to helping singles and couples build strong, Christ-centered relationships. We offer counseling, workshops, retreats, and other resources to equip individuals and couples with biblical principles and practical tools for healthy relationships.',
      category: 'Services'
    },
    {
      id: 2,
      question: 'Do I need to be a Christian to use your services?',
      answer: 'While our approach is based on biblical principles, we welcome individuals and couples of all faiths or no faith background. We believe that the principles we teach can benefit any relationship, though we do openly share our Christian perspective.',
      category: 'Services'
    },
    {
      id: 3,
      question: 'How long is a typical counseling session?',
      answer: 'Our standard counseling sessions are 50 minutes long. For initial sessions or intensive counseling, we may schedule 90-minute sessions. The length of your session will be confirmed when you book your appointment.',
      category: 'Counseling'
    },
    {
      id: 4,
      question: 'How many counseling sessions will we need?',
      answer: 'The number of sessions varies depending on your specific situation and goals. For premarital counseling, we typically recommend a minimum of six sessions. For marriage counseling, it depends on the issues being addressed. After your initial session, your counselor will discuss a recommended plan with you.',
      category: 'Counseling'
    },
    {
      id: 5,
      question: 'Do you offer virtual counseling or only in-person?',
      answer: 'We offer both in-person and virtual counseling options. Virtual sessions are conducted via secure video conferencing platforms, making our services accessible regardless of your location.',
      category: 'Counseling'
    },
    {
      id: 6,
      question: 'How do I register for an event or workshop?',
      answer: "You can register for events and workshops through our website by visiting the Events page and clicking on the specific event you're interested in. You'll be directed to a registration form. You can also call our office to register by phone.",
      category: 'Events'
    },
    {
      id: 7,
      question: 'Are your events only for couples or can singles attend too?',
      answer: 'We offer events for both couples and singles. Some events are specifically designed for married couples, while others are for engaged couples, singles, or mixed audiences. The event description will clearly indicate who the event is designed for.',
      category: 'Events'
    },
    {
      id: 8,
      question: 'How do I book a counseling session?',
      answer: "You can book a counseling session by filling out the contact form on our website, calling our office directly, or emailing us at info@marriageshapers.org. We'll follow up to gather more information and schedule your appointment.",
      category: 'Booking'
    },
    {
      id: 9,
      question: 'What is your cancellation policy?',
      answer: "We require 24 hours' notice for cancellations. Cancellations with less than 24 hours' notice may be subject to a cancellation fee of 50% of the session cost. No-shows are charged the full session fee. We understand that emergencies happen, and these situations are handled on a case-by-case basis.",
      category: 'Booking'
    },
    {
      id: 10,
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards, PayPal, bank transfers, and cash (for in-person sessions only). Payment is due at the time of service for individual sessions. For packages or retreats, payment plans may be available.',
      category: 'Payment'
    },
    {
      id: 11,
      question: 'Do you offer sliding scale fees or financial assistance?',
      answer: 'We have a limited number of sliding scale spots available for those experiencing financial hardship. Please contact our office to discuss your situation and learn about current availability for reduced-fee services.',
      category: 'Payment'
    },
    {
      id: 12,
      question: 'Do you accept insurance?',
      answer: 'We do not directly bill insurance companies. However, we can provide you with a receipt that you may submit to your insurance company for potential reimbursement. We recommend checking with your insurance provider about coverage for counseling services.',
      category: 'Payment'
    }
  ];
  
  // State for filtering and searching
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter FAQs based on category and search term
  const filteredFaqs = allFaqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and programs."
        image={heroImage}
        height="50vh"
      />
      
      {/* FAQ Content */}
      <section className="section faq-content">
        <Container>
          <Row>
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="faq-sidebar">
                {/* Search */}
                <div className="sidebar-widget search-widget">
                  <h4 className="widget-title">Search FAQs</h4>
                  <InputGroup>
                    <Form.Control
                      placeholder="Search questions..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                  </InputGroup>
                </div>
                
                {/* Categories */}
                <div className="sidebar-widget categories-widget">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="categories-list">
                    {categories.map((category, index) => (
                      <li 
                        key={index} 
                        className={activeCategory === category ? 'active' : ''}
                        onClick={() => handleCategoryChange(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Need Help */}
                <div className="sidebar-widget help-widget">
                  <h4 className="widget-title">Need More Help?</h4>
                  <p>Can't find the answer you're looking for? Contact us directly and we'll be happy to assist you.</p>
                  <Button href="/contact" variant="primary" className="w-100">
                    Contact Us
                  </Button>
                </div>
              </div>
            </Col>
            
            <Col lg={8}>
              {/* FAQ Filter Info */}
              <div className="faq-filter-info mb-4">
                <h4>
                  {activeCategory === "All" 
                    ? "All Questions" 
                    : `Questions about "${activeCategory}"`}
                  {searchTerm && ` containing "${searchTerm}"`}
                </h4>
                <p>{filteredFaqs.length} questions found</p>
              </div>
              
              {/* FAQ Items */}
              {filteredFaqs.length > 0 ? (
                <div className="faq-items">
                  {filteredFaqs.map((faq, index) => (
                    <FaqItem
                      key={faq.id}
                      question={faq.question}
                      answer={faq.answer}
                      defaultOpen={index === 0}
                    />
                  ))}
                </div>
              ) : (
                <div className="no-faqs-found text-center py-5">
                  <h3>No Questions Found</h3>
                  <p>Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Ask a Question Section */}
      <section className="section ask-question-section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="ask-question-content">
                <SectionTitle
                  title="Ask a Question"
                  subtitle="Don't see your question listed? Send it to us and we'll get back to you."
                />
                
                <ContactForm 
                  title="Submit Your Question" 
                  subtitle="We'll respond to your question within 1-2 business days."
                  showTitle={false}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FAQ;
