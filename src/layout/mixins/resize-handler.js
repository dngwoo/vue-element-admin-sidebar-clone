import store from "@/store";

const { body } = document;
const WIDTH = 992;

export default {
  watch: {
    $route() {
      // * watch를 이용하여 route가 바뀔 때 마다 계속 실행된다.

      // * device가 모바일이고 sidebar가 오픈되어있다면 닫는 로직이다.
      // * device와 sidebar는 single file component에서 정의해준 값이다.(getters에서 가져옴)
      if (this.device === "mobile" && this.sidebar.opened) {
        store.dispatch("closeSideBar", { withoutAnimation: false });
      }
    }
  },
  beforeMount() {
    window.addEventListener("resize", this.$_resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.$_resizeHandler);
  },
  mounted() {
    const isMobile = this.$_isMobile();
    if (isMobile) {
      store.dispatch("toggleDevice", "mobile");
      store.dispatch("closeSidebar", { withoutAnimation: true });
    }
  },
  methods: {
    $_isMobile() {
      const { width } = body.getBoundingClientRect(); // body의 너비 구하기
      return width - 1 < WIDTH;
    },
    $_resizeHandler() {
      // * 리사이즈 될 때마다 실행된다.
      if (!document.hidden) {
        const isMobile = this.$_isMobile(); // 모바일 크기인지 체크(997px 미만이면 true를 반환)
        store.dispatch("toggleDevice", isMobile ? "mobile" : "desktop");
        if (isMobile) {
          store.dispatch("closeSideBar", { withoutAnimation: true });
        }
      }
    }
  }
};
