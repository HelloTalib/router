import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";
import Contact from "./views/Contact.vue";
import Portfolio from "./views/Portfolio.vue";
import UserProfile from "./views/UsersProfile.vue";
import NotFound from "./views/404.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savePosition){
    if(savePosition){
      return savePosition
    }
    if(to.hash){
      return {selector:to.hash}
    }
    return{
      x:0,
      y:0
    }
  },


  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/services",
      name: "services",
      component: Services
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/user/:user_id",
      name: "user",
      component: UserProfile
    },


    // =======================
    //     CHILDREN PATH 
    // =======================



    // {
    //   path: "/user",
    //   children: [{ path: ":user_id" }, { path: ":user_id/edit" }],
    //   name: "user",
    //   component: UserProfile
    // },



    // =======================
    //    NOT FOUND PAGE
    // =======================
    {
      path: "*",
      name: "404",
      component: NotFound
    }
  ]
});
