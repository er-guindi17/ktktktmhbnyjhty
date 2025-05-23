import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.jsx';
import { Maximize, Swords, Shield, Trophy, Users, Crown } from 'lucide-react';

const galleryImages = [
  { 
    id: 1, 
    alt: "", 
    description: "",
    thumbnailUrl: "https://cdn.discordapp.com/attachments/1363990403099136132/1374024378865553511/EA_logo.png?ex=683128ac&is=682fd72c&hm=7a493486d28ebde307028f4c1932db49b3bc610337c33a9de555a903d77f2af6&",
    fullUrl: "https://cdn.discordapp.com/attachments/1363990403099136132/1374024378865553511/EA_logo.png?ex=683128ac&is=682fd72c&hm=7a493486d28ebde307028f4c1932db49b3bc610337c33a9de555a903d77f2af6&",
    icon: <Crown className="h-5 w-5 text-primary" />
  },
  { 
    id: 2, 
    alt: "", 
    description: "",
    thumbnailUrl: "https://cdn.discordapp.com/attachments/1363990403099136132/1375223198475616276/image.png?ex=683190a8&is=68303f28&hm=4c801083870368404a737cde57e7e504f41ca94a48523b58bd3c312d588a01b1&",
    fullUrl: "https://cdn.discordapp.com/attachments/1363990403099136132/1375223198475616276/image.png?ex=683190a8&is=68303f28&hm=4c801083870368404a737cde57e7e504f41ca94a48523b58bd3c312d588a01b1&",
    icon: <Swords className="h-5 w-5 text-primary" />
  },
  { 
    id: 3, 
    alt: "", 
    description: "",
    thumbnailUrl: "https://cdn.discordapp.com/attachments/1363990403099136132/1375222845453500519/20250522232314_1.jpg?ex=68319054&is=68303ed4&hm=a9b2afdfa7cf34784d276d55b42e79aacae15c68a21cd4e689eb2cc99e5aa158&",
    fullUrl: "https://cdn.discordapp.com/attachments/1363990403099136132/1375222845453500519/20250522232314_1.jpg?ex=68319054&is=68303ed4&hm=a9b2afdfa7cf34784d276d55b42e79aacae15c68a21cd4e689eb2cc99e5aa158&",
    icon: <Users className="h-5 w-5 text-primary" />
  },
  { 
    id: 4, 
    alt: "", 
    description: "",
    thumbnailUrl: "https://cdn.discordapp.com/attachments/1363990403099136132/1375225099635920916/image.png?ex=6831926e&is=683040ee&hm=2670a1158cbb01bbf66039626658ef4b8e1dd091974a7805bb14d0a0d39c2c4f&",
    fullUrl: "https://cdn.discordapp.com/attachments/1363990403099136132/1375225099635920916/image.png?ex=6831926e&is=683040ee&hm=2670a1158cbb01bbf66039626658ef4b8e1dd091974a7805bb14d0a0d39c2c4f&",
    icon: <Shield className="h-5 w-5 text-primary" />
  },
  { 
    id: 5, 
    alt: "", 
    description: "",
    thumbnailUrl: "https://cdn.discordapp.com/attachments/1363990403099136132/1375227970100137984/image.png?ex=6831951a&is=6830439a&hm=73a4d4a596a82a72991046acb8f5f62c344d3536c196e757da22528f91c174c5&",
    fullUrl: "https://cdn.discordapp.com/attachments/1363990403099136132/1375227970100137984/image.png?ex=6831951a&is=6830439a&hm=73a4d4a596a82a72991046acb8f5f62c344d3536c196e757da22528f91c174c5&",
    icon: <Swords className="h-5 w-5 text-primary" />
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
          {galleryImages.map((image, index) => {
            const isLastSingle = galleryImages.length % 4 === 1 && index === galleryImages.length - 1;

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={isLastSingle ? "col-span-full flex justify-center" : ""}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden glass-card group cursor-pointer hover:shadow-primary/30 hover:shadow-xl transition-all duration-300 primary-glow w-full max-w-sm">
                      <div className="relative aspect-video">
                        <img
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          alt={image.alt}
                          src={image.thumbnailUrl}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Maximize className="h-10 w-10 text-white" />
                        </div>
                      </div>
                      {/*
                      <CardContent className="p-4">
                        <div className="flex items-center mb-1">
                          {image.icon}
                          <p className="text-sm text-muted-foreground truncate ml-2">{image.description}</p>
                        </div>
                      </CardContent>
                      */}
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
                    <img
                      className="w-full h-auto object-contain rounded-lg shadow-2xl"
                      alt={image.alt}
                      src={image.fullUrl}
                    />
                  </DialogContent>
                </Dialog>
              </motion.div>
            );
          })}
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
