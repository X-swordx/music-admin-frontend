import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/",
    redirect: "/playlist/list"
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/playlist",
    component: Layout,
    children: [
      {
        path: "list",
        // name: 'List',
        component: () => import("@/views/playlist/list"),
        meta: { title: "歌单管理", icon: "table" }
      },
      {
        path: "edit/:id",
        component: () => import("@/views/playlist/edit"),
        meta: { title: "编辑歌单", icon: "table" },
        hidden: true
      }
    ]
  },
  {
    path: "/swiper",
    component: Layout,
    children: [
      {
        path: "list",
        component: () => import("@/views/swiper/list"),
        meta: { title: "轮播图管理", icon: "example" }
      }
    ]
  },
  {
    path: "/blog",
    component: Layout,
    children: [
      {
        path: "list",
        component: () => import("@/views/blog/list"),
        meta: { title: "博客管理", icon: "tree" }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
