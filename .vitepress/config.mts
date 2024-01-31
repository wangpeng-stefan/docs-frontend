import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/docs-frontend/',
    title: "Xiao Nan's Frontend-docs",
    description: "Xiao Nan's Fronted-docs",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {
                text: 'vue',
                items: [
                    {text: '入门', link: '/'},
                    {text: '可视化', link: '/'},
                    {text: '组件化', link: '/'},
                    {text: 'typescript', link: '/'}
                ]
            },
            {
                text: 'react',
                items: [
                    {text: '入门', link: '/'}
                ]
            },
            {
                text: 'node',
                items: [
                    {text: '入门', link: '/'},
                    {text: 'nodeweb开发', link: '/'},
                    {text: '鉴权', link: '/'}
                ]
            },
            {
                text: '前端安全',
                items: [
                    {text: '安全漏洞', link: '/'},
                    {text: 'xss', link: '/'},
                    {text: 'csrf', link: '/'},
                    {text: 'sql注入', link: '/'}
                ]
            },
            {
                text: 'react-native', link: '/'
            },
            {
                text: '工程化', link: '/'
            },
            {
                text: '小程序', link: '/'
            },
            {
                text: 'uni-app', link: '/'
            }
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks:
            [
                {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
            ]
    }
})
