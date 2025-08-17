import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Operations Manager",
      company: "TechFlow Inc.",
      content: "IntelliAutomate transformed our document processing workflow. What used to take hours now happens in minutes, and our accuracy has improved dramatically.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "GrowthCorp",
      content: "Their AI chatbot implementation increased our customer satisfaction by 35% while reducing response times. Absolutely phenomenal results!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Sales Director",
      company: "Sales Solutions Ltd.",
      content: "The CRM automation they built for us has revolutionized our lead management. Our conversion rate improved by 28% in just three months.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Don't just take our word for it. See how we've helped businesses transform their operations and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="shadow-medium hover:shadow-premium transition-smooth animate-scale-in border-0 card-premium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-medium">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-display font-bold text-foreground text-lg">{testimonial.name}</div>
                  <div className="text-muted-foreground font-medium">
                    {testimonial.position} at {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;