import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/images/hero-bg.png";
import { PhoneCall, CalendarCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Pristine lawn" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-medium tracking-wider mb-6">
              BRAMPTON'S TRUSTED LANDSCAPERS
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Rooted in quality. <br/>
            <span className="text-primary-foreground italic font-serif font-normal">Grounded in craft.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stones Landscaping Services brings reliable, professional care to your property. From routine lawn maintenance to full property transformations.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="#contact" data-testid="btn-hero-quote">
                <CalendarCheck className="mr-2 h-5 w-5" />
                Get a Free Quote
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-white/10 hover:bg-white/20 text-white border-white/20" asChild>
              <a href="tel:647-608-1499" data-testid="btn-hero-call">
                <PhoneCall className="mr-2 h-5 w-5" />
                647-608-1499
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative texture overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}>
      </div>
    </section>
  );
}
