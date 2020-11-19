import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/index.scss"; // global css

Vue.config.productionTip = false;
Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
