import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Vikram',
  fullName: 'Vikram',
  shortName: 'Vik',
  tagline: 'AI/ML • Full-Stack • Embedded',
  about: 'I\'m a software engineer and CS student at Arizona State University who enjoys building production grade systems across backend infrastructure, ML, and user-facing products. I like working end to end and shipping things that get used.\n\nOutside of tech, I\'m usually listening to music, keeping up with fashion, playing basketball, or working on my car.',
  social: {
    linkedin: 'https://www.linkedin.com/in/vikramthevar/',
    github: 'https://github.com/vikthevar',
    email: 'vikthevar@gmail.com'
  },
  projectHighlights: [
    {
      title: 'F1 Qualifying Predictor',
      description: 'ML model achieving R² = 0.94 on lap time prediction via feature engineering and hyperparameter tuning',
      tech: ['Python', 'scikit-learn', 'GridSearchCV']
    },
    {
      title: 'ReThread Extension',
      description: 'Gemini Vision powered reverse image search with 85% product matching accuracy',
      tech: ['JavaScript', 'Gemini Vision', 'Chrome APIs']
    },
    {
      title: 'VisionAssist Wearable',
      description: 'Real time obstacle detection system with 95% accuracy and sub 200ms latency',
      tech: ['Python', 'Raspberry Pi', 'Sensor Fusion']
    }
  ],
  latestReads: [
    {
      title: 'Crime and Punishment' + ' - curiosity read',
      type: 'book',
      url: 'https://www.goodreads.com/book/show/7144.Crime_and_Punishment'
    },
    {
      title: 'The Nvidia Way: Jensen Huang and the Making of a Tech Giant' + ' - stubbornness and obsession',
      type: 'book',
      url: 'https://www.goodreads.com/book/show/218319936-the-nvidia-way'
    },
    {
      title: 'Nine Tomorrows',
      type: 'book',
      url: 'https://www.goodreads.com/book/show/724666.Nine_Tomorrows' + ' - we can\'t predict the future',
    },
    {
      title: 'Volkswagen Golf GTI MK7: 7 Common Problems and Prevention Tips' + ' - doing my homework',
      type: 'article',
      url: 'https://southsideeuro.com/blog/volkswagen-golf-gti-mk7-common-problems-what-owners-should-know-before-repairs-get-costly/'
    },
  ],
  resumeUrl: '/VikramThevarResume.pdf'
}
