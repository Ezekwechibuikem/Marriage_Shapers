import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = ({ showTitle = true }) => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setMessage({ type: "", text: "" });

    emailjs
      .sendForm(
        "service_hdb1s4i",
        "template_vm4i1zm",
        formRef.current,
        "5Avhvcx3l9mQ2X2MY"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setMessage({
            type: "success",
            text: "✅ Message sent successfully! We'll respond within 24 hours.",
          });
          formRef.current.reset();
          setSending(false);
          
          setTimeout(() => {
            setMessage({ type: "", text: "" });
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessage({
            type: "error",
            text: "❌ Failed to send message. Please try again or email us at marriageshapers@gmail.com",
          });
          setSending(false);
        }
      );
  };

  return (
    <div className="contact-form-container">
      {showTitle && (
        <h3 className="contact-form-title text-center mb-4">Get in Touch</h3>
      )}

      {message.text && (
        <div
          className={`alert ${
            message.type === "success" ? "alert-success" : "alert-danger"
          } mb-4`}
          role="alert"
        >
          {message.text}
        </div>
      )}

      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            name="from_name"
            className="form-control"
            placeholder="Enter your full name"
            required
            disabled={sending}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address *</label>
          <input
            type="email"
            name="reply_to"
            className="form-control"
            placeholder="your.email@example.com"
            required
            disabled={sending}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="+234 XXX XXX XXXX"
            disabled={sending}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Subject *</label>
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="What is your inquiry about?"
            required
            disabled={sending}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Message *</label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            placeholder="Tell us more about your inquiry..."
            required
            disabled={sending}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary contact-submit-btn"
          disabled={sending}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;