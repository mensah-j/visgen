import { defineConfig } from 'vite';
import components from 'unplugin-vue-components/vite';
import iconResolver from 'unplugin-icons/resolver';
import icons from 'unplugin-icons/vite';
import fonts from 'unplugin-fonts/vite';
import vueRouter from 'unplugin-vue-router/vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    components({
      resolvers: [iconResolver({ prefix: 'icon' })]
    }),
    icons(),
    fonts({
      google: {
        preconnect: true,

        display: 'block',
        injectTo: 'head-prepend',

        families: [
          'Source Sans Pro',
          {
            name: 'Roboto',
            styles: 'ital,wght@0,400;1,200',
            defer: true
          }
        ]
      }
    }),
    vueRouter(),
    vue()
  ]
});
