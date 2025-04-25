import React, { useState } from 'react';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Message sent successfully!');
  };
  
  const socialLinks = [
    { name: 'GitHub', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' }
  ];
  
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Contact Information</h3>
            <ul>
              <li>john.doe@example.com</li>
              <li>+1 (123) 456-7890</li>
              <li>San Francisco, CA, USA</li>
            </ul>
          </div>
          
          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows="5" 
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
          
          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="links">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} className="social-icon">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 John Doe. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;