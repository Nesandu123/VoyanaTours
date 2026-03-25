import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { stats } from '../data/siteData';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, shouldReduceMotion ? 0 : 120]);
  const cardY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : -40]);

  return (
    <section id="home" className="hero-section">
      <motion.div className="hero-parallax-bg" style={{ y: backgroundY }} />
      <div className="floating-orb orb-1" />
      <div className="floating-orb orb-2" />
      <div className="floating-orb orb-3" />

      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="eyebrow">
            Premium travel experiences, all in one place
          </motion.span>
          <motion.h1 variants={itemVariants}>
            Sell unforgettable journeys with a modern tourism brand.
          </motion.h1>
          <motion.p variants={itemVariants}>
            Offer tour packages, tour guides, tourist transport, travel agent services,
            and complete holiday planning through one elegant one-page website.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <motion.a
              href="#packages"
              className="btn btn-primary"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Packages
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Consultation
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual-wrap" style={{ y: cardY }}>
          <motion.div
            className="hero-visual glass-card"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          >
            <div className="hero-visual-top">
              <span className="pill">Top Rated Experience</span>
              <span className="pill muted">Custom itineraries</span>
            </div>
            <div className="image-panel">
              <div className="image-overlay">
                <h3>Tropical escapes, mountain journeys, and cultural discovery.</h3>
                <p>Built for agencies, operators, and tourism brands ready to convert visitors.</p>
              </div>
            </div>
            <div className="hero-badges">
              <div className="mini-card">
                <span>Guide Match</span>
                <strong>45+ Experts</strong>
              </div>
              <div className="mini-card">
                <span>Transport Fleet</span>
                <strong>Airport to Safari</strong>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
