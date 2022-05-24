import { createRouter, createWebHistory } from "vue-router";

import BooksComponentVue from "@/components/BooksComponent.vue";
import wishlistComponent from "../components/WishlistComponent.vue";
import PageNotFound from "../components/PageNotFound.vue";

const routes = [
    { path: "/", component: BooksComponentVue },
    { path: "/wishlist", component: wishlistComponent },
    {
        path: "/:catchAll(.*)*",
        name: "PageNotFound",
        component: PageNotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
