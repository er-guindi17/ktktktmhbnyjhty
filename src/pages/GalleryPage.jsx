
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.jsx';
import { Maximize, Swords, Shield, Trophy, Users, Crown } from 'lucide-react';

const galleryImages = [
  { 
    id: 1, 
    alt: "Nueva lobby de Elite Academy", 
    description: "Nueva lobby de Elite Academy",
    thumbnailUrl: "https://cdn.discordapp.com/attachments/1363990403099136132/1375223198475616276/image.png?ex=6830e7e8&is=682f9668&hm=0b00d21647dbff1ddc7e6202ad5461063952f6f83c6ec79c4328c16696bdad55&",
    fullUrl: "https://cdn.discordapp.com/attachments/1363990403099136132/1375223198475616276/image.png?ex=6830e7e8&is=682f9668&hm=0b00d21647dbff1ddc7e6202ad5461063952f6f83c6ec79c4328c16696bdad55&",
    icon: <Crown className="h-5 w-5 text-primary" />
  },
  { 
    id: 2, 
    alt: "Intenso combate 1v1 en Elite Academy", 
    description: "Duelo reñido hasta el último segundo.",
    thumbnailUrl: "https://images.unsplash.com/photo-1612287230202-956de7e79696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHZwJTIwZ2FtaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    fullUrl: "https://images.unsplash.com/photo-1612287230202-956de7e79696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHZwJTIwZ2FtaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80",
    icon: <Swords className="h-5 w-5 text-primary" />
  },
  { 
    id: 3, 
    alt: "Equipo celebrando victoria en Elite Academy", 
    description: "¡Trabajo en equipo que lleva a la gloria!",
    thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    fullUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    icon: <Users className="h-5 w-5 text-primary" />
  },
  { 
    id: 4, 
    alt: "Vista de una arena de combate en Elite Academy", 
    description: "La arena espera a sus próximos campeones.",
    thumbnailUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGFyZW5hfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    fullUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGFyZW5hfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80",
    icon: <Shield className="h-5 w-5 text-primary" />
  }
];


const GalleryPage = () => {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/10 font-orbitron">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn()}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Galería de Elite Academy</h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Revive los momentos más intensos y las victorias más gloriosas de nuestra comunidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden glass-card group cursor-pointer hover:shadow-primary/30 hover:shadow-xl transition-all duration-300 primary-glow">
                    <div className="relative aspect-video">
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                        alt={image.alt}
                        src={image.thumbnailUrl} />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Maximize className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-1">
                        {image.icon}
                        <p className="text-sm text-muted-foreground truncate ml-2">{image.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
                   <img
                      className="w-full h-auto object-contain rounded-lg shadow-2xl" 
                      alt={image.alt}
                      src={image.fullUrl} />
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          {...fadeIn(galleryImages.length * 0.1 + 0.2)}
        >
          <p className="text-lg text-muted-foreground">
            ¿Tienes tus propios momentos épicos? ¡Compártelos en nuestro Discord y forma parte de la leyenda!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;
