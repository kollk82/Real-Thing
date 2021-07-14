import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "portfolio" */ '../views/Portfolio.vue'
            ),
    },
    {
        path: '/quote',
        name: 'Quote',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "quote" */ '../views/Quote.vue'),
    },
    {
        path: '/Contact',
        name: 'Contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    },
    {
        path: '/services/webdesign',
        name: 'Web-Design',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "webdesign" */ '../views/Webdesign.vue'
            ),
    },
    {
        path: '/services/web-development',
        name: 'Web-Development',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "webdev" */ '../views/Webdev.vue'),
    },
    {
        path: '/services/UX-UI',
        name: 'UX-UI',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "uxui" */ '../views/Uxui.vue'),
    },
    {
        path: '/services/photography',
        name: 'photo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "photohgraphy" */ '../views/Photography.vue'
            ),
    },
    {
        path: '/services/videography',
        name: 'video',

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "videography" */ '../views/Videography.vue'
            ),
    },

    {
        path: '/services/dronography',
        name: 'dron',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "dronography" */ '../views/Dronography.vue'
            ),
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,

    // Fix for not scrolling to top of the page while changing routes

    scrollBehavior(to, from, savedPosition) {
        console.log(savedPosition);
        console.log(to, from);
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 }; //Vue's documentation x:0, y:0 didn't work
        }
    },
});
export default router;
