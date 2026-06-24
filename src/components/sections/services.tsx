import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Sprout, Hammer, Snowflake, Check } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Basic Lawn Maintenance",
    subtitle: "Weekly / Bi-Weekly",
    color: "bg-green-50 text-green-700 border-green-100",
    iconColor: "bg-green-600",
    description: "Keep your lawn looking pristine year-round with our reliable, recurring maintenance programs.",
    items: [
      "Lawn mowing — clean, even cuts every visit",
      "Weed trimming & edging along borders",
      "Blowing debris off driveways & sidewalks",
      "Basic yard cleanup after each visit",
    ],
  },
  {
    icon: Sprout,
    title: "Lawn Care",
    subtitle: "Grass Health & Growth",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    iconColor: "bg-emerald-700",
    description: "More than just cutting — we nurture your lawn from the roots up for thick, green, healthy grass.",
    items: [
      "Fertilization programs",
      "Weed control treatments",
      "Aeration (soil loosening)",
      "Overseeding for thicker growth",
      "Dethatching services",
    ],
  },
  {
    icon: Hammer,
    title: "Landscaping & Property Upgrades",
    subtitle: "High-Impact Transformations",
    color: "bg-stone-50 text-stone-700 border-stone-100",
    iconColor: "bg-stone-600",
    description: "Transform your outdoor space entirely — from new lawn installation to complete hardscape projects.",
    items: [
      "Sod installation (new lawn)",
      "Garden & flower bed maintenance",
      "Bush & hedge trimming",
      "Mulching & planting",
      "Interlocking — driveways & patios",
      "Decks, fences & pergolas",
      "Irrigation systems",
    ],
  },
  {
    icon: Snowflake,
    title: "Seasonal Services",
    subtitle: "Year-Round Property Care",
    color: "bg-sky-50 text-sky-700 border-sky-100",
    iconColor: "bg-sky-600",
    description: "We keep your property in top shape through every season — spring to winter and back again.",
    items: [
      "Spring & fall cleanups",
      "Leaf & debris removal",
      "Snow removal & salting",
      "Winter contract programs",
      "Year-round maintenance packages",
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">What We Do</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            From weekly mowing to full landscape transformations — we handle every aspect of your outdoor property.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              className="group bg-card border border-card-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-start gap-5 mb-6">
                <div className={`w-14 h-14 rounded-xl ${service.iconColor} flex items-center justify-center shrink-0 shadow-sm`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <span className="text-sm text-primary font-medium">{service.subtitle}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
