// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: {name: 'page', mode: 'in-out'},
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'My Fashion',
          meta: [
            { name: 'description', content: 'My amazing site.' }
          ],
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
          ]
        }
    },
    css:[
        '~/assets/css/main.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
    ],
    
})

