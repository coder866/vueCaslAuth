import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/create-ad',
        name: 'create-ad',
        component: () => import('../views/CreateAdvert.vue')
    },
    {
        path: '/view-ad',
        name: 'view-ad',
        component: () => import('../views/ViewAdvert.vue')
    },
    {
        path: '/ads-list',
        name: 'ads-list',
        component: () => import('../views/AdvertList.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: () => import('../views/NotFound.vue')
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
