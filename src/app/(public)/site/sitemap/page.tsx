import { ExternalLink, Search } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const sitemapData = [
  {
    title: 'Main Pages',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Services', href: '/services' },
    ],
  },
  {
    title: 'Blog & Content',
    links: [
      {
        name: 'Blog',
        href: '/blog',
        children: [
          { name: 'Technology', href: '/blog/technology' },
          { name: 'Business', href: '/blog/business' },
          { name: 'Design', href: '/blog/design' },
          { name: 'Marketing', href: '/blog/marketing' },
          { name: 'Tutorials', href: '/blog/tutorials' },
        ],
      },
      {
        name: 'News',
        href: '/news',
        children: [
          { name: 'Company News', href: '/news/company' },
          { name: 'Product Updates', href: '/news/products' },
          { name: 'Press Releases', href: '/news/press' },
        ],
      },
      { name: 'Resources', href: '/resources' },
      { name: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    title: 'Products & Shop',
    links: [
      {
        name: 'Products',
        href: '/products',
        children: [
          { name: 'Software', href: '/products/software' },
          { name: 'Hardware', href: '/products/hardware' },
          { name: 'Accessories', href: '/products/accessories' },
        ],
      },
      {
        name: 'Categories',
        href: '/categories',
        children: [
          { name: 'Electronics', href: '/categories/electronics' },
          { name: 'Clothing', href: '/categories/clothing' },
          { name: 'Home & Garden', href: '/categories/home-garden' },
        ],
      },
      { name: 'Cart', href: '/cart' },
      { name: 'Checkout', href: '/checkout' },
      { name: 'Order History', href: '/orders' },
    ],
  },
  {
    title: 'Account & User',
    links: [
      { name: 'Login', href: '/login' },
      { name: 'Register', href: '/register' },
      {
        name: 'Profile',
        href: '/profile',
        children: [
          { name: 'Personal Info', href: '/profile/personal' },
          { name: 'Security', href: '/profile/security' },
          { name: 'Preferences', href: '/profile/preferences' },
        ],
      },
      {
        name: 'Dashboard',
        href: '/dashboard',
        children: [
          { name: 'Overview', href: '/dashboard/overview' },
          { name: 'Analytics', href: '/dashboard/analytics' },
          { name: 'Settings', href: '/dashboard/settings' },
        ],
      },
    ],
  },
  {
    title: 'Support & Help',
    links: [
      {
        name: 'Help Center',
        href: '/help',
        children: [
          { name: 'Getting Started', href: '/help/getting-started' },
          { name: 'Account Help', href: '/help/account' },
          { name: 'Billing', href: '/help/billing' },
          { name: 'Technical Issues', href: '/help/technical' },
        ],
      },
      { name: 'FAQ', href: '/faq' },
      {
        name: 'Documentation',
        href: '/docs',
        children: [
          { name: 'API Reference', href: '/docs/api' },
          { name: 'Guides', href: '/docs/guides' },
          { name: 'Examples', href: '/docs/examples' },
        ],
      },
      { name: 'Support Tickets', href: '/support' },
    ],
  },
  {
    title: 'Legal & Policies',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Disclaimer', href: '/disclaimer' },
      { name: 'GDPR Compliance', href: '/gdpr' },
    ],
  },
]

export default function SitemapPage() {
  const getTotalPages = () => {
    return sitemapData.reduce((total, section) => {
      const sectionTotal = section.links.reduce((sectionSum, link) => {
        return sectionSum + 1 + (link.children?.length || 0)
      }, 0)
      return total + sectionTotal
    }, 0)
  }

  return (
    <div className="">
      <div className="">
        <div className="mb-4 flex items-center gap-3">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Site Map</h1>
            <p className="text-muted-foreground mt-1">
              Complete directory of all pages and sections
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Badge variant="secondary" className="text-xs">
            {getTotalPages()} total pages
          </Badge>

          <Badge variant="outline" className="text-xs">
            Last updated: {new Date().toLocaleDateString()}
          </Badge>
        </div>
      </div>

      <div className="py-8">
        <div className="space-y-8">
          {sitemapData.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-primary border-border border-b pb-2 text-xl font-semibold">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-primary group flex items-center gap-2 py-1 transition-colors"
                    >
                      <ExternalLink className="text-muted-foreground group-hover:text-primary h-3 w-3 transition-colors" />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                    {link.children && (
                      <ul className="border-muted mt-2 ml-6 space-y-2 border-l-2 pl-4">
                        {link.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              href={child.href}
                              className="hover:text-foreground group flex items-center gap-2 py-1 text-sm transition-colors"
                            >
                              <div className="bg-muted-foreground/40 group-hover:bg-primary/60 h-2 w-2 rounded-full transition-colors" />
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                {child.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-8">
          <Separator className="mb-8" />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Need Help Finding Something?
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              {
                "Can't find what you're looking for? Use our search feature or browse by category. "
              }
              {
                "If you still need assistance, don't hesitate to contact our support team."
              }
            </p>
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <Link
                href="/search"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-md px-6 py-2 font-medium transition-colors"
              >
                <Search className="h-4 w-4" />
                Search Site
              </Link>
              <Link
                href="/contact"
                className="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 rounded-md border px-6 py-2 font-medium transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
