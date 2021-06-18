import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../views/products/Products.vue";
import Product from "../views/products/Product.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/products",
    name: "products",
    component: Products
  },
  {
    path: "/products/new",
    name: "newProduct",
    component: Product
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
