
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faHandHoldingHeart, 
  faUsers, 
  faBook, 
  faCalendarAlt,
  faRing,
  faHandsHelping,
  faChalkboardTeacher
} from '@fortawesome/free-solid-svg-icons';

import Hero from '../../common/Hero';
import SectionTitle from '../../common/SectionTitle';
import BookingForm from '../../common/BookingForm';
import Testimonial from '../../common/Testimonial';

import './Services.css';

// Placeholder images (in a real project, these would be imported from assets)
const heroImage = 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const premaritalImage = 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const marriageImage = 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80';
const workshopImage = 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const retreatImage = 'https://images.unsplash.com/photo-1469571486292-b53601010376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const testimonialImage = 'https://randomuser.me/api/portraits/men/42.jpg';

const Services = () => {
  // Services data
  const services = [
    {
      id: 'premarital',
      title: 'Premarital Counseling',
      description: 'Our premarital counseling program helps couples build a strong foundation for their marriage based on biblical principles. Through a series of sessions, couples will explore important topics such as communication, conflict resolution, financial management, intimacy, and spiritual growth.',
      image: premaritalImage,
      icon: faRing,
      features: [
        'Six 90-minute sessions',
        'Personalized assessment and guidance',
        'Biblical foundation for marriage',
        'Practical communication tools',
        'Conflict resolution strategies'
      ],
      price: '₦450 per couple'
    },
    {
      id: 'marriage',
      title: 'Marriage Counseling',
      description: 'Our marriage counseling services help couples strengthen their relationship, overcome challenges, and rediscover the joy in their marriage. Using biblical principles and evidence-based approaches, we address issues such as communication breakdowns, conflict, trust issues, and emotional disconnection.',
      image: marriageImage,
      icon: faHandHoldingHeart,
      features: [
        'Weekly or bi-weekly sessions',
        'Tailored to your specific needs',
        'Crisis intervention when needed',
        'Rebuilding trust and intimacy',
        'Spiritual guidance and prayer support'
      ],
      price: '₦120 per session'
    },
    {
      id: 'workshops',
      title: 'Relationship Workshops',
      description: 'Our interactive workshops provide couples and singles with practical tools and biblical insights for building healthy relationships. These group sessions create a supportive community environment where participants can learn from each other while gaining valuable relationship skills.',
      image: workshopImage,
      icon: faChalkboardTeacher,
      features: [
        'Monthly workshops on various topics',
        'Interactive exercises and discussions',
        'Take-home resources and materials',
        'Community support and networking',
        'Biblical teaching and application'
      ],
      price: '₦75 per workshop'
    },
    {
      id: 'retreats',
      title: 'Couples Retreats',
      description: 'Our weekend retreats offer couples a chance to step away from daily life to focus on strengthening their relationship. In a peaceful setting, couples engage in guided activities, meaningful conversations, and spiritual reflection to deepen their connection.',
      image: retreatImage,
      icon: faCalendarAlt,
      features: [
        'Weekend-long immersive experience',
        'Beautiful, peaceful locations',
        'Guided exercises and activities',
        'Spiritual renewal and connection',
        'Meals and accommodations included'
      ],
      price: '₦650 per couple'
    }
  ];
  
  // Additional services
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
  ];
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Building stronger relationships through biblical principles and practical guidance."
        image={heroImage}
        height="60vh"
      />
      
      {/* Services Overview */}
      <section className="section services-overview">
        <Container>
          <SectionTitle
            title="How We Can Help"
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
                    />
                    <div className="service-icon">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                  </div>
                </Col>
                <Col lg={6} className={index % 2 !== 0 ? 'order-lg-1' : ''}>
                  <div className="service-content">
                    <h2 className="service-title">{service.title}</h2>
                    <p className="service-description">{service.description}</p>
                    <div className="service-features">
                      <h5>What's Included:</h5>
                      <ul>
                        {service.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="service-price">
                      <span className="price">{service.price}</span>
                    </div>
                    <Button as={Link} to="/contact" variant="primary" className="mt-3">
                      Book This Service
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
                <Card className="additional-service-card h-100">
                  <Card.Body className="text-center">
                    <div className="additional-service-icon">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                    <Card.Title className="additional-service-title">{service.title}</Card.Title>
                    <Card.Text className="additional-service-description">{service.description}</Card.Text>
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
    </>
  );
};

export default Services;
