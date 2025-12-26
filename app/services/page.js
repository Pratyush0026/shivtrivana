"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
  Building2,
  Target,
  Zap,
  Globe,
  Shield,
  Clock,
  MessageSquare,
  ArrowRight,
  Sparkles,
  BarChart3,
  UserCheck,
  FileCheck,
  Rocket,
  Search,
  Heart
} from "lucide-react"

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: Search,
      title: "Executive Search",
      subtitle: "Leadership Excellence",
      description: "Strategic leadership recruitment for C-suite and senior management positions. We identify visionary leaders who drive transformation and deliver results.",
      features: [
        "C-Suite & VP Level Placement",
        "Board Member Recruitment",
        "Succession Planning",
        "Leadership Assessment",
        "Confidential Search"
      ],
      color: "from-violet-500 via-purple-500 to-fuchsia-500",
      bgGradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
      industries: ["Technology", "Finance", "Healthcare", "Manufacturing"],
      stats: { placements: "500+", success: "95%", time: "45 days" }
    },
    {
      icon: Users,
      title: "Permanent Staffing",
      subtitle: "Build Your Dream Team",
      description: "End-to-end hiring solutions for permanent roles across all levels. We match skills, culture, and ambition to create perfect organizational fit.",
      features: [
        "Full-Cycle Recruitment",
        "Cultural Fit Assessment",
        "Skills Validation",
        "Background Verification",
        "Onboarding Support"
      ],
      color: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
      industries: ["IT Services", "Retail", "FMCG", "Consulting"],
      stats: { placements: "2000+", success: "92%", time: "30 days" }
    },
    {
      icon: TrendingUp,
      title: "FMCG & FMCD Hiring",
      subtitle: "Consumer Goods Specialists",
      description: "Specialized recruitment for Fast-Moving Consumer Goods and Fast-Moving Consumer Durables sectors with deep industry expertise.",
      features: [
        "Sales & Distribution",
        "Brand Management",
        "Supply Chain Experts",
        "Trade Marketing",
        "Regional Coverage"
      ],
      color: "from-emerald-500 via-green-500 to-lime-500",
      bgGradient: "from-emerald-500/10 via-green-500/10 to-lime-500/10",
      industries: ["FMCG", "FMCD", "Retail", "Distribution"],
      stats: { placements: "1500+", success: "94%", time: "25 days" }
    },
    {
      icon: Building2,
      title: "RPO Solutions",
      subtitle: "Recruitment Process Outsourcing",
      description: "Comprehensive recruitment outsourcing that scales with your needs. We become an extension of your HR team, delivering consistent quality.",
      features: [
        "Dedicated Recruitment Team",
        "Scalable Solutions",
        "Technology Integration",
        "Analytics & Reporting",
        "Cost Optimization"
      ],
      color: "from-orange-500 via-amber-500 to-yellow-500",
      bgGradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
      industries: ["IT/ITES", "Banking", "E-commerce", "Pharma"],
      stats: { placements: "5000+", success: "96%", time: "15 days" }
    },
    {
      icon: CheckCircle2,
      title: "Talent Assessment",
      subtitle: "Scientific Evaluation",
      description: "Comprehensive evaluation services using psychometric testing, technical assessments, and behavioral analysis to ensure optimal hiring decisions.",
      features: [
        "Psychometric Testing",
        "Technical Assessments",
        "Behavioral Interviews",
        "Competency Mapping",
        "360-Degree Feedback"
      ],
      color: "from-pink-500 via-rose-500 to-red-500",
      bgGradient: "from-pink-500/10 via-rose-500/10 to-red-500/10",
      industries: ["All Sectors", "Custom Solutions"],
      stats: { assessments: "10K+", accuracy: "98%", time: "3-5 days" }
    },
    {
      icon: Award,
      title: "Career Consulting",
      subtitle: "Professional Growth Partners",
      description: "Expert guidance for career transitions and professional development. We help candidates navigate their journey to success.",
      features: [
        "Career Path Planning",
        "Resume Enhancement",
        "Interview Preparation",
        "Salary Negotiation",
        "Personal Branding"
      ],
      color: "from-indigo-500 via-blue-500 to-cyan-500",
      bgGradient: "from-indigo-500/10 via-blue-500/10 to-cyan-500/10",
      industries: ["Individual Professionals", "Career Transition"],
      stats: { clients: "3000+", satisfaction: "97%", placement: "85%" }
    }
  ]

  const whyChooseUs = [
    {
      icon: Target,
      title: "Industry Expertise",
      description: "20+ years of specialized recruitment across 20+ industries"
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Average placement time of 25-45 days with quality assured"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "90-day replacement guarantee for all permanent placements"
    },
    {
      icon: Globe,
      title: "Pan-India Presence",
      description: "Network across major cities with local market insights"
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "Advanced analytics and AI-powered candidate matching"
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Dedicated account managers and personalized service"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Deep dive into your needs, culture, and expectations",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Talent Sourcing",
      description: "Multi-channel search using our extensive network",
      icon: Search
    },
    {
      step: "03",
      title: "Screening & Assessment",
      description: "Rigorous evaluation of technical and cultural fit",
      icon: UserCheck
    },
    {
      step: "04",
      title: "Interview Coordination",
      description: "Seamless scheduling and candidate preparation",
      icon: Clock
    },
    {
      step: "05",
      title: "Offer Management",
      description: "Negotiation support and smooth onboarding",
      icon: FileCheck
    },
    {
      step: "06",
      title: "Post-Placement Support",
      description: "Follow-up and integration assistance",
      icon: Rocket
    }
  ]

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container relative z-10 px-6 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white animate-fade-in">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>Transforming Recruitment Excellence</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl animate-fade-in-up">
              <span className="text-balance">Our </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Services
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl animate-fade-in-up animation-delay-200">
              Comprehensive recruitment solutions designed to connect exceptional talent with visionary organizations. 
              Your success is our mission.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
              <Button asChild size="lg" className="group min-w-[200px] text-base bg-white text-slate-900 hover:bg-white/90">
                <Link href="#services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[200px] text-base border-white/30 text-black hover:bg-white/10">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto animate-scroll" />
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-6">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <Badge className="mb-6 text-sm px-4 py-2">
              <Briefcase className="h-3 w-3 mr-2" />
              Our Core Services
            </Badge>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Tailored <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from our comprehensive suite of recruitment services designed for modern businesses
            </p>
          </div>

          {/* Interactive Service Cards */}
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = activeService === index
              
              return (
                <Card
                  key={index}
                  onMouseEnter={() => setActiveService(index)}
                  className={`group relative overflow-hidden border-2 p-8 transition-all duration-500 cursor-pointer ${
                    isActive ? 'border-primary shadow-2xl scale-[1.02]' : 'border-border hover:border-primary/50'
                  }`}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'group-hover:opacity-50'
                  }`} />
                  
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 transition-opacity duration-500 ${
                    isActive ? 'opacity-20' : ''
                  }`} />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-6 flex items-start justify-between">
                      <div>
                        <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transition-transform duration-500 ${
                          isActive ? 'scale-110 rotate-3' : 'group-hover:scale-105'
                        }`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">{service.subtitle}</p>
                        <h3 className="text-3xl font-bold tracking-tight">{service.title}</h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6 space-y-2">
                      {service.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className={`flex items-center gap-2 text-sm transition-all duration-300 ${
                            isActive ? 'translate-x-2' : ''
                          }`}
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${
                            isActive ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="mb-6 grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                      {Object.entries(service.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Industries */}
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      asChild 
                      className={`mt-6 w-full transition-all duration-300 ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                      }`}
                    >
                      <Link href="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container px-6 relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge className="mb-6 text-sm px-4 py-2">
              <Award className="h-3 w-3 mr-2" />
              Why Shivtrivana
            </Badge>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Your <span className="text-primary">Trusted Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience the difference with our proven track record and commitment to excellence
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-2 p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 transition-transform duration-500 group-hover:translate-x-8 group-hover:-translate-y-8" />
                  
                  <div className="relative">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/10">
        <div className="container px-6">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <Badge className="mb-6 text-sm px-4 py-2">
              <Rocket className="h-3 w-3 mr-2" />
              Our Process
            </Badge>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              How We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven six-step methodology that ensures quality placements every time
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary md:left-1/2" />

            <div className="space-y-12">
              {process.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0
                
                return (
                  <div
                    key={index}
                    className={`relative flex items-center gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Step Number Badge */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 animate-ping-slow">
                          <div className="h-16 w-16 rounded-full bg-primary/20" />
                        </div>
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-accent text-white font-bold text-lg shadow-lg">
                          {step.step}
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-24 md:pl-0`}>
                      <Card className={`group inline-block p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                        isEven ? 'md:ml-auto' : ''
                      }`}>
                        <div className={`flex items-start gap-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <div className="flex-shrink-0">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                              <Icon className="h-6 w-6" />
                            </div>
                          </div>
                          <div className={isEven ? 'md:text-right' : ''}>
                            <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden md:block flex-1" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
        
        <div className="container px-6 relative z-10">
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 px-8 py-16 md:px-16 md:py-24">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <Sparkles className="h-12 w-12 text-cyan-400 mx-auto mb-6 animate-pulse" />
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Hiring Process?</span>
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-white/80">
                Let's discuss how our services can help you build exceptional teams and achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="min-w-[200px] bg-white text-slate-900 hover:bg-white/90">
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-[200px] border-white/30 text-black hover:bg-white/10">
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations CSS */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}