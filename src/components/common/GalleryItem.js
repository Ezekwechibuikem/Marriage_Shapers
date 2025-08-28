
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './GalleryItem.css';

const GalleryItem = ({ image, title, category }) => {
  const [showModal, setShowModal] = useState(false);
  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  
  return (
    <>
      <div className="gallery-item" onClick={handleShow}>
        <img src={image} alt={title} className="gallery-image" />
        <div className="gallery-overlay">
          <div className="gallery-info">
            <h5 className="gallery-title">{title}</h5>
            {category && <p className="gallery-category">{category}</p>}
          </div>
        </div>
      </div>
      
      <Modal show={showModal} onHide={handleClose} centered size="lg" className="gallery-modal">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image} alt={title} className="img-fluid gallery-modal-image" />
          {category && <p className="gallery-modal-category">{category}</p>}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GalleryItem;
