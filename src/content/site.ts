import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Vikram',
  fullName: 'Vikram',
  shortName: 'Vik',
  tagline: 'AI/ML • Full-Stack • Embedded',
  about: 'I\'m a software engineer who thrives on building elegant solutions. I leverage a diverse array of technologies and tools to solve problems at hand. I have worked with many teams, small and large, across the globe to solve some of the most complex challenges in tech.',
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
      description: 'Gemini Vision-powered reverse image search with 85% product matching accuracy',
      tech: ['JavaScript', 'Gemini Vision', 'Chrome APIs']
    },
    {
      title: 'VisionAssist Wearable',
      description: 'Real-time obstacle detection system with 95% accuracy and sub-200ms latency',
      tech: ['Python', 'Raspberry Pi', 'Sensor Fusion']
    }
  ],
  latestReads: [
    {
      title: 'Designing Data-Intensive Applications',
      type: 'book',
      url: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/'
    },
    {
      title: 'The Pragmatic Programmer',
      type: 'book',
      url: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/'
    }
  ],
  resumeUrl: '/VikramThevarResume.pdf'
}
