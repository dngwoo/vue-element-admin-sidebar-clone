import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    sidebar: {
      // * +는 숫자형으로 변환을 의미
      opened: Cookies.get("sidebarStatus")
        ? !!+Cookies.get("sidebarStatus")
        : true,
      withoutAnimation: false
    },
    device: "desktop",
    size: Cookies.get("size") || "medium"
  },

  getters: {
    // * resize-handler.js에서 사용되는 this.device와 this.sidebar이다.
    // * getters에서 사용하는 이유는 resize될 때마다 값이 바뀌기 때문에 캐싱해주기 위해서이다.
    device: state => state.device,
    sidebar: state => state.sidebar
  },

  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
      if (state.sidebar.opened) {
        Cookies.set("sidebarStatus", 1);
      } else {
        Cookies.set("sidebarStatus", 0);
      }
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set("sidebarStatus", 0);
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;
    },
    TOGGLE_DEVICE: (state, device) => {
      // * 997px미만이면 mobile, 이상이면 desktop
      state.device = device;
    },
    SET_SIZE: (state, size) => {
      state.size = size;
      Cookies.set("size", size);
    }
  },

  actions: {
    toggleSideBar({ commit }) {
      commit("TOGGLE_SIDEBAR");
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit("CLOSE_SIDEBAR", withoutAnimation);
    },
    toggleDevice({ commit }, device) {
      commit("TOGGLE_DEVICE", device);
    },
    setSize({ commit }, size) {
      commit("SET_SIZE", size);
    }
  }
});

export default store;
