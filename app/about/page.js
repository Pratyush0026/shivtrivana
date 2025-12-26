import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Target, Eye, Heart, Lightbulb, Shield, Rocket } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

        <div className="container relative z-10 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              About <span className="text-primary">Shivtrivana</span>
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              We are more than a recruitment agency. We are career architects, talent strategists, and bridge builders
              connecting ambition with opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  Founded with a vision to transform the recruitment landscape, Shivtrivana emerged from a simple
                  belief: exceptional talent and visionary organizations deserve to find each other without barriers.
                </p>
                <p>
                  What started as a small team of passionate recruiters has grown into a trusted partner for over 500
                  leading organizations across India. Our journey has been driven by an unwavering commitment to
                  quality, integrity, and human connection.
                </p>
                <p>
                  Today, we leverage cutting-edge technology, deep industry expertise, and a vast network to deliver
                  recruitment solutions that don't just fill positions—they build legacies.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="aspect-square w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg">
                <img src="/professional-diverse-team-meeting-modern-office.jpg" alt="Shivtrivana Team" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container px-6">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <Card className="border-2 p-8 md:p-10">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">Our Mission</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                To empower organizations with exceptional talent and professionals with transformative career
                opportunities through innovative, ethical, and personalized recruitment solutions. We strive to create
                lasting partnerships built on trust, transparency, and measurable success.
              </p>
            </Card>

            <Card className="border-2 p-8 md:p-10">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">Our Vision</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                To be India's most trusted and innovative talent partner, recognized for setting new standards in
                recruitment excellence. We envision a future where every placement we make contributes to building
                stronger organizations and more fulfilling careers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Integrity</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Unwavering honesty and ethical practices in every interaction
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Commitment to delivering exceptional results that exceed expectations
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Embracing technology and fresh thinking to solve challenges
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Partnership</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Building long-term relationships based on mutual success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Why Choose <span className="text-primary">Shivtrivana</span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              What sets us apart in the recruitment industry
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-6">
            {[
              {
                title: "Deep Industry Expertise",
                description:
                  "Our consultants bring years of specialized experience in their respective industries, ensuring we understand your unique challenges and requirements.",
              },
              {
                title: "Extensive Talent Network",
                description:
                  "Access to a vast database of pre-screened, qualified candidates across all levels and functions, built over years of relationship building.",
              },
              {
                title: "Data-Driven Approach",
                description:
                  "We leverage advanced analytics and AI-powered tools to identify the perfect matches, ensuring faster placements with better cultural and skills fit.",
              },
              {
                title: "Personalized Service",
                description:
                  "Every client receives dedicated attention with customized recruitment strategies tailored to your specific organizational needs and culture.",
              },
              {
                title: "Quality Assurance",
                description:
                  "Rigorous screening processes including multiple interview rounds, background verification, and skill assessments ensure only the best candidates.",
              },
              {
                title: "Post-Placement Support",
                description:
                  "Our commitment doesn't end at placement. We provide ongoing support to ensure smooth integration and long-term success for both parties.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary p-6 transition-all hover:shadow-md">
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Let's Build Your Future Together</h2>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              Experience the Shivtrivana difference. Partner with us for recruitment solutions that deliver real,
              measurable results.
            </p>
            <Button asChild size="lg" className="min-w-[200px]">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
