import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="section section-soft">
      <div className="container contact-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Contact</span>
          <h2>Turn visitors into travel inquiries</h2>
          <p>
            Add WhatsApp, phone, or backend form handling later. This front-end version is already structured for commercial lead generation.
          </p>
          <div className="contact-list">
            <div>
              <span>Email</span>
              <strong>hello@voyanatours.com</strong>
            </div>
            <div>
              <span>Phone</span>
              <strong>+94 77 123 4567</strong>
            </div>
            <div>
              <span>Office</span>
              <strong>Colombo, Sri Lanka</strong>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="field-row">
            <label>
              Full Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="Your email" />
            </label>
          </div>
          <div className="field-row">
            <label>
              Service Needed
              <select defaultValue="">
                <option value="" disabled>
                  Select service
                </option>
                <option>Tour Package</option>
                <option>Tour Guide</option>
                <option>Transport</option>
                <option>Travel Agent Service</option>
              </select>
            </label>
            <label>
              Travel Date
              <input type="date" />
            </label>
          </div>
          <label>
            Trip Details
            <textarea rows="5" placeholder="Tell us about your travel plan" />
          </label>
          <motion.button
            type="button"
            className="btn btn-primary full-width"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Inquiry
          </motion.button>
        </motion.form>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
