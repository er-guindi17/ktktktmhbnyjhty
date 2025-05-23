import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { ExternalLink, MessageSquare, Gamepad2 } from 'lucide-react';

const connectionLinks = [
  {
    id: 'discord',
    title: 'Únete a Discord',
    description: 'Chatea con la comunidad, encuentra equipos y mantente al día.',
    url: 'https://discord.gg/4an54zAXa7',
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    cta: 'Ir a Discord',
  },
  {
    id: 'server',
    title: 'Conéctate al Servidor',
    description: 'Entra directamente a la acción. IP: play.eliteacademy.gg',
    url: 'fivem://connect/play.eliteacademy.gg',
    icon: <Gamepad2 className="h-10 w-10 text-primary" />,
    cta: 'Conectar Ahora',
  },
];

const JoinPage = () => {
  const fadeIn = (delay = 0, y = 20) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-background via-background to-secondary/10 font-orbitron">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn(0)}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Conéctate con Elite Academy
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Forma parte de nuestra comunidad. Aquí encontrarás todos los enlaces para unirte a la acción y estar en contacto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {connectionLinks.map((link, index) => {
            const isDisabled = link.id === 'server';

            return (
              <motion.div key={link.id} {...fadeIn(0.2 + index * 0.15)}>
                <Card
                  className={`glass-card h-full flex flex-col transition-all duration-300 primary-glow ${
                    isDisabled
                      ? 'opacity-70 relative cursor-not-allowed'
                      : 'hover:shadow-primary/30 hover:shadow-xl'
                  }`}
                >
                  <CardHeader className="items-center text-center">
                    {link.icon}
                    <CardTitle className="text-2xl gradient-text mt-2">{link.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col text-center relative">
                    <p className="text-muted-foreground mb-6 flex-grow">{link.description}</p>
                    
                    {/* Overlay de "Próximamente" */}
                    {isDisabled && (
                      <div className="absolute inset-x-0 bottom-0 mb-1 z-10 flex justify-center">
                        <span className="bg-yellow-500 text-white text-lg font-bold px-4 py-1 rounded-full shadow-lg animate-pulse">
                          Próximamente
                        </span>
                      </div>
                    )}

                    <a
                      href={isDisabled ? undefined : link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => isDisabled && e.preventDefault()}
                    >
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground primary-glow"
                        disabled={isDisabled}
                      >
                        {link.cta} <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
