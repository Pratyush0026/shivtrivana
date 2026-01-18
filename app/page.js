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

export const metadata = {
  title: "Shivtrivana - Premier Recruitment & Talent Solutions | Direct Hiring Experts",
  description: "Transform your talent journey with Shivtrivana. Leading recruitment agency specializing in direct hiring across 10+ industries including IT, Healthcare, Manufacturing, and more. 1000+ successful placements.",
  keywords: [
    "recruitment agency",
    "talent acquisition",
    "direct hiring",
    "executive search",
    "IT recruitment",
    "healthcare recruitment",
    "manufacturing recruitment",
    "permanent staffing",
    "RPO solutions",
    "career consulting",
    "talent assessment",
    "recruitment services India"
  ],
  openGraph: {
    title: "Shivtrivana - Premier Recruitment & Talent Solutions",
    description: "Connect exceptional talent with visionary organizations. Specializing in direct hiring across Technology, Healthcare, Manufacturing, and 10+ industries.",
    url: 'https://shivtrivana.com',
    siteName: 'Shivtrivana',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shivtrivana Recruitment Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shivtrivana - Premier Recruitment & Talent Solutions",
    description: "Transform your talent journey. 1000+ successful placements across 10+ industries.",
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shivtrivana",
    "url": "https://shivtrivana.com",
    "logo": "https://shivtrivana.com/logo.png",
    "description": "Premier recruitment and talent solutions company specializing in direct hiring across multiple industries",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"]
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Recruitment and Staffing Services",
    "provider": {
      "@type": "Organization",
      "name": "Shivtrivana"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Recruitment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direct Hiring",
            "description": "Permanent placement services across multiple industries"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Executive Search",
            "description": "C-suite and senior management recruitment"
          }
        }
      ]
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://shivtrivana.com"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />

          <div className="container relative z-10 px-6 py-20 md:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <Award className="h-4 w-4" aria-hidden="true" />
                <span>Trusted by 20+ Leading Companies and growing</span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
                <span className="text-balance inline-block animate-fade-in">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent inline-block leading-[1.3] animate-typing overflow-hidden whitespace-nowrap">
                  Talent Journey
                </span>
              </h1>

              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                We connect exceptional talent with visionary organizations. At Shivtrivana, we don't just fill
                positions—we build careers and shape futures through expert recruitment services.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="group min-w-[200px] text-base">
                  <Link href="/contact" aria-label="Contact us to find talent for your organization">
                    Find Talent
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-[200px] text-base bg-transparent">
                  <Link href="/about" aria-label="Explore job opportunities">Explore Jobs</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        </section>

        <section className="border-y border-border bg-secondary/50 py-16" aria-label="Company achievements">
          <div className="container px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary md:text-5xl" aria-label="Over 1000 successful placements">1000+</div>
                <div className="text-sm text-muted-foreground md:text-base">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary md:text-5xl" aria-label="Over 100 satisfied clients">100%</div>
                <div className="text-sm text-muted-foreground md:text-base">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary md:text-5xl" aria-label="10 industries served">10+</div>
                <div className="text-sm text-muted-foreground md:text-base">Industries Served</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30" aria-labelledby="industries-heading">
          <div className="container px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <Target className="h-4 w-4" aria-hidden="true" />
                <span>Specialized Direct Hiring</span>
              </div>

              <h2 id="industries-heading" className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Direct Hiring <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Industries</span>
              </h2>

              <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                We specialize in direct placement across key industries, connecting top-tier talent with leading organizations through our expert recruitment process
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {directHiringIndustries.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <article
                    key={index}
                    className="group relative overflow-hidden border-2 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1 rounded-lg bg-card"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} aria-hidden="true" />

                    <div className="relative z-10">
                      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 ${industry.iconColor}`} aria-hidden="true">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mb-3 text-xl font-semibold tracking-tight">
                        {industry.title}
                      </h3>

                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {industry.description}
                      </p>

                      <div className="flex flex-wrap gap-2" role="list" aria-label={`Key positions in ${industry.title}`}>
                        {industry.positions.map((position, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs font-medium transition-colors group-hover:bg-primary/20 group-hover:text-primary"
                            role="listitem"
                          >
                            {position}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-lg border-2 border-primary/0 transition-all duration-300 group-hover:border-primary/20" aria-hidden="true" />
                  </article>
                )
              })}
            </div>

            <div className="mt-16 text-center">
              <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 p-8">
                <p className="mb-6 text-lg font-medium text-foreground">
                  Don't see your industry? We have expertise across 10+ sectors
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg">
                    <Link href="/contact" aria-label="Contact us to discuss your recruitment needs">
                      <Users className="mr-2 h-4 w-4" aria-hidden="true" />
                      Discuss Your Needs
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32" aria-labelledby="cta-heading">
          <div className="container px-6">
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 px-8 py-16 md:px-16 md:py-24">
              <div className="relative z-10 mx-auto max-w-3xl text-center">
                <h2 id="cta-heading" className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                  Ready to Find Your <span className="text-primary">Perfect Match?</span>
                </h2>
                <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Whether you're seeking exceptional talent or your next career opportunity, we're here to make meaningful
                  connections happen.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" className="min-w-[180px]">
                    <Link href="/contact" aria-label="Get started with Shivtrivana recruitment services">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="min-w-[180px] bg-transparent">
                    <Link href="/about" aria-label="Learn more about Shivtrivana">Learn More</Link>
                  </Button>
                </div>
              </div>

              <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}