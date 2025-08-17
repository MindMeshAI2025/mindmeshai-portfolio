import { Bot, Workflow, BarChart3, Users, FileText, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamlining repetitive workflows using AI & RPA to boost productivity and eliminate manual errors.",
    },
    {
      icon: Bot,
      title: "AI Chatbots & Virtual Assistants",
      description: "24/7 intelligent customer engagement with AI-powered chatbots that understand and respond naturally.",
    },
    {
      icon: BarChart3,
      title: "Data Analysis Automation",
      description: "Turning raw data into actionable insights with automated analysis and intelligent reporting systems.",
    },
    {
      icon: Users,
      title: "Lead Management & CRM Automation",
      description: "AI-powered sales pipeline optimization that nurtures leads and maximizes conversion rates.",
    },
    {
      icon: FileText,
      title: "Document Processing Automation",
      description: "Intelligent document scanning and data extraction that processes information at lightning speed.",
    },
    {
      icon: Wrench,
      title: "Custom AI Solutions",
      description: "Tailored automation tools designed to solve unique business challenges with precision and efficiency.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            We provide comprehensive AI automation solutions designed to transform your business operations and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-premium transition-smooth animate-scale-in border-0 shadow-medium card-premium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-6 p-4 w-20 h-20 bg-gradient-to-br from-primary to-tech-blue rounded-3xl flex items-center justify-center group-hover:scale-110 transition-bounce shadow-medium">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-smooth tracking-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;