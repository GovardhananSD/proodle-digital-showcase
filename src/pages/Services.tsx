import { useEffect } from "react";
import { Cloud, Shield, Code, Database, Network, Headphones, Server, Smartphone } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  useScrollReveal();

  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Seamless cloud migration, management, and optimization services. We help you leverage AWS, Azure, and Google Cloud for maximum efficiency and cost savings.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat detection, vulnerability assessments, penetration testing, and security policy development to protect your digital assets.",
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your business needs. From web applications to mobile apps, we build scalable, maintainable, and user-friendly solutions.",
    },
    {
      icon: Database,
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with our analytics and business intelligence solutions. Make data-driven decisions with confidence.",
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Design, implementation, and maintenance of robust network infrastructure. Ensure reliable connectivity and optimal performance across your organization.",
    },
    {
      icon: Headphones,
      title: "IT Support & Helpdesk",
      description: "24/7 technical support and helpdesk services. Our experienced team ensures your systems run smoothly with minimal downtime and rapid issue resolution.",
    },
    {
      icon: Server,
      title: "Managed IT Services",
      description: "Complete IT management and monitoring services. Focus on your core business while we handle all your technology needs proactively.",
    },
    {
      icon: Smartphone,
      title: "Digital Transformation",
      description: "Strategic guidance and implementation support for your digital transformation journey. Modernize your business processes and stay competitive.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We begin by understanding your business, challenges, and goals through comprehensive consultation.",
    },
    {
      step: "02",
      title: "Strategy",
      description: "Our experts develop a tailored strategy and roadmap aligned with your objectives and budget.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the plan with precision, keeping you informed throughout the entire process.",
    },
    {
      step: "04",
      title: "Support",
      description: "Ongoing support and optimization ensure your solutions continue to deliver value over time.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Comprehensive IT solutions designed to transform your business and drive sustainable growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gradient">What We Offer</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end IT services to support every aspect of your technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="scroll-reveal" style={{ transitionDelay: `${index * 50}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gradient">Our Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that ensures successful delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative scroll-reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 scroll-reveal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-gradient">Technologies We Work With</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            We leverage industry-leading technologies and platforms
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", 
              "React", "Node.js", "Python", "Java", ".NET",
              "MongoDB", "PostgreSQL", "Redis", "Terraform", "Jenkins"
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-muted px-6 py-3 rounded-lg border border-border/50 hover:border-primary hover:shadow-md transition-smooth scroll-reveal"
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                <p className="font-medium text-foreground">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground scroll-reveal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Let's discuss how our services can help achieve your business objectives
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 transition-smooth">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
