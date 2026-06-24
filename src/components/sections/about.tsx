import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Shield, Users } from "lucide-react";
import gardenImg from "@/assets/images/garden-mulch.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={gardenImg}
                alt="Professional landscaping work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />

            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-background rounded-xl px-5 py-4 shadow-lg border border-border">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground font-medium">Years of Experience</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">About Us</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Brampton's Trusted<br />Landscaping Team
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Stones Landscaping Services Inc. is a professional landscaping company proudly serving Brampton and the surrounding communities. Led by <strong className="text-foreground">Joban Dhot</strong>, our Director, we bring dedication and precision to every property we touch.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you need routine lawn care or a complete property transformation, our team delivers consistent, high-quality results season after season. We're not just landscapers — we're your long-term property partners.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {[
                { icon: Leaf, label: "Eco-Conscious", desc: "Responsible practices for a healthier lawn and planet" },
                { icon: Shield, label: "Fully Insured", desc: "Licensed and insured for your complete peace of mind" },
                { icon: Users, label: "Local Team", desc: "Based in Brampton, serving our community with pride" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{item.label}</h4>
                  <p className="text-sm text-muted-foreground leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
