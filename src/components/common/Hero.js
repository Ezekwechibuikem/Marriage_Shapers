
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  image, 
  overlay = true,
  height = '70vh',
  alignItems = 'center'
}) => {
  return (
    <div 
      className={`hero ${overlay ? 'hero-overlay' : ''}`} 
      style={{ 
        backgroundImage: `url(${image})`,
        height: height
      }}
    >
      <Container className="h-100">
        <Row className="h-100" style={{ alignItems }}>
          <Col lg={8} md={10} className="hero-content">
            {title && <h1 className="hero-title slide-up">{title}</h1>}
            {subtitle && <p className="hero-subtitle fade-in">{subtitle}</p>}
            {buttonText && buttonLink && (
              <Button 
                as="a" 
                href={buttonLink} 
                variant="primary" 
                size="lg" 
                className="hero-button slide-up"
              >
                {buttonText}
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
