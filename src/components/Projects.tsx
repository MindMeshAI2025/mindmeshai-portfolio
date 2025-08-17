import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered CRM Automation",
      description: "Complete customer relationship management system with AI-driven lead scoring and automated follow-ups.",
      image: "/api/placeholder/400/250",
      tags: ["AI", "CRM", "Automation", "Python"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Smart Document Processor",
      description: "Intelligent document scanning and data extraction system using computer vision and NLP.",
      image: "/api/placeholder/400/250",
      tags: ["Computer Vision", "NLP", "OCR", "React"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Chatbot Integration Platform",
      description: "Multi-platform chatbot solution with natural language processing and sentiment analysis.",
      image: "/api/placeholder/400/250",
      tags: ["Chatbot", "NLP", "Integration", "API"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Process Automation Dashboard",
      description: "Real-time monitoring and control dashboard for automated business processes.",
      image: "/api/placeholder/400/250",
      tags: ["Dashboard", "Analytics", "Monitoring", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "AI Data Analytics Suite",
      description: "Comprehensive data analysis platform with predictive modeling and visualization tools.",
      image: "/api/placeholder/400/250",
      tags: ["Data Analytics", "Machine Learning", "Visualization"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Voice Assistant Integration",
      description: "Custom voice assistant for business operations with speech recognition and command processing.",
      image: "/api/placeholder/400/250",
      tags: ["Voice AI", "Speech Recognition", "Integration"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
            Our Projects & Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our successful AI automation implementations that have transformed businesses across various industries.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="card-premium group hover:shadow-premium transition-smooth animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-tech-blue/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tech-blue/20 flex items-center justify-center">
                    <div className="text-4xl font-display font-bold text-primary/60">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Featured</Badge>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Source
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="card-premium group hover:shadow-premium transition-smooth animate-scale-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-tech-blue/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-tech-blue/10 flex items-center justify-center">
                    <div className="text-2xl font-display font-bold text-primary/40">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
