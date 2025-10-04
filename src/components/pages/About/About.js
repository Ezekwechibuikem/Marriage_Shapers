import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  //faHeart, 
  //faHandsHelping, 
  faUsers,
  faBalanceScale,
  faLightbulb,
  //faPeopleArrows,
  faUserTie,
  faHandHoldingHeart
} from '@fortawesome/free-solid-svg-icons';
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons';
import founderImage from '../../../assets/images/CEO.jpg';
const heroImage = 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';

const About = () => {
  // Core values derived from the write-up
  const values = [
    {
      title: 'Faith-Based Leadership',
      description: 'Guiding individuals and organizations with biblical principles, spiritual insight, and purposeful direction.',
      icon: faPrayingHands
    },
    {
      title: 'Empowerment & Transformation',
      description: 'Equipping leaders, couples, and women to thrive through mentorship, training, and personal development.',
      icon: faLightbulb
    },
    {
      title: 'Conflict Resolution & Peacebuilding',
      description: 'Fostering unity and understanding through mediation, conflict analysis, and practical solutions.',
      icon: faBalanceScale
    },
    {
      title: 'Holistic Relationship Support',
      description: 'Blending biblical values with practical wisdom to help couples and singles build strong, lasting relationships.',
      icon: faHandHoldingHeart
    },
    {
      title: 'Community & Connection',
      description: 'Creating meaningful spaces for growth, prayer, and fellowship that strengthen marriages and empower women.',
      icon: faUsers
    },
    {
      title: 'Purpose-Driven Living',
      description: 'Helping individuals discover and walk in their God-given purpose while maintaining balance in all areas of life.',
      icon: faUserTie
    }
  ];

  // Impact highlights
  const highlights = [
    {
      number: '20+',
      label: 'Leaders Trained',
      description: 'Through Leadership Development Masterclass'
    },
    {
      number: '50+',
      label: 'Couples Served',
      description: 'Marriage consulting and matchmaking'
    },
    {
      number: '70+',
      label: 'Women Empowered',
      description: 'Through Happy Life Women Ministry'
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        <Container>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            About Marriage Shapers
          </h1>
          <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto' }}>
            Building strong, purpose-driven relationships through faith, wisdom, and practical guidance.
          </p>
        </Container>
      </section>
      
      {/* About the Founder Section */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div style={{ position: 'relative' }}>
                <img 
                  src={founderImage}
                  alt="Ibukunoluwa Lordreign-Mohammed - Founder & CEO" 
                  className="founder-image img-fluid rounded"
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    objectPosition: 'top center'
                    
                  }}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <h6 style={{ color: '#FF6600', fontWeight: 'bold', marginBottom: '10px' }}>
                  MEET THE FOUNDER
                </h6>
                <h2 style={{ color: '#000000', fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
                  Ibukunoluwa Lordreign-Mohammed
                </h2>
                <h5 style={{ color: '#FF6600', marginBottom: '20px' }}>
                  Founder & CEO, Marriage Shapers International Ltd
                </h5>
                <p style={{ color: '#000000', lineHeight: '1.8', marginBottom: '15px' }}>
                  Ibukunoluwa Lordreign-Mohammed is a visionary faith-based leader, mentor, and advocate for godly marriages, positive change, and personal transformation. Her influence extends into leadership development, conflict resolution, and global change initiatives.
                </p>
                <p style={{ color: '#000000', lineHeight: '1.8', marginBottom: '15px' }}>
                  As a peacebuilding consultant and advocate, her work spans conflict resolution and mediation, conflict analysis, and leadership training for organizations and government institutions. She is the host of the <strong>Leadership Development Masterclass</strong>, a four-week intensive training program where leaders are equipped to lead with empathy and love—making decisions that prioritize the well-being of people.
                </p>
                <p style={{ color: '#000000', lineHeight: '1.8', marginBottom: '15px' }}>
                  Through this initiative, she has trained and mentored over sixty leaders, leaving a lasting impact on their leadership journeys.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h6 style={{ color: '#FF6600', fontWeight: 'bold', marginBottom: '10px' }}>
                OUR MISSION
              </h6>
              <h2 style={{ color: '#000000', fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
                Marriage Shapers International
              </h2>
              <p style={{ color: '#000000', lineHeight: '1.8', marginBottom: '15px' }}>
                Marriage Shapers International Ltd is a faith-based marriage advisory and matchmaking organization dedicated to helping A-level executives find balance, reignite love, and prevent divorce.
              </p>
              <p style={{ color: '#000000', lineHeight: '1.8', marginBottom: '15px' }}>
                With a passion for guiding people into purpose-filled relationships, we lead a mission to help Christian singles and married couples thrive at work, at home, and in their spiritual walk.
              </p>
              <p style={{ color: '#000000', lineHeight: '1.8', marginBottom: '15px' }}>
                Our work spans matchmaking, marriage consulting, and relationship education, with an intentional focus on supporting busy professionals in building strong, godly homes.
              </p>
              <p style={{ color: '#000000', lineHeight: '1.8', marginBottom: '0', fontWeight: 'bold' }}>
                Our unique approach blends biblical values with practical wisdom and a deep understanding of the realities of modern relationships.
              </p>
            </Col>
            <Col lg={6}>
              <div style={{ 
                backgroundColor: '#FF6600', 
                padding: '40px', 
                borderRadius: '8px',
                color: '#FFFFFF'
              }}>
                <h3 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Beyond Marriage</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
                  Ibukunoluwa is also the leader of <strong>Happy Life Women Ministry</strong>, a vibrant and prayerful community for married women. Through this platform, she provides women with a space to grow spiritually, connect meaningfully with others, strengthen their marriages, and remain joyful.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '0' }}>
                  From weekly prayer meetings to life-transforming gatherings such as the Happy Life Women Hangout and Convention, she continues to inspire women to live boldly in faith and purpose.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Impact Highlights */}
      <section style={{ padding: '60px 0', backgroundColor: '#000000', color: '#FFFFFF' }}>
        <Container>
          <Row>
            {highlights.map((highlight, index) => (
              <Col lg={4} md={4} className="mb-4 mb-lg-0 text-center" key={index}>
                <h2 style={{ 
                  fontSize: '4rem', 
                  color: '#FF6600', 
                  fontWeight: 'bold',
                  marginBottom: '10px'
                }}>
                  {highlight.number}
                </h2>
                <h4 style={{ color: '#FFFFFF', marginBottom: '10px' }}>
                  {highlight.label}
                </h4>
                <p style={{ color: '#FFFFFF', opacity: 0.8 }}>
                  {highlight.description}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* Core Values Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h6 style={{ color: '#FF6600', fontWeight: 'bold', marginBottom: '10px' }}>
              WHAT DRIVES US
            </h6>
            <h2 style={{ color: '#000000', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
              Our Core Values
            </h2>
            <p style={{ color: '#000000', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              The principles that guide everything we do at Marriage Shapers International.
            </p>
          </div>
          
          <Row>
            {values.map((value, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card style={{ 
                  height: '100%',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 102, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
                }}>
                  <Card.Body className="text-center" style={{ padding: '30px' }}>
                    <div style={{ 
                      color: '#FF6600',
                      marginBottom: '20px'
                    }}>
                      <FontAwesomeIcon icon={value.icon} size="3x" />
                    </div>
                    <h4 style={{ 
                      color: '#000000', 
                      marginBottom: '15px',
                      fontSize: '1.3rem',
                      fontWeight: 'bold'
                    }}>
                      {value.title}
                    </h4>
                    <p style={{ 
                      color: '#000000', 
                      lineHeight: '1.7',
                      marginBottom: 0 
                    }}>
                      {value.description}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Leadership & Impact Section */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h6 style={{ color: '#FF6600', fontWeight: 'bold', marginBottom: '10px' }}>
              LEADERSHIP & IMPACT
            </h6>
            <h2 style={{ color: '#000000', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
              A Legacy of Transformation
            </h2>
          </div>
          <Row>
            <Col lg={12}>
              <p style={{ color: '#000000', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px', textAlign: 'center', maxWidth: '900px', margin: '0 auto 30px' }}>
                Known for her warmth, strength, and spiritual insight, Ibukunoluwa is passionate about restoring homes, empowering women, fostering unity, and shaping lives that reflect God's design for humanity.
              </p>
              <div style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '40px', 
                borderRadius: '8px',
                borderLeft: '5px solid #FF6600'
              }}>
                <h5 style={{ color: '#000000', marginBottom: '20px', fontWeight: 'bold' }}>
                  Her Vision
                </h5>
                <p style={{ color: '#000000', lineHeight: '1.8', marginBottom: '0' }}>
                  Through her multifaceted work in leadership development, conflict resolution, marriage consulting, and women's ministry, Ibukunoluwa continues to touch lives across the globe. Her dedication to helping people find balance, purpose, and joy in their relationships and careers has made her a trusted voice in faith-based leadership and family empowerment.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
    </>
  );
};

export default About;