import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Briefcase,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
  Building2,
  Laptop,
  Heart,
  ShoppingCart,
  Factory,
  Pill,
  HardHat,
  Wrench,
  Zap,
  Target,
  Building
} from "lucide-react"

export default function Home() {
  // Direct Hiring Industries data
  const directHiringIndustries = [
    {
      icon: Laptop,
      title: "Technology & IT",
      description: "Software engineers, data scientists, cybersecurity experts, and tech leadership",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
      positions: ["Developers", "DevOps", "Product Managers"]
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Medical professionals, healthcare administrators, and clinical specialists",
      color: "from-red-500/20 to-pink-500/20",
      iconColor: "text-red-500",
      positions: ["Doctors", "Nurses", "Healthcare IT"]
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Store managers, supply chain experts, digital commerce specialists",
      color: "from-purple-500/20 to-violet-500/20",
      iconColor: "text-purple-500",
      positions: ["Retail Managers", "Merchandisers", "Operations"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Production managers, quality control, engineering, and operations",
      color: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-500",
      positions: ["Plant Managers", "QA Engineers", "Production"]
    },
    {
      icon: Pill,
      title: "Pharmaceuticals",
      description: "Research scientists, regulatory affairs, medical representatives",
      color: "from-teal-500/20 to-emerald-500/20",
      iconColor: "text-teal-500",
      positions: ["R&D", "Medical Reps", "Regulatory"]
    },
    // {
    //   icon: HardHat,
    //   title: "Construction",
    //   description: "Site engineers, project managers, architects, and safety officers",
    //   color: "from-yellow-500/20 to-orange-500/20",
    //   iconColor: "text-yellow-600",
    //   positions: ["Civil Engineers", "Project Heads", "Safety"]
    // },
    // {
    //   icon: Wrench,
    //   title: "HEMM (Heavy Equipment)",
    //   description: "Equipment operators, maintenance engineers, fleet managers",
    //   color: "from-slate-500/20 to-zinc-500/20",
    //   iconColor: "text-slate-600",
    //   positions: ["Operators", "Technicians", "Fleet Managers"]
    // },
    {
      icon: TrendingUp,
      title: "FMCG & FMCD",
      description: "Sales managers, brand executives, distribution specialists",
      color: "from-green-500/20 to-lime-500/20",
      iconColor: "text-green-500",
      positions: ["Sales", "Brand Management", "Distribution"]
    },
    {
      icon: Building,
      title: "Banking & Finance",
      description: "Financial analysts, relationship managers, compliance officers",
      color: "from-indigo-500/20 to-blue-500/20",
      iconColor: "text-indigo-500",
      positions: ["Analysts", "Managers", "Compliance"]
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Business consultants, strategy advisors, management experts",
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-500",
      positions: ["Consultants", "Analysts", "Advisors"]
    },
    {
      icon: Zap,
      title: "Energy & Utilities",
      description: "Renewable energy experts, grid engineers, project developers",
      color: "from-cyan-500/20 to-teal-500/20",
      iconColor: "text-cyan-600",
      positions: ["Engineers", "Project Managers", "Operations"]
    },
    {
      icon: Target,
      title: "Telecommunications",
      description: "Network engineers, telecom specialists, technical architects",
      color: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-500",
      positions: ["Network Engineers", "Architects", "Support"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />

        <div className="container relative z-10 px-6 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Award className="h-4 w-4" />
              <span>Trusted by 20+ Leading Companies and growing</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
              <span className="text-balance inline-block animate-fade-in ">Transform Your</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent inline-block leading-[1.3] animate-typing overflow-hidden whitespace-nowrap">
                Talent Journey
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              We connect exceptional talent with visionary organizations. At Shivtrivana, we don't just fill
              positions—we build careers and shape futures.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="group min-w-[200px] text-base">
                <Link href="/contact">
                  Find Talent
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[200px] text-base bg-transparent">
                <Link href="/about">Explore Jobs</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-secondary/50 py-16">
        <div className="container px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">1000+</div>
              <div className="text-sm text-muted-foreground md:text-base">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">100+</div>
              <div className="text-sm text-muted-foreground md:text-base">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">20</div>
              <div className="text-sm text-muted-foreground md:text-base">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="container px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Comprehensive recruitment solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group relative overflow-hidden border-2 p-8 transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Briefcase className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Executive Search</h3>
              <p className="leading-relaxed text-muted-foreground">
                Strategic leadership recruitment for C-suite and senior management positions. We identify visionary
                leaders who drive transformation.
              </p>
            </Card>

            <Card className="group relative overflow-hidden border-2 p-8 transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Permanent Staffing</h3>
              <p className="leading-relaxed text-muted-foreground">
                End-to-end hiring solutions for permanent roles across all levels. We match skills, culture, and
                ambition perfectly.
              </p>
            </Card>

            {/* <Card className="group relative overflow-hidden border-2 p-8 transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <TrendingUp className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">FMCG, FMCD Hiring</h3>
              <p className="leading-relaxed text-muted-foreground">
                Flexible staffing for project-based needs and seasonal demands. Access top talent exactly when you need
                them.
              </p>
            </Card> */}

            <Card className="group relative overflow-hidden border-2 p-8 transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Building2 className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">RPO Solutions</h3>
              <p className="leading-relaxed text-muted-foreground">
                Recruitment Process Outsourcing for scalable hiring. We become an extension of your HR team.
              </p>
            </Card>

            <Card className="group relative overflow-hidden border-2 p-8 transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Talent Assessment</h3>
              <p className="leading-relaxed text-muted-foreground">
                Comprehensive evaluation services including psychometric testing, technical assessments, and behavioral
                analysis.
              </p>
            </Card>

            <Card className="group relative overflow-hidden border-2 p-8 transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Career Consulting</h3>
              <p className="leading-relaxed text-muted-foreground">
                Professional guidance for career transitions and growth. We help candidates navigate their professional
                journey.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Direct Hiring Industries Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container px-6">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Target className="h-4 w-4" />
              <span>Specialized Direct Hiring</span>
            </div>

            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Direct Hiring <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Industries</span>
            </h2>

            <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              We specialize in direct placement across key industries, connecting top-tier talent with leading organizations through our expert recruitment process
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {directHiringIndustries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-2 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 ${industry.iconColor}`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-semibold tracking-tight">
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>

                    {/* Position Badges */}
                    <div className="flex flex-wrap gap-2">
                      {industry.positions.map((position, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs font-medium transition-colors group-hover:bg-primary/20 group-hover:text-primary"
                        >
                          {position}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-lg border-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" />
                </Card>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 p-8">
              <p className="mb-6 text-lg font-medium text-foreground">
                Don't see your industry? We have expertise across 20+ sectors
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <Users className="mr-2 h-4 w-4" />
                    Discuss Your Needs
                  </Link>
                </Button>
                {/* <Button asChild variant="outline" size="lg" className="bg-transparent">
                  <Link href="/industries">View All Industries</Link>
                </Button> */}
              </div>
            </div>
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
                Ready to Find Your <span className="text-primary">Perfect Match?</span>
              </h2>
              <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground">
                Whether you're seeking exceptional talent or your next career opportunity, we're here to make meaningful
                connections happen.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="min-w-[180px]">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-[180px] bg-transparent">
                  <Link href="/about">Learn More</Link>
                </Button>
                {/* <Button asChild variant="outline" size="lg" className="min-w-[180px] bg-transparent">
                  <Link href="/services">Services</Link>
                </Button> */}
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