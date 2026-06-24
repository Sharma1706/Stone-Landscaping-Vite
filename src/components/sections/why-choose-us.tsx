import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Clock, Phone, MapPin } from "lucide-react";
import landscapingImg from "@/assets/images/landscaping-work.png";

const reasons = [
  {
    icon: Star,
    title: "Exceptional Quality",
    description: "Every job is done right the first time. We hold ourselves to the highest standard — from the cleanest edge lines to the straightest mow patterns.",
  },
  {
    icon: Clock,
    title: "Dependable & On Time",
    description: "We show up when we say we will. Consistent scheduling means your lawn is always ready, never neglected.",
  },
  {
    icon: Phone,
    title: "Easy to Reach",
    description: "Real people answer. Joban and the team are accessible, responsive, and always ready to address your concerns quickly.",
  },
  {
    icon: MapPin,
    title: "Locally Rooted",
    description: "We live and work in Brampton. We care about this community because it's ours — every lawn we maintain is a reflection of that pride.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 bg-foreground" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Why Choose Us</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
                The Stones Landscaping<br />Difference
              </h2>
              <p className="mt-4 text-white/70 text-lg leading-relaxed">
                Plenty of companies cut grass. We invest in your property like it's our own.
              </p>
            </div>

            <div className="space-y-8">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{reason.title}</h3>
                    <p className="text-white/65 leading-relaxed text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              <img
                src={landscapingImg}
                alt="Stones Landscaping team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>

            {/* Testimonial card */}
            <div className="absolute bottom-8 left-8 right-8 bg-background/95 backdrop-blur-sm rounded-xl p-5 shadow-2xl border border-border">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground font-medium leading-snug">
                "Stones Landscaping transformed our overgrown yard into something beautiful. Joban and his team are outstanding — reliable, professional, and affordable."
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-semibold">— Happy Brampton Homeowner</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
