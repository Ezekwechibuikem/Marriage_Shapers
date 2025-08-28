
import React, { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './FaqItem.css';

const FaqItem = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <Card className={`faq-item ${isOpen ? 'active' : ''}`}>
      <Card.Header className="faq-header" onClick={toggleOpen}>
        <h5 className="faq-question">{question}</h5>
        <span className="faq-icon">
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </span>
      </Card.Header>
      <Collapse in={isOpen}>
        <div>
          <Card.Body className="faq-answer">
            {answer}
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

export default FaqItem;
