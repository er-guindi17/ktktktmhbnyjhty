
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { AlertTriangle, Home, Swords } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center px-4 py-12 bg-gradient-to-br from-background via-background to-secondary/10">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <AlertTriangle className="h-24 w-24 md:h-32 md:w-32 text-primary mx-auto mb-6" />
      </motion.div>

      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold mb-4 gradient-text text-shadow"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Error 404
      </motion.h1>

      <motion.p 
        className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        ¡Vaya! Parece que esta zona del mapa aún no ha sido descubierta en Elite Academy, o el enlace está corrupto.
      </motion.p>

      <motion.div
        className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Link to="/">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground primary-glow">
            <Home className="mr-2 h-5 w-5" />
            Volver al Inicio
          </Button>
        </Link>
        <Link to="/join">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
            <Swords className="mr-2 h-5 w-5" />
            Unirse a la Batalla
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
