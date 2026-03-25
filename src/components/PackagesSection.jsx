import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { packages as packageData } from '../data/siteData';

const PackagesSection = () => {
  return (
    <AnimatedSection id="packages" className="section">
      <div className="container">
        <div className="section-head split-head">
          <div>
            <span className="eyebrow">Tour Packages</span>
            <h2>Ready-made journeys that are easy to sell and even easier to customize</h2>
          </div>
          <p>
            Present best-selling packages with duration, highlights, and clear pricing cues to drive inquiries.
          </p>
        </div>

        <div className="package-grid">
          {packageData.map((item, index) => (
            <motion.article
              key={item.title}
              className="package-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
               <img src={item.image} alt={item.title} />
               
              <span className="package-tag">Popular package</span>
              <h3>{item.title}</h3>
              <p>{item.highlight}</p>
              <div className="package-meta">
                <span>{item.duration}</span>
                <strong>{item.price}</strong>
              </div>
              <motion.a
                href="#contact"
                className="btn btn-secondary full-width"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Ask about this package
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PackagesSection;
