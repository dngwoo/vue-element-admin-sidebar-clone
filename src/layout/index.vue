<template>
  <div class="app-wrapper" :class="classObj">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view :key="key"></router-view>
        </keep-alive>
      </transition>
    </section>
  </div>
</template>

<script>
import AppHeader from "@/layout/components/AppHeader";
import AppSidebar from "@/layout/components/AppSidebar";
import ResizeMixin from "./mixins/resize-handler";
import { mapGetters } from "vuex";
export default {
  name: "Layout",
  components: {
    AppHeader,
    AppSidebar
  },
  mixins: [ResizeMixin], // * 처음 마운트될 때 실행, 리사이즈 될때 실행, 라우트 변경 될때 실행(watch)
  computed: {
    key() {
      return this.$route.path;
    },
    ...mapGetters(["sidebar", "device"]),
    classObj() {
      // 값이 true인 애들만 class이름으로 추가 된다.
      // ex) class="app-wrapper hideSidebar withoutAnimation mobile"
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  }
};
</script>

<style lang="scss">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.opendSidebar {
    position: fixed;
    top: 0;
  }
}
</style>
