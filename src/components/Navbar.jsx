import { motion } from 'framer-motion';
import { Menu, Map } from 'lucide-react';
import { navLinks } from '../data/siteData';

const Navbar = () => {
  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container navbar-inner">
        <a href="#home" className="brand" aria-label="Voyana Tours home">
          <span className="brand-icon">
            <Map size={18} />
          </span>
          <span>Voyana Tours</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <motion.a
          href="#contact"
          className="btn btn-primary nav-cta"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Plan a Trip
        </motion.a>

        <button className="mobile-menu-btn" type="button" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
