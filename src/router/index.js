import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import Checkout from "../views/Checkout.vue";
import FormAdress from "../components/FormAdress.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/checkout/1",
  },
  {
    path: "/checkout",
    name: "check-out",
    component: Checkout,
    children: [
      {
        path: "1",
        name: "1",
        component: FormAdress,
      },
      {
        path: "2",
        name: "2",
        component: () => import("../components/FormShipping.vue"),
      },
      {
        path: "3",
        name: "3",
        component: () => import("../components/FormCheckout.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;