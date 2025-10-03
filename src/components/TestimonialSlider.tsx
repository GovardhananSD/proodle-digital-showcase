import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp Industries",
    content: "Proodle transformed our entire IT infrastructure. Their expertise and dedication to excellence exceeded all our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, Innovation Labs",
    content: "Working with Proodle has been a game-changer. Their cloud solutions reduced our costs by 40% while improving performance dramatically.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Operations, Global Solutions",
    content: "The team at Proodle is simply outstanding. Their proactive approach and technical expertise make them an invaluable partner.",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gradient">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <Card className="shadow-card border-border/50">
                  <CardContent className="p-8 md:p-12">
                    <Quote className="text-accent mb-6" size={48} />
                    <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-lg mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-background hover:bg-muted border border-border p-3 rounded-full transition-smooth shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-primary" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-background hover:bg-muted border border-border p-3 rounded-full transition-smooth shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-primary" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-smooth ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
