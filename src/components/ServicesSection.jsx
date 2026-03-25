import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { services } from '../data/siteData';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      delay: index * 0.08,
    },
  }),
};

const ServicesSection = () => {
  return (
    <AnimatedSection id="services" className="section section-soft">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Services</span>
          <h2>Everything a tourism business needs in one polished landing page</h2>
          <p>
            Highlight your core offerings clearly so visitors can discover, trust, and inquire fast.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="service-card glass-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                whileHover={{ y: -8 }}
              >
                <div className="service-icon">
                  <Icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="text-link">
                  Inquire now
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
