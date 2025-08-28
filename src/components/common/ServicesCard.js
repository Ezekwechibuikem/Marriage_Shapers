
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon, link, buttonText = "Learn More" }) => {
  return (
    <Card className="service-card h-100">
      <Card.Body className="text-center p-4">
        {icon && (
          <div className="service-icon">
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
        <Card.Title className="service-title">{title}</Card.Title>
        <Card.Text className="service-description">{description}</Card.Text>
        {link && (
          <Button 
            as={Link} 
            to={link} 
            variant="outline-primary" 
            className="service-button"
          >
            {buttonText}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
