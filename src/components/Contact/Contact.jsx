import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    const messageId = "MSG-" + Math.floor(1000 + Math.random() * 9000);
    
    toast.success(`Message Sent! ID: ${messageId}`, {
      style: {
        background: 'var(--bg-soft)',
        color: 'var(--text)',
        border: '1px solid var(--accent)',
      },
      iconTheme: {
        primary: 'var(--accent)',
        secondary: 'var(--bg-soft)',
      },
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-info">
        <span>Visit Us</span>
        <h2>Get In Touch</h2>
        <p>
          We'd love to serve you. Visit us, call us, or send us a message.
        </p>

        <div className="info-item">📍 123 Park Street, Kolkata</div>
        <div className="info-item">☎ +91 9876543210</div>
        <div className="info-item">✉ hello@urbanbites.com</div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email Address" 
          value={formData.email}
          onChange={handleChange}
        />
        <textarea 
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      
      {/* Small inline style specific to contact text area overriding css */}
      <style>{`
        .contact-form textarea {
          width: 100%;
          padding: 1rem 1.2rem;
          font-family: "Poppins";
          background: var(--bg-soft);
          border: var(--border-card);
          border-radius: 14px;
          color: var(--text);
          font-size: 0.95rem;
          outline: none;
          transition: 0.3s ease;
          min-height: 150px;
          resize: vertical;
        }
        .contact-form textarea:focus {
          border-color: var(--accent);
          box-shadow: 0 0 15px hsla(25, 95%, 55%, 0.15);
        }
        .contact-form button {
          margin-top: 1rem;
          padding: 1rem;
          border: none;
          border-radius: 999px;
          background: var(--accent);
          color: hsl(0, 0%, 99%);
          font-size: 1rem;
          font-family: "Poppins";
          cursor: pointer;
          transition: 0.3s ease;
          width: 100%;
        }
      `}</style>
    </section>
  );
}
