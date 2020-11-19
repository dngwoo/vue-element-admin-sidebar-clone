<template>
  <div>
    <div class="logo">로고</div>
    <el-menu default-active="trend/period" class="el-menu-vertical-demo">
      <sidebar-item></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
// * 웹팩기능을 활용하여 sass의 변수를 js에서 사용 가능
// import variables from "@/styles/variables.scss";
import SidebarItem from "./SidebarItem";
export default {
  components: {
    SidebarItem
  },
  computed: {
    activeMenu() {
      const { meta, path } = this.$route;
      if (meta.activeMenu) {
        // ! 뭔지 모르겠음.
        return meta.activeMenu;
      }
      return path;
    }
  }
};
</script>
