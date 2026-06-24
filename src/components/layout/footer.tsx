import React from "react";
import { Phone, Mail, Clock } from "lucide-react";
import { Link } from "wouter";
import logoImg from "@assets/450d3a94-140b-45bb-a5c7-66985d0d8107_1776186547508.jpg";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/">
              <div className="bg-white rounded-xl p-2 inline-block">
                <img
                  src={logoImg}
                  alt="Stones Landscaping Services Inc."
                  className="h-20 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional, reliable landscaping serving Brampton, Ontario. From routine lawn maintenance to full property transformations, every property we touch looks cared for.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">Our Services</a>
              </li>
              <li>
                <a href="#why-us" className="text-white/70 hover:text-white transition-colors text-sm">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm">Get a Quote</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:647-608-1499" className="hover:text-white transition-colors">647-608-1499</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@stoneslandscaping.ca" className="hover:text-white transition-colors">info@stoneslandscaping.ca</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Business Hours</h3>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Monday - Friday</p>
                  <p>8:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Saturday</p>
                  <p>9:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 shrink-0" />
                <div>
                  <p className="font-medium text-white mb-1">Sunday</p>
                  <p>Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Stones Landscaping Services Inc. All rights reserved.</p>
          <p>Brampton, Ontario</p>
        </div>
      </div>
    </footer>
  );
}
