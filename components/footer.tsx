import { MessageCircle, Globe } from 'lucide-react'
import { InstagramIcon, DribbbleIcon } from '@/components/icons'

// NOTE: 'Instagram' and 'Dribbble' used to be imported from lucide-react
// directly. Newer lucide-react versions removed those brand icons, which
// crashed the build. We now use the local InstagramIcon / DribbbleIcon from
// components/icons.tsx instead — see that file for details.

const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
  { icon: DribbbleIcon, label: 'Dribbble', href: 'https://dribbble.com' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/' },
  { icon: Globe, label: 'Website', href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Sidik Adriansyah. All rights reserved.
        </p>
        <div className="flex gap-5">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-neutral-400 transition-colors hover:text-gold"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
