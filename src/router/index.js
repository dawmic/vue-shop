import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";
import Form from "../components/Form.vue";
import OrderSummary from "../components/OrderSummary.vue";
import Cart from "../components/Cart.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Everything for your bike",
        component: Main,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,

    },
    {
        path: "/form",
        name: "Form",
        component: Form,
    },
    {
        path: "/form/ordersummary",
        name: "Order Summary",
        component: OrderSummary,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    console.log(to);
    document.title = `Bike24/7 - ${to.name}`; 
    next()
  })
export default router;