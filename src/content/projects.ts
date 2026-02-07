import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'AI Code Assistant',
    description: 'Built an intelligent code completion tool using transformer models. Supports multiple languages and integrates with popular IDEs.',
    tech: ['Python', 'PyTorch', 'TypeScript', 'VS Code API'],
    github: 'https://github.com/vikram/ai-assistant',
    live: 'https://ai-assistant.demo'
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Developed a high-performance dashboard for monitoring system metrics with WebSocket streaming and custom visualizations.',
    tech: ['Vue 3', 'Node.js', 'WebSocket', 'D3.js'],
    github: 'https://github.com/vikram/analytics-dashboard'
  },
  {
    title: 'Distributed Task Queue',
    description: 'Created a fault-tolerant task processing system handling millions of jobs daily with automatic retry and dead-letter queue support.',
    tech: ['Go', 'Redis', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/vikram/task-queue'
  }
]
