import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion.jsx";
import { ShieldAlert, UserCheck, Drama, Scale, Swords, Bot, Flame } from 'lucide-react';

const rulesData = [
  {
    id: "generalConduct",
    title: "1. Conducta General en el Servidor",
    icon: <UserCheck className="h-5 w-5 text-primary mr-2" />,
    content: [
      "Respeto hacia todos los jugadores y miembros del staff.",
      "No se tolerará ningún tipo de discriminación (racismo, sexismo, homofobia, etc.).",
      "Prohibido el uso de lenguaje excesivamente vulgar, spam o flood en los chats.",
      "Mantener una identidad de jugador (nombre) apropiada y no ofensiva."
    ]
  },
  {
    id: "pvpRules",
    title: "2. Reglas de Combate (PvP)",
    icon: <Swords className="h-5 w-5 text-primary mr-2" />,
    content: [
      "Juego limpio es primordial. No se permite el 'DM' entre otras muchas cosas mas.",
      "Prohibido el 'stream sniping' o cualquier forma de obtener ventaja externa.",
      "No abusar de mecánicas del juego 'exploits' para obtener ventajas en combate.",
      "Dar chance es obligatorio en cualquier situación, exceptuando zonas rojas, robos, drops y tormentas"
    ]
  },
  {
    id: "cheating",
    title: "3. Trampas y Software Externo",
    icon: <Bot className="h-5 w-5 text-primary mr-2" />,
    content: [
      "Tolerancia CERO al uso de hacks, cheats, scripts o cualquier software de terceros que otorgue ventajas injustas.",
      "Cualquier intento de modificar los archivos del juego para obtener ventaja será sancionado severamente.",
      "Reportar a jugadores sospechosos de trampas al staff con pruebas (vídeos, capturas).",
      "No acusar públicamente de trampas, usar los canales de reporte designados."
    ]
  },
  {
    id: "communication",
    title: "4. Comunicación y Discord",
    icon: <Drama className="h-5 w-5 text-primary mr-2" />,
    content: [
      "Las reglas del servidor aplican también a nuestro servidor de Discord oficial.",
      "No compartir información personal de otros jugadores sin su consentimiento.",
      "Utilizar los canales de Discord apropiados para cada tema.",
      "Las decisiones del staff son finales. Discutir sanciones en público puede llevar a más acciones."
    ]
  },
   {
    id: "exploitsBugs",
    title: "5. Exploits y Errores del Juego",
    icon: <Flame className="h-5 w-5 text-primary mr-2" />,
    content: [
      "Reportar cualquier bug o exploit encontrado al staff a través de un ticket.",
      "Abusar de bugs conocidos para beneficio personal o de equipo está estrictamente prohibido.",
      "No usar F8 quit al morir para evitar ser cacheado.",
      "La duplicación de ítems o cualquier forma de abuso económico mediante exploits resultará en ban permanente."
    ]
  },
  {
    id: "staffInteraction",
    title: "6. Interacción con el Staff y Sanciones",
    icon: <ShieldAlert className="h-5 w-5 text-primary mr-2" />,
    content: [
      "Las decisiones del equipo de administración y moderación son finales.",
      "No suplantar la identidad de ningún miembro del staff.",
      "Las sanciones pueden variar desde advertencias verbales, baneos temporales hasta permanentes, dependiendo de la gravedad y recurrencia.",
      "Apelaciones a sanciones deben hacerse a través del sistema de tickets en Discord de forma respetuosa."
    ]
  }
];

const RulesPage = () => {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn()}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Reglas del Servidor Elite Academy</h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Para asegurar una experiencia de juego justa y divertida para todos, sigue estas directrices.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto bg-card/80 glass-card p-6 sm:p-8 rounded-xl shadow-2xl primary-glow"
          {...fadeIn(0.2)}
        >
          <Accordion type="single" collapsible className="w-full">
            {rulesData.map((ruleCategory) => (
              <AccordionItem value={ruleCategory.id} key={ruleCategory.id} className="border-b-primary/20">
                <AccordionTrigger className="text-lg md:text-xl font-semibold text-foreground hover:no-underline hover:text-primary transition-colors py-4">
                  <div className="flex items-center">
                    {ruleCategory.icon}
                    <span>{ruleCategory.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 text-muted-foreground">
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    {ruleCategory.content.map((rule, idx) => (
                      <li key={idx} className="leading-relaxed">{rule}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          {...fadeIn(0.4 + rulesData.length * 0.1)}
        >
          <Scale className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-foreground mb-2">Juego Limpio y Respeto</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            El incumplimiento de estas reglas puede resultar en sanciones. Ayúdanos a mantener Elite Academy como el mejor servidor PvP.
            Si tienes dudas, contacta al staff en Discord.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RulesPage;
