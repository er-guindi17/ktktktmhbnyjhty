
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
