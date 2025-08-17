import { CheckCircle, Target, Zap } from "lucide-react";
import aiAutomationStats from "@/assets/ai-automation-stats.jpg";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Precision-Focused",
      description: "Every solution is tailored to meet your specific business needs and objectives."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid implementation and deployment to get your automation running quickly."
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Track record of helping businesses save time, reduce costs, and boost efficiency."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 tracking-tight">
              About MINDMESHAI
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              MINDMESHAI specializes in providing AI-driven automation services that help businesses save time, reduce costs, and boost efficiency. Our expertise covers process automation, AI chatbots, data analysis automation, lead management, document processing, and custom AI solutions tailored to client needs.
            </p>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
              We focus on small to mid-sized businesses looking to modernize their operations with AI, providing them with enterprise-level automation capabilities that were once only available to large corporations.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start space-x-4 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0 p-2 bg-gradient-to-br from-primary to-tech-blue rounded-lg">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-2 text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground font-medium">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="animate-scale-in">
            {/* AI Automation Image */}
            <div className="mb-8">
              <img 
                src={aiAutomationStats} 
                alt="AI Automation Technology" 
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
            </div>
            <div className="card-premium rounded-3xl shadow-premium p-10">
              <div className="grid grid-cols-2 gap-10">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-3">50+</div>
                  <div className="text-muted-foreground font-medium text-lg">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-3">95%</div>
                  <div className="text-muted-foreground font-medium text-lg">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-3">40%</div>
                  <div className="text-muted-foreground font-medium text-lg">Average Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-3">24/7</div>
                  <div className="text-muted-foreground font-medium text-lg">AI Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;