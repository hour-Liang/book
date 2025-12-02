// @ts-ignore
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BookList from '../components/bookList.vue';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            redirect: '/BookList',
            children: [
                {
                    path: '/BookList',
                    name: 'BookList',
                    component: BookList
                }
            ]
        }
    ]
});
export default router;
