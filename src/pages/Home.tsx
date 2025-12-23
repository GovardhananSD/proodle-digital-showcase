import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Database, Code, Layers, PenTool, ArrowRight, CheckCircle2 } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Home = () => {
  useScrollReveal();

  const services = [
    {
      icon: GraduationCap,
      title: "Computer Training & Programming",
      description: "Professional training programs and hands-on programming courses to upskill your workforce with the latest technologies.",
    },
    {
      icon: Database,
      title: "Data Processing & Publishing",
      description: "Efficient data processing, transformation, and publishing solutions to streamline your business operations.",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions designed to meet your unique business needs, from web apps to enterprise systems.",
    },
    {
      icon: Layers,
      title: "System Design & Architecture",
      description: "Robust system architecture and design services to build scalable, secure, and high-performance solutions.",
    },
    {
      icon: PenTool,
      title: "Computer Aided Designs",
      description: "Professional CAD services for engineering, manufacturing, and architectural design projects.",
    },
  ];

  const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "15+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Section */}
      <section className="py-20 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gradient">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive IT solutions designed to drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover transition-smooth">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Why Choose Us */}
      <section className="py-20 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Why Choose Proodle?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We combine technical expertise with a deep understanding of business needs to deliver solutions that truly make a difference.
              </p>
              <ul className="space-y-4">
                {[
                  "Experienced team of certified professionals",
                  "Proven track record of successful implementations",
                  "24/7 dedicated support and maintenance",
                  "Cost-effective and scalable solutions",
                  "Latest technology and industry best practices",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-gradient mb-4">15+</div>
                  <p className="text-xl text-foreground/80">Years of Excellence</p>
                  <p className="text-muted-foreground mt-2">in IT Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted scroll-reveal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT solutions can help you achieve your business goals.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-hover transition-smooth text-lg px-10">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
