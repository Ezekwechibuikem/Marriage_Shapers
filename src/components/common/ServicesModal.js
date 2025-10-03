// src/components/Modal.js
import React from "react";

const Modal = ({ show, onClose, title, content }) => {
  if (!show) return null; // don't render if not open

  return (
    <div className="modal-overlay" style={overlayStyle}>
      <div className="modal-content" style={contentStyle}>
        <h2>{title}</h2>
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          <p>{content}</p>
        </div>
        <button onClick={onClose} style={buttonStyle}>
          Close
        </button>
      </div>
    </div>
  );
};

// Inline styles (you can move to CSS later)
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const contentStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "80%",
  maxWidth: "700px",
};

const buttonStyle = {
  marginTop: "15px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Modal;
