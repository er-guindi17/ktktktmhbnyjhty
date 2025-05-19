
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Users, Swords, Shield, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Card className="glass-card h-full hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-300">
      <CardHeader className="items-center">
        {React.cloneElement(icon, { className: "h-12 w-12 text-primary mb-4" })}
        <CardTitle className="text-2xl gradient-text">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-center">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const testimonials = [
  {
    id: 1,
    quote: "Si quieres aparecer aqui abre ticket en nuestro discord y simplemente dinoslo y ya esta aqui estaras",
    name: "Slot disponible",
    role: "Disponible",
    imageUrl: "https://i.imgur.com/DrdmR3h.jpeg",
    alt: "Avatar de Razor Vortex"
  },
  {
    id: 2,
    quote: "Si quieres aparecer aqui abre ticket en nuestro discord y simplemente dinoslo y ya esta aqui estaras",
    name: "Slot disponible",
    role: "Disponible",
    imageUrl: "https://i.imgur.com/DrdmR3h.jpeg",
    alt: "Avatar de Shadow Blade"
  },
  {
    id: 3,
    quote: "Si quieres aparecer aqui abre ticket en nuestro discord y simplemente dinoslo y ya esta aqui estaras",
    name: "Slot disponible",
    role: "Disponible",
    imageUrl: "https://i.imgur.com/DrdmR3h.jpeg",
    alt: "Avatar de Titan Fury"
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 md:py-32 text-white hero-gradient clip-path-slant"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 text-shadow"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Bienvenido a <span className="gradient-text">Elite Academy</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto text-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Donde la habilidad se forja en combate. Únete a una comunidad exclusiva dedicada a la maestría en PvP.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/join">
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 primary-glow">
                Únete a la Batalla
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Características del Servidor
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Swords />} 
              title="Combate Intenso" 
              description="Experimenta un sistema de PvP dinámico y equilibrado, diseñado para la acción pura."
              delay={0.3}
            />
            <FeatureCard 
              icon={<Shield />} 
              title="Arena de Campeones" 
              description="Demuestra tu habilidad en nuestras arenas competitivas y eventos especiales."
              delay={0.5}
            />
            <FeatureCard 
              icon={<Crown />} 
              title="Ranking y Recompensas" 
              description="Asciende en la clasificación, gana prestigio y obtén recompensas exclusivas."
              delay={0.7}
            />
            <FeatureCard 
              icon={<Users />} 
              title="Comunidad Activa" 
              description="Únete a clanes, participa en torneos y haz nuevos aliados (o rivales)."
              delay={0.9}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-secondary/30 clip-path-slant-reverse">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ¿Listo para dominar la arena?
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Consulta las reglas del servidor, prepárate para la acción y únete a nuestra comunidad de guerreros.
          </motion.p>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/rules">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                Ver Reglas del Servidor
              </Button>
            </Link>
            <a href="https://discord.gg/yourdiscord" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground primary-glow">
                Únete a Discord
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonial/Community Spotlight Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Leyendas del Servidor</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
              >
                <Card className="glass-card h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow flex flex-col">
                    <p className="text-muted-foreground italic mb-4 flex-grow">"{testimonial.quote}"</p>
                    <div className="flex items-center mt-auto">
                      <img className="h-12 w-12 rounded-full mr-4 object-cover" alt={testimonial.alt} src={testimonial.imageUrl} />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
