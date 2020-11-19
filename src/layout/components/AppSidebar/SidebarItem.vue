<template>
  <el-submenu index="/trend">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>Navigator One</span>
    </template>
    <sidebar-link to="/">
      <el-menu-item index="trend/real-time">
        <sidebar-menu-title
          icon="el-icon-s-tools"
          title="asdasd"
        ></sidebar-menu-title>
      </el-menu-item>
    </sidebar-link>
  </el-submenu>
</template>

<script>
import SidebarLink from "./SidebarLink";
import SidebarMenuTitle from "./SidebarMenuTitle";
export default {
  components: {
    SidebarLink,
    SidebarMenuTitle
  },
  methods: {}
};
</script>

<style></style>
