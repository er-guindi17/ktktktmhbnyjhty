
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react'; // Discord icon can be custom or from another library if needed
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      color: "hsl(var(--primary))",
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="bg-background/80 border-t border-border/50 mt-auto py-12 font-orbitron">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img  alt="Elite Academy Logo Footer" class="h-8 w-8 rounded-md object-cover" src="https://i.imgur.com/DrdmR3h.jpeg" />
              <span className="text-xl font-bold gradient-text">Elite Academy</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Forjando leyendas en la comunidad. Únete a la élite.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center md:text-left">Explorar</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/rules" className="text-sm text-muted-foreground hover:text-primary transition-colors">Reglamento</Link></li>
              <li><Link to="/join" className="text-sm text-muted-foreground hover:text-primary transition-colors">Conexiones</Link></li>
              <li><Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Galería</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center md:text-left">Conéctate</h3>
            <div className="flex justify-center md:justify-start space-x-4">
               <motion.a href="https://discord.gg/yourdiscord" target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover">
                {/* Placeholder for Discord Icon, Lucide doesn't have one. You might use a simple text or find an SVG */}
                <svg className="h-6 w-6 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.36981C18.7915 3.09531 16.9067 2.15594 14.83 1.66501C14.7504 1.8789 14.6495 2.10112 14.5328 2.32998C12.6981 2.02998 10.8019 2.02998 8.96723 2.32998C8.84438 2.09821 8.73729 1.87328 8.65773 1.66501C6.58109 2.15594 4.69626 3.09531 3.17077 4.36981C0.0689441 8.80021 -0.493061 13.217 0.865031 17.349C2.83101 19.0106 5.08053 19.9554 7.50023 20.2616C7.50023 20.2616 7.56213 20.1313 7.62965 19.9953C8.1811 19.5044 8.69504 18.9606 9.16611 18.3798C9.01933 18.2737 8.87817 18.1619 8.74264 18.0444C6.46906 17.2889 4.78703 15.8013 4.00076 13.9766C4.00076 13.9766 4.00076 13.9709 4.00638 13.9653C4.02363 13.9424 4.04088 13.9195 4.06375 13.8966C5.92943 15.0141 8.11642 15.5919 10.3701 15.5919C10.3701 15.5919 10.3701 15.5919 10.3757 15.5919C12.6294 15.5919 14.8164 15.0141 16.6821 13.8966C16.705 13.9195 16.7222 13.9424 16.7395 13.9653C16.7451 13.9709 16.7451 13.9709 16.7451 13.9766C15.9588 15.8013 14.2768 17.2889 11.9976 18.0444C11.8621 18.1619 11.7209 18.2737 11.5741 18.3798C12.0452 18.9606 12.5591 19.5044 13.1106 19.9953C13.1781 20.1313 13.2344 20.2616 13.2344 20.2616C15.6541 19.9554 17.9036 19.0106 19.8696 17.349C21.2333 13.2055 20.6657 8.78868 17.5639 4.36981L20.317 4.36981Z"/></svg>
              </motion.a>
              <motion.a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover">
                <Twitter className="h-6 w-6 text-muted-foreground" />
              </motion.a>
              <motion.a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover">
                <Github className="h-6 w-6 text-muted-foreground" />
              </motion.a>
            </div>
            <a href="https://discord.gg/yourdiscord" target="_blank" rel="noopener noreferrer" className="block mt-4 text-sm text-primary hover:text-primary/80 text-center md:text-left">
                Únete a nuestro Discord
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Elite Academy. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Diseñado para la comunidad <span className="text-primary">&lambda;</span> por jugadores.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
