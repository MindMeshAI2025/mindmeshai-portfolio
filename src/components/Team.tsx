import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, Award, Users, Code } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Govardhan",
      role: "Founder & CEO",
      image: "/api/placeholder/300/300",
      bio: "Visionary leader with 10+ years of experience in AI and automation. Founded MINDMESHAI with a mission to democratize AI for businesses of all sizes.",
      skills: ["Strategic Planning", "Business Development", "AI Strategy", "Leadership"],
      achievements: [
        "Founded 3 successful tech startups",
        "AI Innovation Award 2023",
        "Speaker at 50+ tech conferences"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "govardhan@mindmeshai.com"
      },
      icon: Award,
      gradient: "from-primary to-tech-blue"
    },
    {
      name: "Ravi",
      role: "Senior AI Developer",
      image: "/api/placeholder/300/300",
      bio: "Expert AI developer specializing in machine learning, computer vision, and natural language processing. Passionate about creating intelligent solutions.",
      skills: ["Machine Learning", "Python", "TensorFlow", "Computer Vision", "NLP"],
      achievements: [
        "5+ years in AI development",
        "Published 15+ research papers",
        "Led 20+ successful AI projects"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ravi@mindmeshai.com"
      },
      icon: Code,
      gradient: "from-tech-blue to-primary"
    },
    {
      name: "Nandani",
      role: "AI Developer & Data Scientist",
      image: "/api/placeholder/300/300",
      bio: "Data scientist and AI developer with expertise in predictive modeling and automation systems. Focuses on translating complex data into actionable insights.",
      skills: ["Data Science", "Python", "Deep Learning", "Analytics", "Automation"],
      achievements: [
        "4+ years in data science",
        "Certified in Advanced Analytics",
        "Optimized 30+ business processes"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "nandani@mindmeshai.com"
      },
      icon: Users,
      gradient: "from-primary/80 to-tech-blue/80"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The brilliant minds behind MINDMESHAI's innovative AI automation solutions. 
            Our diverse team combines deep technical expertise with business acumen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="card-premium hover:shadow-premium transition-smooth animate-scale-in group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center relative">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-5 group-hover:opacity-10 transition-smooth`} />
                
                {/* Profile Image Placeholder */}
                <div className="relative mx-auto mb-4">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.gradient} p-1`}>
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <member.icon className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                  {member.role}
                </Badge>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {member.bio}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Skills */}
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-3">Core Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Social Links */}
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-center gap-3">
                    <Button size="sm" variant="outline" className="p-2">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="p-2"
                      onClick={() => window.location.href = `mailto:${member.social.email}`}
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "15+", label: "Years Combined Experience", delay: "0s" },
            { number: "100+", label: "Projects Delivered", delay: "0.1s" },
            { number: "50+", label: "Happy Clients", delay: "0.2s" },
            { number: "24/7", label: "Support Available", delay: "0.3s" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: stat.delay }}
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;