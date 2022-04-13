import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";
import Form from "../components/Form.vue";
import OrderSummary from "../components/OrderSummary.vue";
import Cart from "../components/Cart.vue";
import ProductDetails from "../components/ProductDetails.vue";

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
        path: "/product/:title",
        name: "product",
        component: ProductDetails,
        props: true,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    console.log(to);
    if(to.params.title){
        document.title = `Bike24/7 - ${to.params.title}`
    }
    else{
        document.title = `Bike24/7 - ${to.name}`;  
    }
   
    next()
  })
export default router;