import federation from '@originjs/vite-plugin-federation';

export default defineNuxtConfig({
  // Disable SSR as we're using client-side microfrontends
  ssr: false,

  css: [
    // SCSS file in the project
    '~/assets/scss/styles.scss'
  ],

  vite: {
    plugins: [
      federation({
        remotes: {
          microfrontend: 'http://localhost:3001/remoteEntry.js', // Remote entry URL
          secondMicrofrontend: 'http://localhost:3002/remoteEntry.js',
        },
        shared: {
          vue: {
            singleton: true,
            requiredVersion: false, // Ensure shared Vue compatibility
          },
        },
        styles: {
          injectTo: 'head', // Automatically inject styles into the <head>
        }
      }),
      '~/plugins/microAppRoutes.js', // Register the route synchronization plugin
    ],
    build: {
      target: 'esnext', // Required for module federation
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables/__variables-dir.scss" as *;'
        }
      }
    }
  },

  compatibilityDate: '2024-12-12',
});