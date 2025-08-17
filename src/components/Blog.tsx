import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI Automation in Small Businesses",
      excerpt: "Discover how AI automation is revolutionizing the way small businesses operate, from customer service to data analysis.",
      author: "Govardhan",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI Strategy",
      image: "/api/placeholder/600/300",
      featured: true,
      slug: "future-ai-automation-small-business"
    },
    {
      title: "Building Intelligent Chatbots: Best Practices",
      excerpt: "Learn the essential techniques and strategies for creating effective AI chatbots that truly understand and help your customers.",
      author: "Ravi",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Development",
      image: "/api/placeholder/600/300",
      featured: true,
      slug: "building-intelligent-chatbots-best-practices"
    },
    {
      title: "Data-Driven Decision Making with AI Analytics",
      excerpt: "Explore how businesses can leverage AI-powered analytics to make smarter decisions and drive growth.",
      author: "Nandani",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Data Science",
      image: "/api/placeholder/600/300",
      featured: false,
      slug: "data-driven-decision-making-ai-analytics"
    },
    {
      title: "Automating Document Processing: A Complete Guide",
      excerpt: "Step-by-step guide to implementing intelligent document processing systems using OCR and AI technologies.",
      author: "Ravi",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Automation",
      image: "/api/placeholder/600/300",
      featured: false,
      slug: "automating-document-processing-guide"
    },
    {
      title: "ROI of AI Implementation: Measuring Success",
      excerpt: "Understanding how to calculate and maximize the return on investment from AI automation initiatives.",
      author: "Govardhan",
      date: "2023-12-20",
      readTime: "5 min read",
      category: "Business",
      image: "/api/placeholder/600/300",
      featured: false,
      slug: "roi-ai-implementation-measuring-success"
    },
    {
      title: "Machine Learning Models in Production",
      excerpt: "Best practices for deploying and maintaining machine learning models in real-world business environments.",
      author: "Nandani",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Machine Learning",
      image: "/api/placeholder/600/300",
      featured: false,
      slug: "machine-learning-models-production"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "AI Strategy": "bg-primary/10 text-primary border-primary/20",
      "Development": "bg-tech-blue/10 text-tech-blue border-tech-blue/20",
      "Data Science": "bg-green-500/10 text-green-600 border-green-500/20",
      "Automation": "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "Business": "bg-purple-500/10 text-purple-600 border-purple-500/20",
      "Machine Learning": "bg-blue-500/10 text-blue-600 border-blue-500/20"
    };
    return colors[category] || "bg-gray-100 text-gray-600 border-gray-200";
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
            Latest Insights & Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and best practices in AI automation from our expert team.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8">Featured Articles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card 
                key={post.slug}
                className="card-premium group hover:shadow-premium transition-smooth animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-tech-blue/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tech-blue/20 flex items-center justify-center">
                    <div className="text-4xl font-display font-bold text-primary/60">
                      {post.category.replace(/\s+/g, '')}
                    </div>
                  </div>
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-8">Recent Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Card 
                key={post.slug}
                className="card-premium group hover:shadow-premium transition-smooth animate-scale-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-tech-blue/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-tech-blue/10 flex items-center justify-center">
                    <div className="text-2xl font-display font-bold text-primary/40">
                      {post.category.substring(0, 2).toUpperCase()}
                    </div>
                  </div>
                  <Badge className={`absolute top-3 left-3 text-xs ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="w-full group">
                    Read Article
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="card-premium max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-display font-bold text-foreground">
                Want to Stay Updated?
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Subscribe to our newsletter for the latest insights on AI automation and business transformation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;