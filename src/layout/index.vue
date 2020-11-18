<template>
  <div>
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
export default {
  name: "Layout",
  components: {
    AppHeader,
    AppSidebar
  },
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>
