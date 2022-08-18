import { createRouter, createWebHistory } from "vue-router";

import ErrorPage from "../pages/ErrorPage.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Test from "../pages/Test.vue";
import TableStatusComponent from "../components/TableStatusComponent.vue";
import TableUserComponent from "../components/TableUserComponent.vue";
import TableRoleComponent from "../components/TableRoleComponent.vue";
import TableDivideNumberComponent from "../components/TableDivideNumberComponent.vue";
import TableAccountComponent from "../components/TableAccountComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/login", name: "login", component: Login },
    { path: "/register", name: "register", component: Register },
    {
      path: "/",
      component: Test,
      children: [
        { path: "status", name: "status", component: TableStatusComponent },
        { path: "user", name: "user", component: TableUserComponent },
        { path: "role", name: "role", component: TableRoleComponent },
        {
          path: "divideNumber",
          name: "divideNumber",
          component: TableDivideNumberComponent,
        },
        { path: "account", name: "account", component: TableAccountComponent },
      ],
    },
  ],
});

export default router;
