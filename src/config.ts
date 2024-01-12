import type { Site, SocialObjects } from './types'

export const SITE: Site = {
  description: 'Your meta description.',
  name: 'OKLCK Color Shader',
  website: 'https://fentos.template',
}

export const LOCALE = ['en-EN']

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'yourhref.com',
    linkTitle: ` ${SITE.name} on Github`,
  },

  {
    name: 'LinkedIn',
    href: 'yourhref.com',
    linkTitle: `${SITE.name} on LinkedIn`,
  },
  {
    name: 'Mail',
    href: 'mailto:yourmail@gmail.com',
    linkTitle: `Send an email to ${SITE.name}`,
  },
]
