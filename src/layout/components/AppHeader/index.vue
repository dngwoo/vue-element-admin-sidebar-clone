<template>
  <div class="header">
    <div class="header__left-menu">
      <hambuger
        :is-active="sidebar.opened"
        @toggleClick="toggleSideBar"
      ></hambuger>
      <div class="header__menu-item">
        breadcrumb
      </div>
    </div>
    <div class="header__right-menu">
      <div class="header__menu-item">서치</div>
      <div class="header__menu-item">에러</div>
      <div class="header__menu-item">전체크기</div>
    </div>
  </div>
</template>

<script>
import Hambuger from "@/layout/components/AppHeader/Hambuger";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    Hambuger
  },
  computed: {
    ...mapGetters(["sidebar", "device"])
  },
  methods: {
    ...mapMutations(["TOGGLE_SIDEBAR"]),
    toggleSideBar() {
      this.TOGGLE_SIDEBAR(); // sidebar.opened 값을 바꿔주는 mutation
    }
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .header__left-menu,
  .header__right-menu {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .header__menu-item {
    line-height: 50px;
    padding: 0 5px;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>
