import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight,
  Briefcase, 
  Users, 
  CheckCircle2, 
  Building2,
  Award,
  Target,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  Search,
  FileCheck,
  UsersRound,
  GraduationCap,
  Lightbulb,
  BarChart,
  Brain,
  Trophy,
  Handshake,
  LineChart,
  UserCheck,
  Rocket,
  ClipboardCheck
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "executive-search",
      icon: Briefcase,
      title: "Executive Search",
      tagline: "Strategic leadership recruitment for transformational success",
      shortDesc: "Strategic leadership recruitment for C-suite and senior management positions. We identify visionary leaders who drive transformation.",
      fullDesc: "Our Executive Search service is designed to identify and attract transformational leaders who can drive your organization forward. We understand that leadership hiring is critical to your company's success, and we take a consultative, discreet approach to finding the perfect match.",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
      features: [
        "C-Suite and Board-level placements",
        "Confidential search process",
        "Comprehensive market mapping",
        "Leadership assessment and profiling",
        "Succession planning support",
        "Industry-specific expertise"
      ],
      benefits: [
        { title: "Access to Passive Talent", desc: "Reach executives not actively job-seeking but open to the right opportunity" },
        { title: "Reduced Time-to-Hire", desc: "Streamlined process for critical leadership positions" },
        { title: "Cultural Fit Analysis", desc: "Ensuring long-term success through comprehensive compatibility assessment" },
        { title: "Discrete Headhunting", desc: "Confidential approach for sensitive executive placements" }
      ],
      process: [
        { step: "Discovery", desc: "Deep dive into your organizational culture, challenges, and leadership needs", icon: Search },
        { step: "Market Research", desc: "Comprehensive mapping of potential candidates across industries", icon: Target },
        { step: "Outreach", desc: "Confidential approach to top-tier executives and rising stars", icon: UsersRound },
        { step: "Assessment", desc: "Rigorous evaluation including competency and cultural fit analysis", icon: ClipboardCheck },
        { step: "Presentation", desc: "Detailed candidate presentations with comprehensive insights", icon: FileCheck },
        { step: "Onboarding Support", desc: "Guidance through offer negotiation and smooth transition", icon: Handshake }
      ]
    },
    {
      id: "permanent-staffing",
      icon: Users,
      title: "Permanent Staffing",
      tagline: "Building teams that last with the right talent",
      shortDesc: "End-to-end hiring solutions for permanent roles across all levels. We match skills, culture, and ambition perfectly.",
      fullDesc: "Our Permanent Staffing service provides comprehensive recruitment solutions for organizations looking to build their teams with top talent. We go beyond resume matching to ensure every placement is a perfect fit in terms of skills, culture, and career aspirations.",
      color: "from-purple-500/20 to-violet-500/20",
      iconColor: "text-purple-500",
      features: [
        "Multi-level recruitment (entry to senior)",
        "Industry-specific talent pools",
        "Advanced screening and vetting",
        "Skills and behavioral assessments",
        "Background verification",
        "Replacement guarantee"
      ],
      benefits: [
        { title: "Pre-Qualified Candidates", desc: "Access to thoroughly vetted, ready-to-hire professionals" },
        { title: "Faster Hiring Cycles", desc: "Reduce time-to-fill while maintaining quality standards" },
        { title: "Cost Efficiency", desc: "Lower hiring costs and reduced risk of bad hires" },
        { title: "Long-Term Retention", desc: "Focus on cultural fit and career alignment for lasting placements" }
      ],
      process: [
        { step: "Requirements Gathering", desc: "Understand role specifics, team dynamics, and success criteria", icon: ClipboardCheck },
        { step: "Talent Sourcing", desc: "Multi-channel approach including job boards, referrals, and our database", icon: Search },
        { step: "Screening & Assessment", desc: "Comprehensive evaluation of skills, experience, and cultural fit", icon: UserCheck },
        { step: "Interview Coordination", desc: "Manage scheduling and facilitate smooth interview process", icon: Users },
        { step: "Offer Management", desc: "Support through negotiation and acceptance", icon: Handshake },
        { step: "Post-Placement Support", desc: "Follow-up to ensure successful integration and satisfaction", icon: CheckCircle2 }
      ]
    },
    {
      id: "rpo-solutions",
      icon: Building2,
      title: "RPO Solutions",
      tagline: "Your extended recruitment team for scalable growth",
      shortDesc: "Recruitment Process Outsourcing for scalable hiring. We become an extension of your HR team.",
      fullDesc: "Our RPO Solutions transform your recruitment function into a strategic advantage. We integrate seamlessly with your organization, bringing expertise, technology, and efficiency to scale your hiring operations while reducing costs and improving quality of hire.",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
      features: [
        "Full-cycle recruitment management",
        "Dedicated recruitment team",
        "ATS and recruitment technology",
        "Employer branding support",
        "Analytics and reporting",
        "Scalable solutions (project-based or ongoing)"
      ],
      benefits: [
        { title: "Cost Reduction", desc: "Lower cost-per-hire through optimized processes and economies of scale" },
        { title: "Scalability", desc: "Flex up or down based on your hiring needs without overhead" },
        { title: "Quality Improvement", desc: "Better candidate quality through specialized expertise and tools" },
        { title: "Strategic Partnership", desc: "Become a true extension of your HR and business teams" }
      ],
      process: [
        { step: "Needs Analysis", desc: "Comprehensive assessment of current recruitment challenges and goals", icon: Target },
        { step: "Solution Design", desc: "Customized RPO model tailored to your organization", icon: Lightbulb },
        { step: "Team Integration", desc: "Seamless onboarding of dedicated recruitment specialists", icon: UsersRound },
        { step: "Process Implementation", desc: "Deploy technology, workflows, and best practices", icon: Zap },
        { step: "Continuous Optimization", desc: "Regular review and improvement of recruitment metrics", icon: TrendingUp },
        { step: "Strategic Advisory", desc: "Ongoing consultation on talent strategy and market insights", icon: BarChart }
      ]
    },
    {
      id: "talent-assessment",
      icon: CheckCircle2,
      title: "Talent Assessment",
      tagline: "Data-driven insights for smarter hiring decisions",
      shortDesc: "Comprehensive evaluation services including psychometric testing, technical assessments, and behavioral analysis.",
      fullDesc: "Our Talent Assessment services provide scientific, objective evaluation of candidates to help you make informed hiring decisions. We combine psychometric testing, technical evaluations, and behavioral analysis to give you a complete picture of each candidate's potential.",
      color: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-500",
      features: [
        "Psychometric and personality testing",
        "Technical skills assessments",
        "Cognitive ability testing",
        "Behavioral interviews",
        "Leadership potential evaluation",
        "Custom assessment design"
      ],
      benefits: [
        { title: "Objective Evaluation", desc: "Remove bias with data-driven candidate assessment" },
        { title: "Predictive Accuracy", desc: "Better predict job performance and cultural fit" },
        { title: "Reduced Turnover", desc: "Identify candidates likely to succeed and stay long-term" },
        { title: "Development Insights", desc: "Gain valuable data for employee development and succession planning" }
      ],
      process: [
        { step: "Assessment Design", desc: "Select or customize tests based on role requirements", icon: Target },
        { step: "Candidate Testing", desc: "Administer assessments through our secure platform", icon: ClipboardCheck },
        { step: "Results Analysis", desc: "Expert interpretation of test results and data", icon: Brain },
        { step: "Comprehensive Reports", desc: "Detailed candidate profiles with actionable insights", icon: FileCheck },
        { step: "Interview Guidance", desc: "Recommendations for targeted interview questions", icon: Lightbulb },
        { step: "Benchmarking", desc: "Compare candidates against role-specific success profiles", icon: BarChart }
      ]
    },
    {
      id: "career-consulting",
      icon: Award,
      title: "Career Consulting",
      tagline: "Empowering professionals to achieve their career goals",
      shortDesc: "Professional guidance for career transitions and growth. We help candidates navigate their professional journey.",
      fullDesc: "Our Career Consulting service empowers professionals at every stage of their career journey. Whether you're seeking a new opportunity, planning a career transition, or aiming for the next level, we provide personalized guidance, market insights, and strategic support.",
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-500",
      features: [
        "Career strategy development",
        "Resume and LinkedIn optimization",
        "Interview coaching and preparation",
        "Salary negotiation guidance",
        "Personal branding support",
        "Market insights and trend analysis"
      ],
      benefits: [
        { title: "Strategic Direction", desc: "Clear career roadmap aligned with your goals and market opportunities" },
        { title: "Market Positioning", desc: "Stand out with optimized professional presence and personal brand" },
        { title: "Confidence Building", desc: "Interview preparation that ensures you present your best self" },
        { title: "Better Offers", desc: "Negotiation support to maximize compensation and benefits" }
      ],
      process: [
        { step: "Career Assessment", desc: "Evaluate skills, experience, goals, and market position", icon: Search },
        { step: "Strategy Development", desc: "Create personalized career plan and job search strategy", icon: Target },
        { step: "Profile Optimization", desc: "Enhance resume, LinkedIn, and professional materials", icon: FileCheck },
        { step: "Market Preparation", desc: "Interview coaching and employer research", icon: GraduationCap },
        { step: "Opportunity Matching", desc: "Connect with relevant roles aligned to your goals", icon: Handshake },
        { step: "Ongoing Support", desc: "Continued guidance through interviews, offers, and transitions", icon: Rocket }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />

        <div className="container relative z-10 px-6 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Award className="h-4 w-4" />
              <span>Comprehensive Recruitment Solutions</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-[1.2] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              <span className="text-balance">Our</span>{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-primary inline-block leading-[1.3]">
                Services
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Tailored recruitment solutions designed to meet your unique hiring challenges and career aspirations
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="group min-w-[200px] text-base">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[200px] text-base bg-transparent">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
      </section>

      {/* Services Overview Grid */}
      <section className="py-24 md:py-32">
        <div className="container px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              What We <span className="text-primary">Offer</span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Comprehensive recruitment solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card 
                  key={service.id}
                  className="group relative overflow-hidden border-2 p-8 transition-all hover:border-primary/50 hover:shadow-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                  
                  <div className="relative z-10">
                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 ${service.iconColor}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold">{service.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {service.shortDesc}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      {/* {services.map((service, index) => {
        const Icon = service.icon
        const isEven = index % 2 === 0
        
        return (
          <section 
            key={service.id}
            className={`py-24 md:py-32 ${isEven ? 'bg-secondary/30' : 'bg-background'}`}
          >
            <div className="container px-6">
              <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                  <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} ${service.iconColor}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                    {service.tagline}
                  </p>
                </div>

                <div className="mb-16">
                  <Card className="border-2 p-8 md:p-10">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {service.fullDesc}
                    </p>
                  </Card>
                </div>

                <div className="mb-16 grid gap-8 lg:grid-cols-2">
                  <Card className="border-2 p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold">Key Features</h3>
                    </div>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="border-2 p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Trophy className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold">Benefits</h3>
                    </div>
                    <div className="space-y-6">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx}>
                          <h4 className="mb-2 font-semibold text-foreground">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                <div>
                  <div className="mb-8 text-center">
                    <h3 className="mb-2 text-3xl font-bold">Our Process</h3>
                    <p className="text-muted-foreground">How we deliver results, step by step</p>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {service.process.map((step, idx) => {
                      const StepIcon = step.icon
                      return (
                        <Card key={idx} className="group relative overflow-hidden border-2 p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                          <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                              {idx + 1}
                            </div>
                            <StepIcon className="h-5 w-5 text-primary" />
                          </div>
                          <h4 className="mb-2 text-lg font-semibold">{step.step}</h4>
                          <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })} */}

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container px-6">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              What Makes <span className="text-primary">Shivtrivana</span> Different
            </h2>
            <p className="text-lg text-muted-foreground">
              What sets us apart in the recruitment industry
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 p-8 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Industry Expertise</h3>
              <p className="text-muted-foreground">
                Deep knowledge across 20+ industries with specialized recruiters for each sector
              </p>
            </Card>

            <Card className="border-2 p-8 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Speed & Quality</h3>
              <p className="text-muted-foreground">
                Fast turnaround times without compromising on candidate quality or cultural fit
              </p>
            </Card>

            <Card className="border-2 p-8 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Trusted Partner</h3>
              <p className="text-muted-foreground">
                1000+ successful placements with 100+ satisfied clients across diverse organizations
              </p>
            </Card>

            <Card className="border-2 p-8 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Brain className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Data-Driven</h3>
              <p className="text-muted-foreground">
                Advanced assessment tools and analytics for objective, informed hiring decisions
              </p>
            </Card>

            <Card className="border-2 p-8 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Handshake className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Personalized Service</h3>
              <p className="text-muted-foreground">
                Dedicated account management and customized solutions for your unique needs
              </p>
            </Card>

            <Card className="border-2 p-8 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <LineChart className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Long-Term Focus</h3>
              <p className="text-muted-foreground">
                Building lasting relationships, not just filling positions—your success is ours
              </p>
            </Card>
          </div>
        </div>
      </section>

         {/* Industries Section */}
      <section className="bg-secondary/30 py-24">
        <div className="container px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Deep expertise across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Technology & IT",
              "Healthcare",
              "Finance & Banking",
              "Manufacturing",
              "Retail & E-commerce",
              "Pharmaceuticals",
              "Consulting",
              "Telecommunications",
              "Energy & Utilities",
              "Education",
              "Real Estate",
              "Hospitality",
              // "HEMM",
              // "Construction",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-lg border border-border bg-background p-4 text-center transition-all hover:border-primary/50 hover:shadow-md"
              >
                <span className="text-sm font-medium md:text-base">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container px-6">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 px-8 py-16 md:px-16 md:py-24">
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Ready to Transform Your <span className="text-primary">Hiring Process?</span>
              </h2>
              <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground">
                Let's discuss how our services can help you find the perfect talent or advance your career
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="min-w-[200px]">
                  <Link href="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-[200px] bg-transparent">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  )
}