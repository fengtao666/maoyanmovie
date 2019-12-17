<template>
  <div id="app">
    <!-- <navbar></navbar> -->
    <!-- <movie></movie> -->
    <!-- <cinema></cinema> -->
    <bottom-nav-bar></bottom-nav-bar>
    <!-- 路由切换 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Cinema from "pages/Cinema.vue";
import Movie from "pages/Movie.vue";
import My from "pages/My.vue";
import BottomNavBar from "components/bottomNavBar.vue";
export default {
  components: { Cinema, Movie, My, BottomNavBar }
};
</script>

<style lang="less">
</style>
