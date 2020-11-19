<template>
  <div>
    <div class="logo">로고</div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
// * 웹팩기능을 활용하여 sass의 변수를 js에서 사용 가능
// import variables from "@/styles/variables.scss";
export default {
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
