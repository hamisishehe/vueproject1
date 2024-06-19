import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/default.vue";
import Home from "./views/Home.vue";
import AdminDashboard from "./views/AdminDashboard.vue";
import AdminAddBus from "./views/AdminAddBus.vue";
import AdminAddRoute from "./views/AdminAddRoute.vue";
import AdminViewRoute from './views/AdminViewRoute.vue';
import AdminViewBuses from "./views/AdminViewBuses.vue";
import Register from "./views/Register.vue";
import Default from "./views/default.vue";

const routes = [
    { path: '/', name: "Auth", component: Default },
    // { path: '/login', name: "Auth", component: Default },
    { path: '/register', name: "Register", component: Register },
    {path: "/home", name: "Home", component: Home},
    {path: "/home", name: "Home", component: Home},
    {path: "/admin/adminroute", name: "addroute",  component: AdminAddRoute},
    {path: "/admin/adminbus", name: "addbus", component: AdminAddBus},
    {path: "/admin/dashboard", name: "dashboard", component: AdminDashboard},
    { path: '/admin/viewroute', name: 'ViewRoute', component: AdminViewRoute },
    {path: "/admin/viewbuses", name: "viewbuses", component: AdminViewBuses},

    {path: "/home", name: "Home", component: Home}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;