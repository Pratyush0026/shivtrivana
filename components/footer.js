import Link from "next/link"
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#Ffffff]">
      <div className="container px-6 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/images/shiv-logo.svg"
                alt="Shivtrivana Logo"
                width={160}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Connecting exceptional talent with visionary organizations. We don't just fill positions—we build careers
              and shape futures.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">Executive Search</li>
              <li className="text-muted-foreground">Permanent Staffing</li>
              <li className="text-muted-foreground">RPO Solutions</li>
              <li className="text-muted-foreground">Talent Assessment</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
            <p>© {new Date().getFullYear()} Shivtrivana Private Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
