import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  //faHeart, 
  //faHandHoldingHeart, 
  //faUsers, 
  faBook, 
  faCalendarAlt 
} from '@fortawesome/free-solid-svg-icons';

import Hero from '../../common/Hero';
import SectionTitle from '../../common/SectionTitle';
//import ServiceCard from '../../common/ServiceCard';
import Testimonial from '../../common/Testimonial';
import BlogCard from '../../common/BlogCard';
import EventCard from '../../common/EventCard';

import './Home.css';
import aboutImage from '../../../assets/images/MarriageShapers.jpg';
import blogImage2 from '../../../assets/images/blogs/blogimage2.jpg';

// Placeholder images (in a real project, these would be imported from assets)
const heroImage = 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80';
const testimonialImage1 = 'https://randomuser.me/api/portraits/women/44.jpg';
const testimonialImage2 = 'https://randomuser.me/api/portraits/men/32.jpg';
const blogImage1 = 'https://images.unsplash.com/photo-1511405889574-b01de1da5441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const eventImage = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80';

const Home = () => {
  // Services data
  // const services = [
  //   {
  //     title: 'Premarital Counseling',
  //     description: 'Prepare for a strong marriage foundation with our Christ-centered premarital counseling sessions.',
  //     icon: faHeart,
  //     link: '/services#premarital'
  //   },
  //   {
  //     title: 'Marriage Counseling',
  //     description: 'Strengthen your marriage with biblical principles and practical relationship tools.',
  //     icon: faHandHoldingHeart,
  //     link: '/services#marriage'
  //   },
  //   {
  //     title: 'Relationship Workshops',
  //     description: 'Interactive workshops designed to build healthy relationship skills for singles and couples.',
  //     icon: faUsers,
  //     link: '/services#workshops'
  //   }
  // ];
  
  // Testimonials data
  const testimonials = [
    {
      quote: "Marriage Shapers transformed our relationship. The premarital counseling helped us build a strong foundation based on biblical principles.",
      name: "Sarah & Michael Johnson",
      role: "Married 2 years",
      image: testimonialImage1,
      rating: 5
    },
    {
      quote: "The marriage workshop was exactly what we needed to reconnect and strengthen our communication. Highly recommend!",
      name: "David Wilson",
      role: "Married 7 years",
      image: testimonialImage2,
      rating: 5
    }
  ];
  
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 Biblical Principles for a Healthy Marriage",
      excerpt: "Discover how applying these 5 biblical principles can transform your marriage and bring you closer to God's design for relationships.",
      image: blogImage1,
      date: "July 15, 2025",
      author: "Pastor James",
      category: "Marriage",
      readTime: 5
    },
    {
      id: 2,
      title: "Communication Skills for Christian Couples",
      excerpt: "Learn effective communication techniques that align with Christian values to resolve conflicts and deepen your connection.",
      image: blogImage2,
      date: "July 10, 2025",
      author: "Dr. Rebecca Smith",
      category: "Communication",
      readTime: 7
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Building Christ-Centered Relationships"
        subtitle="Strengthening marriages and relationships through proven principles and real-life strategies."
        buttonText="Book a Session"
        buttonLink="/contact"
        image={heroImage}
      />
      
      {/* About Section */}
      <section className="section about-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src={aboutImage} 
                alt="About Marriage Shapers" 
                className="about-image img-fluid rounded"
              />
            </Col>
            <Col lg={6}>
              <div className="about-content">
                <h6 className="text-primary fw-bold">ABOUT US</h6>
                <h2 className="about-title">Guiding Relationships with Faith and Purpose</h2>
                <p className="about-text">
                  Marriage Shapers is dedicated to helping singles and couples build strong, 
                  Christ-centered relationships. We believe that healthy marriages reflect 
                  God's love and are the foundation of strong families and communities.
                </p>
                <p className="about-text">
                  Our team of experienced counselors provide guidance and practical tools to navigate the joys and challenges of relationships.
                </p>
                <div className="about-features">
                  <div className="feature">
                    <div className="feature-icon">
                      <FontAwesomeIcon icon={faBook} />
                    </div>
                    <div className="feature-text">
                      <h5>Lasting Relationships</h5>
                      <p>We focus on building healthy foundations for strong, lasting, and fulfilling relationships.</p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                    <div className="feature-text">
                      <h5>Flexible Programs</h5>
                      <p>In-person and virtual options to accommodate your schedule and needs.</p>
                    </div>
                  </div>
                </div>
                <Button as={Link} to="/about" variant="primary" className="mt-4">
                  Learn More About Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Services Section */}
      {/* <section className="section services-section bg-light">
        <Container>
          <SectionTitle
            title="Our Services"
            subtitle="We offer a variety of programs designed to strengthen relationships at every stage."
          />
          
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-4">
            <Button as={Link} to="/services" variant="outline-primary" size="lg">
              View All Services
            </Button>
          </div>
        </Container>
      </section>
       */}
      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <h2 className="cta-title">Ready to Strengthen Your Relationship?</h2>
              <p className="cta-text">
                Take the first step toward a healthier, more fulfilling relationship based on biblical principles.
              </p>
              <div className="cta-buttons">
                <Button as={Link} to="/contact" variant="outline-light" size="lg" className="me-3 mb-3">
                  Book a Session
                </Button>
                <Button as={Link} to="/services" variant="outline-light" size="lg" className="mb-3">
                  Explore Our Services
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <Container>
          <SectionTitle
            title="Success Stories"
            subtitle="Hear from couples and individuals who have been impacted by our programs."
          />
          
          <Row className="align-items-stretch">
            {testimonials.map((testimonial, index) => (
              <Col lg={6} className="mb-4" key={index}>
                <Testimonial
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  image={testimonial.image}
                  // rating={testimonial.rating}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Blog Section */}
      <section className="section blog-section bg-light">
        <Container>
          <SectionTitle
            title="Latest Articles"
            subtitle="Insights and advice to help you build a stronger relationship."
          />
          
          <Row>
            {blogPosts.map((post) => (
              <Col lg={6} className="mb-4" key={post.id}>
                <BlogCard
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  date={post.date}
                  author={post.author}
                  category={post.category}
                  readTime={post.readTime}
                />
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-4">
            <Button as={Link} to="/blog" variant="outline-primary" size="lg">
              Read More Articles
            </Button>
          </div>
        </Container>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="section events-section">
        <Container>
          <SectionTitle
            title="Upcoming Events"
            subtitle="Join us for workshops, retreats, and other events designed to strengthen your relationship."
          />
          
          <Row>
            <Col lg={12} className="mb-4">
              <EventCard
                title="Marriage Enrichment Weekend Retreat"
                description="A two-day retreat focused on deepening your connection and strengthening your marriage through biblical principles and practical exercises."
                date="August 15-16, 2025"
                time="9:00 AM - 5:00 PM"
                location="Grace Christian Center"
                image={eventImage}
                registrationLink="/events#retreat"
                isFeatured={true}
              />
            </Col>
          </Row>
          
          <div className="text-center mt-4">
            <Button as={Link} to="/events" variant="outline-primary" size="lg">
              View All Events
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
