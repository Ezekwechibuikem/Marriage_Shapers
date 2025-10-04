import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faHandHoldingHeart, 
  faUsers, 
  faBook, 
  faCalendarAlt,
  // faRing,
  faHandsHelping,
  // faChalkboardTeacher,
  faClipboardCheck,
  faLifeRing,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';

import Hero from '../../common/Hero';
import SectionTitle from '../../common/SectionTitle';
import BookingForm from '../../common/BookingForm';
import Testimonial from '../../common/Testimonial';

import './Services.css';

const heroImage = 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const mapImage = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80';
const emergencyImage = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80';
const executiveImage = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80';
const testimonialImage = 'https://randomuser.me/api/portraits/men/42.jpg';
const oneONoneExecutiveResetImage = 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80';
const couplesresetImage = 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80';
const couplesretreatImage = 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80';
const forgivenesslabImage = 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  const handleShow = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };
  
  const handleClose = () => {
    setShowModal(false);
  };

  const services = [
    {
      id: 'map',
      title: 'Marriage Accountability Plan (M.A.P)',
      description: 'For busy professionals who want to be available for their family but struggle due to tight schedules. We serve as your accountability partner.',
      fullDescription: `This plan is for busy professionals who want to be available for their family, including spouse and children but struggles with it due to a tight schedule. In this plan, we serve as your accountability partner, we hold you responsible for your actions and ensure you do the needful.`,
      image: mapImage,
      icon: faClipboardCheck,
      features: [
        {
          title: 'The Gold Plan',
          details: 'Marriage Shapers will serve as your reminder. You provide your itinerary and we agree on the best time to reach out to your family. Within 8-10 hours at work, you must reach out via call or text 2-3 times with receipt proof.',
          warning: 'Failure to comply: $30 fine. Three violations in a month leads to subscription termination.'
        },
        {
          title: 'The Diamond Plan',
          details: 'We carry out actions on your behalf. This includes planning surprises for special occasions, sending flowers, making calls/texts to reassure your loved ones they\'re on your mind.',
          note: 'A consent form will be signed for privacy, protection and confidentiality. We are your representative in your marriage (bedroom duty excluded 😉).'
        }
      ],
      keyDifference: 'Gold Plan: You carry out actions, we hold you accountable. Diamond Plan: We carry out actions on your behalf.'
    },
    {
      id: 'emergency-reset',
      title: 'The Emergency Reset',
      description: 'For couples on the edge of divorce who want to take one last chance to fix their marriage immediately without going through the divorce process.',
      fullDescription: `This service is like a pain reliever that would cure your marriage challenges almost immediately. However, you and your spouse must be willing and desirous to fix your marriage before you can sign up for this.`,
      image: emergencyImage,
      icon: faLifeRing,
      features: [
        'Immediate solution required and provided',
        'Intensive 1-2 week rigorous sessions with consultant',
        'Both partners must be willing to fix the marriage',
        'Prevents divorce through rapid intervention',
        'Focused crisis resolution approach'
      ],
      note: 'It is called EMERGENCY RESET because it requires immediate solution and immediate solution will be provided within the space of a week or two rigorous session with the consultant.'
    },
    {
      id: 'executive-reset',
      title: 'The Executive Reset',
      description: 'Be more responsible and available; thrive in the workplace and at home. A one-day workshop for CEOs, senior managers, and decision makers.',
      fullDescription: `This is a one day workshop for CEOs, senior managers, high-level leaders and anyone who performs the role of a decision maker, who is willing to become the change they want to see in their marriage.`,
      image: executiveImage,
      icon: faBriefcase,
      features: [
        'One-day intensive workshop',
        'Designed for CEOs and senior managers',
        'Skills for maintaining peace at home',
        'Learn to balance work life and family demands',
        'Grow in love while thriving professionally'
      ],
      objective: 'This workshop will equip you with the skills required to have and maintain peace in your homes and also grow in love. It\'ll help busy professionals understand the secret to balancing work life and family demands.'
    },
    {
      id: 'one-on-one-executive-reset',
      title: 'The One-On-One Executive Reset',
      description: 'A one-week personal training for individuals who want to find themselves again in marriage and become a better version of themselves.',
      fullDescription: `This is a one week personal training for individuals who would like to find themselves again in marriage. Do you feel lost in your marriage or would you want to become a better version of yourself in marriage? Then this plan is for you. This plan is also for you who wants to work towards a new life, whose partner has been complaining of some irrational behaviors and you feel there's a need to put aside old habits and develop a new one.`,
      image: oneONoneExecutiveResetImage,
      icon: faBriefcase, // You can change this icon
      features: [
        'One week intensive personal training',
        'One-on-one sessions with consultant',
        'Express yourself in a safe environment',
        'Identify personal challenges in marriage',
        'Work towards holistic living',
        'Develop new positive habits',
        'Overcome irrational behaviors'
      ],
      objective: 'In this plan, you will have a personal session with the consultant, where you\'d be able to express yourself, identify the challenges and work towards a holistic living.'
    },
    {
      id: 'couples-reset',
      title: 'The Couple\'s Reset',
      description: 'A one-on-one session for couples who are willing to make their marriage work again and prevent constant disagreements.',
      fullDescription: `This is a one-on-one session for couples who are willing to make their marriage work again. If you and your spouse are constantly in disagreement, this plan is for you. Are you tired of staying unhappy in marriage and want a quick fix in order to prevent divorce and be able to enjoy your marriage again? You should opt for this service.`,
      image: couplesresetImage,
      icon: faHandHoldingHeart,
      features: [
        'One-on-one session with both partners',
        'Resolve constant disagreements',
        'Quick fix to prevent divorce',
        'Restore happiness in marriage',
        'Learn effective communication',
        'Rebuild trust and understanding'
      ],
      note: 'This service is specifically designed for couples tired of staying unhappy in marriage and seeking a quick fix to enjoy their marriage again.'
    },
    {
      id: 'couples-retreat',
      title: 'The Couple\'s Retreat',
      description: 'A weekend away from home to reignite the spiritual and physical spark in your marriage through spiritual exercises and reconnection with God.',
      fullDescription: `Would you want to reignite the spiritual and physical spark in your marriage? Then this is for you. This is for couples who feel they've lost the spiritual connections that is required in their marriage. It is a weekend away from home. During this period, couples would engage in spiritual exercises as a way of connecting/reconnecting to God, handing their marriages over and back to God and building bonds that would help them maintain love and keep the fire on the altar of their marriages burning.`,
      image: couplesretreatImage,
      icon: faCalendarAlt,
      features: [
        'Weekend getaway from home',
        'Spiritual exercises and activities',
        'Connect/reconnect to God together',
        'Hand your marriage over to God',
        'Build stronger spiritual bonds',
        'Reignite physical and spiritual spark',
        'Keep the fire burning in your marriage'
      ],
      objective: 'This retreat helps couples who feel they\'ve lost the spiritual connection required in their marriage to reconnect with God and each other.'
    },
    {
      id: 'forgiveness-lab',
      title: 'The Forgiveness Lab',
      description: 'A three-day intensive session to help you release bitterness, grudges, and resentment towards your spouse.',
      fullDescription: `The Forgiveness Lab is for you who feels bitter towards your spouse, hold a grudge or have a feeling of resentment towards your spouse. In as much as you have tried to let go, it keeps coming back and you don't know how to, then you should admit yourself to this lab right away.`,
      image: forgivenesslabImage,
      icon: faHeart,
      features: [
        'Three days intensive session',
        'Release bitterness and grudges',
        'Overcome resentment towards spouse',
        'Personal consultation with expert',
        'Customized prescription for healing',
        'Learn to truly forgive and let go',
        'Overcome negative feelings permanently'
      ],
      note: 'In this lab, you\'ll be taking through a three days session with the consultant, where you can release all of the negativity you feel and a prescription will be given that would help you overcome all resentment and setbacks.',
      keyDifference: 'This is not just counseling - it\'s a transformative lab experience designed to help you overcome forgiveness barriers that keep resurfacing.'
    }
   
    
  ];
  
  // ========================================
  // ADDITIONAL SERVICES
  // ========================================
  // 📌 TO ADD MORE ADDITIONAL SERVICES:
  // Copy one object and modify title, description, and icon
  // ========================================
  
  const additionalServices = [
    {
      title: 'Singles Ministry',
      description: 'Preparing singles for godly relationships and marriage through biblical teaching and community.',
      icon: faUsers
    },
    {
      title: 'Family Counseling',
      description: 'Helping families navigate challenges and build stronger relationships based on biblical principles.',
      icon: faHandsHelping
    },
    {
      title: 'Marriage Mentoring',
      description: 'Connecting younger couples with experienced mentor couples for guidance and support.',
      icon: faHeart
    },
    {
      title: 'Bible Studies',
      description: 'Focused studies on marriage, relationships, and family life from a biblical perspective.',
      icon: faBook
    }
    
    // ========================================
    // 📌 ADD MORE ADDITIONAL SERVICES HERE
    // ========================================
    /*
    {
      title: 'Service Name',
      description: 'Service description',
      icon: faIconName
    }
    */
  ];
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Marriage Shapers International Limited Services"
        subtitle="Guiding couples and individuals to build stronger, healthier relationships."
        image={heroImage}
        height="60vh"
      />
      
      {/* Services Overview */}
      <section className="section services-overview">
        <Container>
          <SectionTitle
            title="For Married & Engaged Couples"
            subtitle="We offer a variety of services designed to strengthen relationships at every stage."
          />
          
          {services.map((service, index) => (
            <div 
              className={`service-item ${index % 2 !== 0 ? 'service-item-alt' : ''}`} 
              key={service.id}
              id={service.id}
            >
              <Row className="align-items-center">
                <Col lg={6} className={`mb-4 mb-lg-0 ${index % 2 !== 0 ? 'order-lg-2' : ''}`}>
                  <div className="service-image-container">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="service-image img-fluid rounded"
                      style={{
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}  
                    />
                    <div className="service-icon" style={{ backgroundColor: '#FF6600' }}>
                      <FontAwesomeIcon icon={service.icon} style={{ color: '#FFFFFF' }} />
                    </div>
                  </div>
                </Col>
                <Col lg={6} className={index % 2 !== 0 ? 'order-lg-1' : ''}>
                  <div className="service-content">
                    <h2 className="service-title" style={{ color: '#000000' }}>{service.title}</h2>
                    <p className="service-description" style={{ color: '#000000' }}>{service.description}</p>
                    
                    {/* Read More Button - Opens Modal */}
                    <Button 
                      variant="primary" 
                      className="mt-3"
                      onClick={() => handleShow(service)}
                      style={{
                        backgroundColor: '#FF6600',
                        borderColor: '#FF6600',
                        color: '#FFFFFF'
                      }}
                    >
                      Read More
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      </section>
      
      {/* Additional Services */}
      <section className="section additional-services bg-light">
        <Container>
          <SectionTitle
            title="Additional Services"
            subtitle="More ways we support individuals, couples, and families."
          />
          
          <Row>
            {additionalServices.map((service, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="additional-service-card h-100" style={{ borderTop: '3px solid #FF6600' }}>
                  <Card.Body className="text-center">
                    <div className="additional-service-icon" style={{ color: '#FF6600' }}>
                      <FontAwesomeIcon icon={service.icon} size="3x" />
                    </div>
                    <Card.Title className="additional-service-title mt-3" style={{ color: '#000000' }}>
                      {service.title}
                    </Card.Title>
                    <Card.Text className="additional-service-description" style={{ color: '#000000' }}>
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Testimonial */}
      <section className="section testimonial-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Testimonial
                quote="The premarital counseling we received from Marriage Shapers was invaluable. It helped us address important topics before marriage and gave us practical tools that we still use today."
                name="Robert & Lisa Thompson"
                role="Married 3 years"
                image={testimonialImage}
                rating={5}
              />
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Booking Section */}
      <section className="section booking-section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="booking-container">
                <SectionTitle
                  title="Book a Service"
                  subtitle="Take the first step toward a stronger relationship by booking one of our services."
                />
                <BookingForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========================================
          MODAL COMPONENT
          ========================================
          This modal displays detailed information
          about the selected service when "Read More"
          button is clicked
      ========================================== */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton style={{ borderBottom: '2px solid #FF6600' }}>
          <Modal.Title style={{ color: '#000000' }}>
            {selectedService?.title}
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body style={{ maxHeight: '500px', overflowY: 'auto' }}>
          {/* Full Description */}
          <p style={{ color: '#000000', fontSize: '1.1rem', marginBottom: '20px' }}>
            {selectedService?.fullDescription}
          </p>
          
          {/* Features Section */}
          <h5 style={{ color: '#FF6600', marginTop: '20px' }}>What's Included:</h5>
          <ul style={{ color: '#000000' }}>
            {selectedService?.features.map((feature, i) => (
              <li key={i} style={{ marginBottom: '10px' }}>
                {/* Handle both string and object features */}
                {typeof feature === 'string' ? (
                  feature
                ) : (
                  <>
                    <strong>{feature.title}:</strong> {feature.details}
                    {/* Display warning if exists */}
                    {feature.warning && (
                      <div style={{ color: '#d9534f', fontSize: '0.9rem', marginTop: '5px' }}>
                        ⚠️ Warning: {feature.warning}
                      </div>
                    )}
                    {/* Display note if exists */}
                    {feature.note && (
                      <div style={{ color: '#5bc0de', fontSize: '0.9rem', marginTop: '5px' }}>
                        📝 Note: {feature.note}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
          
          {/* Key Difference Section */}
          {selectedService?.keyDifference && (
            <div style={{ 
              backgroundColor: '#fff3e0', 
              padding: '15px', 
              borderRadius: '5px',
              borderLeft: '4px solid #FF6600',
              marginTop: '20px'
            }}>
              <strong style={{ color: '#FF6600' }}>Key Difference:</strong>
              <p style={{ color: '#000000', marginBottom: 0, marginTop: '5px' }}>
                {selectedService.keyDifference}
              </p>
            </div>
          )}
          
          {/* Note Section */}
          {selectedService?.note && (
            <div style={{ 
              backgroundColor: '#e3f2fd', 
              padding: '15px', 
              borderRadius: '5px',
              marginTop: '20px'
            }}>
              <p style={{ color: '#000000', marginBottom: 0 }}>
                {selectedService.note}
              </p>
            </div>
          )}
          
          {/* Objective Section */}
          {selectedService?.objective && (
            <div style={{ 
              backgroundColor: '#f1f8e9', 
              padding: '15px', 
              borderRadius: '5px',
              marginTop: '20px'
            }}>
              <strong style={{ color: '#689f38' }}>Objective:</strong>
              <p style={{ color: '#000000', marginBottom: 0, marginTop: '5px' }}>
                {selectedService.objective}
              </p>
            </div>
          )}
          
          {/* Price Section (if available) */}
          {selectedService?.price && (
            <div style={{ marginTop: '20px' }}>
              <span style={{ fontSize: '1.5rem', color: '#FF6600', fontWeight: 'bold' }}>
                {selectedService.price}
              </span>
            </div>
          )}
        </Modal.Body>
        
        <Modal.Footer style={{ borderTop: '2px solid #FF6600' }}>
          {/* Close Button */}
          <Button 
            variant="secondary" 
            onClick={handleClose}
            style={{
              backgroundColor: '#000000',
              borderColor: '#000000',
              color: '#FFFFFF'
            }}
          >
            Close
          </Button>
          
          {/* Book This Service Button - Links to Contact Page */}
          <Button 
            variant="primary" 
            as={Link} 
            to="/contact" 
            onClick={handleClose}
            style={{
              backgroundColor: '#FF6600',
              borderColor: '#FF6600',
              color: '#FFFFFF'
            }}
          >
            Book This Service
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Services;