import { createRouter, createWebHistory } from 'vue-router';

// Import components
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Categories from '../views/Categories.vue';
import Post from '../views/Post.vue';
import Tag from '../views/Tag.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories,
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: Post,
        props: true,
    },
    {
        path: '/tag/:name',
        name: 'Tag',
        component: Tag,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    // Scroll behavior - always scroll to top when navigating to a new page
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
