import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import mindmeshaiLogo from "@/assets/mindmeshai-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Blog", href: "#blog" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Process Automation",
    "AI Chatbots",
    "Data Analysis",
    "CRM Automation",
    "Document Processing",
    "Custom Solutions"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-foreground to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={mindmeshaiLogo} 
                alt="MINDMESHAI Logo" 
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-2xl font-bold text-white">
                MINDMESHAI
              </h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming businesses through AI-driven automation solutions. 
              Automate. Innovate. Accelerate.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-white/80 hover:text-white transition-smooth"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-white/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white/60" />
                <a 
                  href="mailto:hello@mindmeshai.com"
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  hello@mindmeshai.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/60" />
                <a 
                  href="tel:+15551234567"
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white/60 mt-1" />
                <span className="text-white/80">
                  123 Innovation Drive<br />
                  Tech City, TC 12345
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} MINDMESHAI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;