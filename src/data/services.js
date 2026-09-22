import { Code2, Share2, Search, TrendingUp, Scissors } from 'lucide-react'

const services = [
  {
    slug: 'web-development',
    bg: '#000000',
    theme: 'dark',
    icon: Code2,
    title: 'Web Development',
    tagline: 'Custom-coded sites and apps, built fast and built right.',
    shade: '#22d3ee',
    span: 'large',
    detail: [
      'No page builders, no bloated templates — every site is hand-coded from scratch so it loads instantly and actually reflects your brand.',
      'Whether it\u2019s a marketing site, a full web app, or something interactive, I build it to scale with modern frameworks and clean, maintainable code.',
    ],
    deliverables: ['Custom design & build', 'Mobile-first, fully responsive', 'Fast load times, real SEO structure'],
  },
  {
    slug: 'video-clipping',
    bg: '#12070a',
    theme: 'dark',
    icon: Scissors,
    title: 'Video Clipping',
    tagline: 'Long-form content cut into scroll-stopping short clips.',
    shade: '#60a5fa',
    span: 'small',
    detail: [
      'Send over your podcasts, streams, or long-form videos and I\u2019ll cut them into short, punchy clips built for how people actually watch — fast hooks, clean captions, no dead air.',
    ],
    deliverables: ['Platform-ready exports (9:16, 1:1, 16:9)', 'Captions & hook-first editing', 'Fast turnaround'],
  },
  {
    slug: 'social-media-management',
    bg: '#ffffff',
    theme: 'light',
    icon: Share2,
    title: 'Social Media Management',
    tagline: 'Consistent posting, engagement, and growth on autopilot.',
    shade: '#2dd4bf',
    span: 'small',
    detail: [
      'A content calendar, consistent posting, and real engagement — so your accounts stay active and growing without eating your whole week.',
    ],
    deliverables: ['Content calendar & scheduling', 'Community engagement', 'Monthly growth reporting'],
  },
  {
    slug: 'lead-generation',
    bg: '#f4efe6',
    theme: 'light',
    icon: TrendingUp,
    title: 'Lead Generation',
    tagline: 'Systems that turn traffic into real, qualified leads.',
    shade: '#a78bfa',
    span: 'medium',
    detail: [
      'Traffic means nothing if it doesn\u2019t convert. I build the funnels, forms, and follow-up systems that turn visitors into actual qualified leads in your inbox.',
    ],
    deliverables: ['Funnel & landing page builds', 'Lead capture & follow-up systems', 'Conversion tracking'],
  },
  {
    slug: 'seo-optimization',
    bg: '#05100c',
    theme: 'dark',
    icon: Search,
    title: 'SEO Optimization',
    tagline: 'Ranking higher, loading faster, getting found.',
    shade: '#38bdf8',
    span: 'small',
    detail: [
      'Technical SEO, fast load times, and clean structure — the fundamentals that actually move rankings, done right from the start.',
    ],
    deliverables: ['Technical SEO audit & fixes', 'Site speed optimization', 'On-page SEO structure'],
  },
]

export default services