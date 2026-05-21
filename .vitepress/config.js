import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SooAPI 使用文档',
  description: '详细介绍 SooAPI 中转服务在 Claude Code、Codex、Gemini 等主流 CLI 中的详细使用方法。',
  srcDir: '.',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'SooAPI 使用文档',
    nav: [
      { text: '使用指南', link: '/docs/register/' },
      { text: 'API 文档', link: '/docs/api/chat-completion' },
      { text: 'SooAPI 官网', link: 'https://sooapi.com', attrs: { target: '_blank' } },
      { text: '服务监控', link: 'https://check.linux.do/group/SooAPI', attrs: { target: '_blank' } },
    ],
    sidebar: {
      '/docs/': [
        {
          text: '快速开始',
          items: [
            { text: '注册与登录', link: '/docs/register/' },
            { text: '查看额度', link: '/docs/quota/' },
            { text: '创建 API Token', link: '/docs/token/' },
            { text: '环境变量配置', link: '/docs/env/' },
          ]
        },
        {
          text: '使用指南',
          items: [
            { text: 'Claude Code', link: '/docs/claude/' },
            { text: 'Codex / claude-code', link: '/docs/codex/' },
            { text: 'Gemini CLI', link: '/docs/gemini/' },
            { text: 'OpenAI SDK', link: '/docs/openai-sdk/' },
          ]
        },
        {
          text: '常见问题',
          items: [
            { text: '疑难解答', link: '/docs/faq/' },
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: 'SooAPI | Copyright © 2026 SooAPI Team',
      copyright: 'Powered by VitePress'
    },
    socialLinks: []
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})