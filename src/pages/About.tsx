import { useEffect } from "react";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  useScrollReveal();

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative IT solutions that drive growth, efficiency, and competitive advantage in the digital age.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from technical implementation to customer service.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships based on trust, transparency, and results.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive edge.",
    },
  ];

  const team = [
    {
      name: "David Martinez",
      role: "Chief Executive Officer",
      bio: "20+ years of experience leading technology initiatives for Fortune 500 companies.",
      initial: "D",
    },
    {
      name: "Jennifer Lee",
      role: "Chief Technology Officer",
      bio: "Expert in cloud architecture and digital transformation with a proven track record.",
      initial: "J",
    },
    {
      name: "Robert Chen",
      role: "Head of Cybersecurity",
      bio: "Certified security expert specializing in enterprise-level threat protection.",
      initial: "R",
    },
    {
      name: "Amanda Wilson",
      role: "Director of Client Services",
      bio: "Passionate about delivering exceptional customer experiences and building relationships.",
      initial: "A",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6">About Proodle</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            A trusted partner in digital transformation, delivering innovative IT solutions since 2008
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center text-gradient">Our Story</h2>
            <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
              <p className="text-lg leading-relaxed">
                Founded in 2008, Proodle emerged from a simple vision: to help businesses harness the power of technology to achieve their full potential. What started as a small team of passionate technologists has grown into a comprehensive IT services provider serving clients across diverse industries.
              </p>
              <p className="text-lg leading-relaxed">
                Over the years, we've evolved alongside the rapidly changing technology landscape, continuously updating our expertise and expanding our service offerings. From cloud computing and cybersecurity to custom software development and IT consulting, we've built a reputation for delivering solutions that drive real business results.
              </p>
              <p className="text-lg leading-relaxed">
                Today, with a team of over 150 certified professionals and a portfolio of 500+ successful projects, we remain committed to our founding principle: putting our clients' success at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gradient">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-card transition-smooth scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary-foreground" size={32} />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gradient">Meet Our Leadership Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-card-hover transition-smooth hover:-translate-y-2 scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-primary-foreground">
                    {member.initial}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-accent font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted scroll-reveal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-gradient">Certified Excellence</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Our team holds industry-leading certifications and partnerships
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {["AWS Certified", "Microsoft Partner", "ISO 27001", "Cisco Partner", "CompTIA Certified"].map((cert, index) => (
              <div key={index} className="bg-background px-6 py-4 rounded-lg shadow-md border border-border/50">
                <p className="font-semibold text-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
