
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Users, Zap, Target, Shield, Server, Map } from 'lucide-react';

const AboutPage = () => {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  const staffMembers = [
    { name: "Commander 'Havoc' Rex", role: "Fundador y Admin Principal", image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0JTIwbWFuJTIwY29uZmlkZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60", alt: "Commander Rex" },
    { name: "Agent 'Wraith' Valerius", role: "Jefe de Desarrollo y Eventos", image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0JTIwbWFuJTIwc2VyaW91c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60", alt: "Agent Valerius" },
    { name: "Operator 'Nyx' Sharma", role: "Moderadora Jefe y Soporte Comunitario", image: "https://images.unsplash.com/photo-1488426862026-39b994028de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXQlMjBmZW1hbGUlMjBzdHJvbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=60", alt: "Operator Nyx" },
  ];

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn()}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Sobre Elite Academy PvP</h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Somos un servidor dedicado a la acción PvP implacable, la estrategia y la competencia pura. Aquí se forjan las leyendas.
          </p>
        </motion.div>

        <motion.div className="mb-16" {...fadeIn(0.2)}>
          <Card className="glass-card overflow-hidden shadow-xl primary-glow">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img className="h-64 w-full object-cover md:h-full" alt="Escena de combate intensa en Elite Academy" src="https://media.discordapp.net/attachments/1363990403099136132/1373630534709805167/bannerdiscord.png?ex=682c6e20&is=682b1ca0&hm=78b9471e61c51bb60ef1a1c0c7d505d117494a260f8a50eff35d43157688d8db&=&format=webp&quality=lossless" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-semibold text-foreground mb-4">Nuestra Arena</h2>
                <p className="text-muted-foreground mb-4">
                  Elite Academy nació de la pasión por el combate PvP justo y emocionante. Nuestra misión es proporcionar una plataforma estable, competitiva y atractiva donde los jugadores puedan demostrar su habilidad, estrategia y trabajo en equipo.
                </p>
                <p className="text-muted-foreground">
                  Creemos en el juego limpio, una comunidad fuerte y la evolución constante de la experiencia de juego.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div className="mb-16" {...fadeIn(0.4)}>
          <h2 className="text-3xl font-bold text-center mb-10 gradient-text">Lo Que Nos Define</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-10 h-10 text-primary" />, title: "Juego Equilibrado", description: "Sistemas y mecánicas PvP ajustadas para la competencia justa." },
              { icon: <Server className="w-10 h-10 text-primary" />, title: "Rendimiento Óptimo", description: "Servidores de alta calidad para una experiencia de juego fluida." },
              { icon: <Users className="w-10 h-10 text-primary" />, title: "Comunidad Fuerte", description: "Fomentamos el respeto, la camaradería y la sana rivalidad." },
              { icon: <Map className="w-10 h-10 text-primary" />, title: "Mapas y Modos Variados", description: "Diversos escenarios y modos de juego para mantener la acción fresca." },
              { icon: <Target className="w-10 h-10 text-primary" />, title: "Eventos Constantes", description: "Torneos, desafíos y eventos especiales con recompensas únicas." },
              { icon: <Zap className="w-10 h-10 text-primary" />, title: "Anti-Cheat Activo", description: "Tolerancia cero a las trampas para garantizar un juego limpio." },
            ].map((value, index) => (
              <motion.div key={value.title} {...fadeIn(0.5 + index * 0.1)}>
                <Card className="glass-card text-center h-full p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default AboutPage;
