
import { createWebHistory, createRouter } from 'vue-router';
import HomeApp from './components/HomeApp.vue';
import ProductApp from './components/ProductApp.vue';
import ContactUs from './components/Contact.vue';

const routes = [
  {
    name: 'HomeApp',
    path: '/',
    component: HomeApp,
  },
  {
    name: 'Products',
    path: '/products',
    component: ProductApp,
  },
  {
    name: 'ContactUs',
    path: '/contact',
    component: ContactUs,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router