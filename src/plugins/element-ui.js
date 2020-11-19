import Vue from "vue";
import { Menu, MenuItem, Submenu } from "element-ui";

const elementUI = () => {
  Vue.use(Menu);
  Vue.use(MenuItem);
  Vue.use(Submenu);
  Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };
};

export default elementUI;
