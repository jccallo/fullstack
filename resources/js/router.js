// vue
import Vue from 'vue';

// import vue-router
import VueRouter from 'vue-router';

// vue-router loaded for the application
Vue.use(VueRouter);

// components
import Home from './components/pages/Home.vue';
import Contact from './components/pages/Contact.vue';

// routes
const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
];

// router instance
const router = new VueRouter({
    mode: 'history',
    routes,
});

// export router instance
export default router;
