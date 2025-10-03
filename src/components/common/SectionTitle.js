import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle, subsection, center = true, light = false }) => {
  return (
    <Row className="mb-5">
      <Col>
        <div className={`section-title ${center ? 'text-center' : ''}`}>
          <h2 className={light ? 'text-white' : ''}>{title}</h2>
          {subtitle && <p className={`section-subtitle ${light ? 'text-white' : ''}`}>{subtitle}</p>}
        </div>
      </Col>
    </Row>
  );
};

export default SectionTitle;
