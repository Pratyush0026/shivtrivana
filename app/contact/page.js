"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus("success")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    })

    // Clear success message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

        <div className="container relative z-10 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Ready to transform your hiring process or find your dream job? Let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-3xl font-bold tracking-tight">
                Contact <span className="text-primary">Information</span>
              </h2>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                We're here to help. Reach out to us through any of these channels, and we'll get back to you within 24
                hours.
              </p>

              <div className="space-y-6">
                <Card className="border-2 p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold">Office Address</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    E1, 4th Floor, F50A-F50C
                    <br />
                    Khanpur Extension
                    <br />
                    South Delhi, New Delhi - 110080
                    <br />
                    India
                  </p>
                </Card>

                {/* <Card className="border-2 p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    +91 9953628758
                    <br />
                  </p>
                </Card> */}

                <Card className="border-2 p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    info@shivtrivana.com
                  </p>
                </Card>

                <Card className="border-2 p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="border-2 p-8 md:p-10">
                <h2 className="mb-6 text-2xl font-bold tracking-tight">
                  Send Us a <span className="text-primary">Message</span>
                </h2>

                {submitStatus === "success" && (
                  <div className="mb-6 rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-sm text-green-600 dark:text-green-400">
                    Thank you for contacting us! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium">
                      Service Interested In <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select a service</option>
                      <option value="executive-search">Executive Search</option>
                      <option value="permanent-staffing">Permanent Staffing</option>
                      <option value="rpo-solutions">RPO Solutions</option>
                      <option value="talent-assessment">Talent Assessment</option>
                      <option value="career-consulting">Career Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16">
        <div className="container px-6">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border shadow-lg">
            <div className="aspect-video w-full bg-secondary/30">
              <img src="/india-delhi-map-office-location-marker.jpg" alt="Office Location Map" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
