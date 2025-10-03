import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faHandsHelping, 
  faUsers 
} from '@fortawesome/free-solid-svg-icons';
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons';

import Hero from '../../common/Hero';
import SectionTitle from '../../common/SectionTitle';
import Testimonial from '../../common/Testimonial';

import './About.css';
import founderImage from '../../../assets/images/CEO.jpg';

const heroImage = 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
//const founderImage = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80';
// const teamImage1 = 'https://randomuser.me/api/portraits/men/32.jpg';
// const teamImage2 = 'https://randomuser.me/api/portraits/women/44.jpg';
// const teamImage3 = 'https://randomuser.me/api/portraits/men/52.jpg';
// const teamImage4 = 'https://randomuser.me/api/portraits/women/68.jpg';
const testimonialImage = 'https://randomuser.me/api/portraits/women/33.jpg';

const About = () => {
  // Team members data
  // const teamMembers = [
  //   {
  //     name: 'Pastor David Wilson',
  //     role: 'Founder & Lead Counselor',
  //     image: teamImage1,
  //     bio: 'Pastor David has been counseling couples for over 15 years and has a passion for building Christ-centered marriages.'
  //   },
  //   {
  //     name: 'Dr. Rebecca Smith',
  //     role: 'Marriage Counselor',
  //     image: teamImage2,
  //     bio: 'Dr. Smith holds a Ph.D. in Family Therapy and specializes in helping couples navigate difficult transitions.'
  //   },
  //   {
  //     name: 'Michael Johnson',
  //     role: 'Premarital Counselor',
  //     image: teamImage3,
  //     bio: 'Michael focuses on preparing couples for marriage with a strong biblical foundation and practical tools.'
  //   },
  //   {
  //     name: 'Sarah Thompson',
  //     role: 'Singles Ministry Leader',
  //     image: teamImage4,
  //     bio: 'Sarah leads our singles ministry, helping individuals prepare for godly relationships and marriage.'
  //   }
  // ];
  
  // Values data
  const values = [
    {
      title: 'Biblical Foundation',
      description: 'All our counseling and programs are rooted in scripture and God\'s design for relationships.',
      icon: faPrayingHands
    },
    {
      title: 'Authentic Love',
      description: 'We believe in fostering genuine, selfless love as modeled by Christ.',
      icon: faHeart
    },
    {
      title: 'Practical Guidance',
      description: 'We provide actionable tools and strategies that couples can apply to their daily lives.',
      icon: faHandsHelping
    },
    {
      title: 'Community Support',
      description: 'We create a supportive community where couples can learn from and encourage one another.',
      icon: faUsers
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About Marriage Shapers"
        subtitle="Building strong, Christ-centered relationships since 2010."
        image={heroImage}
        height="60vh"
      />
      
      {/* Our Story Section */}
      <section className="section story-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="founder-image-container">
                <img 
                  src={founderImage} 
                  alt="Founder of Marriage Shapers" 
                  className="founder-image img-fluid rounded"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="story-content">
                <h6 className="text-primary fw-bold">OUR STORY</h6>
                <h2 className="story-title">Building Relationships on Biblical Principles</h2>
                <p className="story-text">
                  Marriage Shapers was founded in 2020 by Mrs Ibukunoluwa Olayiwola with a vision to strengthen 
                  marriages and relationships through biblical principles and practical guidance.
                </p>
                <p className="story-text">
                  After witnessing many couples struggle in their marriages, Mrs Ibukunoluwa Olayiwola felt called to 
                  create a ministry that would equip couples with the tools they need to build strong, 
                  lasting relationships based on God's design.
                </p>
                <p className="story-text">
                  What started as a small group meeting in a church basement has grown into a 
                  comprehensive ministry serving hundreds of couples and singles each year through 
                  counseling, workshops, retreats, and online resources.
                </p>
                <p className="story-text fw-bold">
                  Our mission is simple: to help couples and singles build Christ-centered relationships 
                  that reflect God's love and bring glory to Him.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Our Values Section */}
      <section className="section values-section bg-light">
        <Container>
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Marriage Shapers."
          />
          
          <Row>
            {values.map((value, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="value-card h-100">
                  <Card.Body className="text-center">
                    <div className="value-icon">
                      <FontAwesomeIcon icon={value.icon} />
                    </div>
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-description">{value.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Our Team Section */}
      {/* <section className="section team-section">
        <Container>
          <SectionTitle
            title="Meet Our Team"
            subtitle="Dedicated professionals committed to strengthening relationships through biblical principles."
          />
          
          <Row>
            {teamMembers.map((member, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="team-card h-100">
                  <div className="team-image-container">
                    <Card.Img variant="top" src={member.image} className="team-image" />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="team-name">{member.name}</Card.Title>
                    <Card.Subtitle className="team-role mb-3">{member.role}</Card.Subtitle>
                    <Card.Text className="team-bio">{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}
      
      {/* Testimonial Section */}
      <section className="section testimonial-section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Testimonial
                quote="Marriage Shapers completely transformed our relationship. The biblical principles and practical tools we learned helped us build a stronger foundation and deepen our connection. We're forever grateful for their ministry."
                name="Jennifer & Mark Davis"
                role="Married 5 years"
                image={testimonialImage}
                rating={5}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
