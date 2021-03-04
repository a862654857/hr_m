import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
			path: '/',
			redirect: '/'+ STATIC_CONFIG.home
    },
		{
      path: '/authApp',
      props: true,
			component: resolve => require(['../components/authApp.vue'], resolve)
		},
    {
      path: "/home",
      component: resolve => require(["../components/page/home.vue"], resolve),
      redirect: '/auditing',
      children: [
        {
          path: "/my",
          component: resolve => require(["../components/my/my.vue"], resolve)
        },
        {
          path: "/apply",
          component: resolve => require(["../components/apply/apply.vue"], resolve)
        },
        {
          path: "/auditing",
          component: resolve => require(["../components/auditing/auditing.vue"], resolve)
        },
        {
          path: "/auditing_detail",
          component: resolve => require(["../components/auditing/auditing_detail"], resolve)
        },
        {
          path: "/apply_consumables",
          component: resolve => require(["../components/apply/apply_consumables"], resolve)
        },
      ]
    }
  ]
});
