import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(async (nuxtApp) => {
  const router = useRouter();
  try {
    const { default: microAppRoutes } = await import('microfrontend/Router'); // Dynamically load the routes
    microAppRoutes.forEach((route) => {
      router.addRoute(route);
    });
  } catch (err) {
    console.error('Failed to load micro app routes:', err);
  }

  try {
    const { default: microAppRoutes } = await import('secondMicrofrontend/Router'); // Dynamically load the routes
    microAppRoutes.forEach((route) => {
      router.addRoute(route);
    });
  } catch (err) {
    console.error('Failed to load micro app routes:', err);
  }
});
