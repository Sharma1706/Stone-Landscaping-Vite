import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      toast({
        title: "Configuration needed",
        description: "Contact form is not yet configured. Please check back soon.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Quote Request from ${data.name} — Stones Landscaping`,
          from_name: data.name,
          email: data.email,
          phone: data.phone || "Not provided",
          service: data.service,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll be in touch with you shortly.",
        });
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try calling us directly at 647-608-1499.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Get in Touch</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">Request a Free Quote</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to transform your property? Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "647-608-1499",
                  href: "tel:647-608-1499",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@stoneslandscaping.ca",
                  href: "mailto:info@stoneslandscaping.ca",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex gap-5 items-start group"
                  data-testid={`link-contact-${item.label.toLowerCase()}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-foreground font-medium leading-relaxed whitespace-pre-line group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-card border border-card-border rounded-2xl p-8 shadow-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            data-testid="input-contact-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            data-testid="input-contact-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="647-000-0000"
                            data-testid="input-contact-phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interested In</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-contact-service">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="lawn-maintenance">Basic Lawn Maintenance</SelectItem>
                            <SelectItem value="lawn-care">Lawn Care / Grass Health</SelectItem>
                            <SelectItem value="landscaping">Landscaping & Property Upgrades</SelectItem>
                            <SelectItem value="seasonal">Seasonal Services</SelectItem>
                            <SelectItem value="snow-removal">Snow Removal</SelectItem>
                            <SelectItem value="other">Other / General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tell Us About Your Property</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your property, what needs to be done, and any other details that would help us quote you accurately..."
                          className="min-h-[140px] resize-none"
                          data-testid="textarea-contact-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-13 text-base"
                  data-testid="button-contact-submit"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message & Request Quote"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We typically respond within 24 hours. You can also call or email us directly.
                </p>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
