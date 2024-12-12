// micro app router.js
export default [
    {
      path: '/pageone',
      component: () => import('./pages/PageOne.vue'),
    },
    // {
    //   path: '/pagetwo',
    //   component: () => import('./pages/PageTwo.vue'),
    // },
  ];
  