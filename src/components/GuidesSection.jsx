import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { guides } from '../data/siteData';

const GuidesSection = () => {
  return (
    <AnimatedSection id="guides" className="section section-soft">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Tour Guides & Transport</span>
          <h2>Connect travelers with the right local expert and the right ride</h2>
          <p>
            Showcase guide specialties and transport confidence in a way that feels premium and trustworthy.
          </p>
        </div>

        <div className="guide-layout">
          <div className="guides-grid">
            {guides.map((guide, index) => (
              <motion.article
                key={guide.name}
                className="guide-card glass-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <div className="guide-avatar">{guide.name.charAt(0)}</div>
                <div>
                  <h3>{guide.name}</h3>
                  <span className="guide-specialty">{guide.specialty}</span>
                  <p>{guide.text}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.aside
            className="transport-panel"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow small">Tourist Transport</span>
            <h3>Comfortable transport for every travel style</h3>
            <ul>
              <li>Airport transfers and hotel pickups</li>
              <li>Private cars, family vans, and group coaches</li>
              <li>Chauffeur-driven routes for round tours</li>
              <li>Flexible booking for one-day or multi-day trips</li>
            </ul>
            <a href="#contact" className="btn btn-primary">
              Reserve transport
            </a>
          </motion.aside>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default GuidesSection;
