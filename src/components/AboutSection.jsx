import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { features } from '../data/siteData';

const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="section">
      <div className="container about-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Travel Agent / Tour Operator</span>
          <h2>A commercial tourism brand built to sell trust, service, and experience</h2>
          <p>
            Use this section to explain your brand story, travel expertise, booking process,
            and why travelers should choose you instead of a generic marketplace.
          </p>
          <p>
            This layout is ideal for travel agencies, destination management companies,
            excursion providers, and commercial tourism businesses that want a strong online presence.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.text}
                className="feature-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Icon size={20} />
                <span>{feature.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
