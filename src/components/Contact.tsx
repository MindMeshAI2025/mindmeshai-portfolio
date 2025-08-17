import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@intelliautomate.com",
      link: "mailto:hello@intelliautomate.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Drive, Tech City, TC 12345",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Get in touch with us today to discuss how AI automation can transform your operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="shadow-medium hover:shadow-premium transition-smooth border-0 card-premium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-5">
                    <div className="p-4 bg-gradient-to-br from-primary to-tech-blue rounded-2xl shadow-medium">
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-2 text-lg">{info.title}</h3>
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-smooth font-medium"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-scale-in">
            <Card className="shadow-premium border-0 card-premium">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold text-center text-foreground tracking-tight">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="font-display font-semibold text-foreground">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-muted focus:border-primary rounded-xl h-12 text-lg font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="font-display font-semibold text-foreground">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-muted focus:border-primary rounded-xl h-12 text-lg font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="font-display font-semibold text-foreground">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-muted focus:border-primary rounded-xl h-12 text-lg font-medium"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="font-display font-semibold text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-muted focus:border-primary min-h-[140px] resize-none rounded-xl text-lg font-medium"
                      placeholder="Tell us about your automation needs..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary to-tech-blue hover:from-primary-hover hover:to-tech-blue-dark text-white font-display font-bold py-4 h-auto text-xl transition-smooth rounded-xl shadow-medium"
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;