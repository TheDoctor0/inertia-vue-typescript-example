import Vue from 'vue';
import { InertiaApp } from '@inertiajs/inertia-vue';

// @ts-ignore
Vue.use(InertiaApp);

const app: HTMLElement = document.getElementById('app');

new Vue({
  render: h => {
    return h(InertiaApp, {
      props: {
        initialPage: JSON.parse(app.dataset.page),
        resolveComponent: (name: string) => import(`./pages/${name}`).then((module) => {
          const component = module;

          console.log(component);

          return component.default;
        }),
      },
    });
  },
}).$mount(app);
