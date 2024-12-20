import federation from '@originjs/vite-plugin-federation';

export default defineNuxtConfig({
  ssr: false,

  css: [
    // SCSS file in the project
    '~/assets/scss/styles.scss'
  ],

  vite: {
    plugins: [
      federation({
        name: 'secondMicrofrontend',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './pages/index.vue',
          './Router': './router/index.js', // Expose the router file
          './Sidebar': './components/Sidebar.vue',
        },
      }),
    ],

    build: {
      target: 'esnext', // Ensure ESNext target for features like dynamic imports
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables/__variables-dir.scss" as *;'
        }
      }
    }
  },

  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.plugins.push({
          apply: 'buildEnd',
          enforce: 'post',
        });
      }
    },
    extractCSS: true, // Ensure CSS is extracted into separate files
  },

  compatibilityDate: '2024-12-12',
});