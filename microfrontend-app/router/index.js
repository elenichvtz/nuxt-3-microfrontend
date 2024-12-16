// micro app router.js
export default [
    {
      path: '/micro1/pageone',
      component: () => import('./pages/micro1/PageOne.vue'),
      meta: {
        layout: 'default', // Use the base app's default layout
      },
    },
  ];
  