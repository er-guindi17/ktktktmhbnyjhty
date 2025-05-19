
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Sobre Nosotros', path: '/about' },
  { name: 'Reglamento', path: '/rules' },
  { name: 'Galería', path: '/gallery' },
  { name: 'Conexiones', path: '/join' }, 
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "hsl(var(--primary))",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      className="sticky top-0 z-40 w-full nav-blur shadow-lg font-orbitron"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img  alt="Elite Academy Logo" class="h-10 w-10 rounded-md object-cover" src="https://images.unsplash.com/photo-1685115560482-7ec4fb23414c" />
            <span className="text-2xl font-bold gradient-text">Elite Academy</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div key={item.name} variants={linkVariants} whileHover="hover" whileTap="tap">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive ? 'text-primary' : 'text-foreground hover:text-primary/80'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
            <a href="https://discord.gg/yourdiscord" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground primary-glow">
                Discord
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-20 left-0 w-full bg-background/95 shadow-xl pb-4 nav-blur"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center space-y-4 pt-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary/80 hover:bg-primary/5'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <a href="https://discord.gg/yourdiscord" target="_blank" rel="noopener noreferrer" className="w-3/4">
                <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground primary-glow">
                  Discord
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
