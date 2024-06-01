import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductList from '../components/ProductList.vue';
import CartView from '../components/CartView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: ProductList },
  { path: '/cart', component: CartView }
];

const router = new VueRouter({
  routes
});

export default router;
