<template>
  <div class="bottom-nav-bar">
    <router-link
      tag="div"
      v-for="(item,index) in tab"
      :key="index"
      :to="item.path"
      active-class="sel"
      class="nav-icon-wrapper"
    >
      <span class="nav-icons">
        <i :class="item.pic" aria-hidden="true"></i>
      </span>
      <span class="nav-text">{{item.name}}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: [
        { name: "电影", path: "/movie", pic: "fa fa-life-ring" },
        { name: "影院", path: "/cinema", pic: "fa fa-minus-square-o" },
        { name: "我的", path: "/my", pic: "fa fa-user-o" }
      ]
    };
  },

};
</script>

<style lang="less" scoped>
@import "~style/index.less";

.bottom-nav-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top: 0.5px solid #d8d8d8;
  display: flex;
  justify-content: space-around;
  /* 兼容 iOS >= 11.2 */
  padding-bottom: env(safe-area-inset-bottom);
  z-index: 3;
  .nav-icon-wrapper {
    .w(25);
    height: 48px;
    line-height: 48px;
    position: relative;
    // color: @red;
    text-align: center;
    flex: 1;
    background-color: greenyellow;
    float: left;
    -webkit-box-flex: 1;
    box-sizing: border-box;
    .nav-icons {
      display: block;
      .w(25);
      height: 25px;
      margin: auto;
      margin-top: -6px;
      font-size: @fs-xxxl;
    }
    .nav-text {
      line-height: 12px;
      position: absolute;
      top: 33px;
      left: 0;
      right: 0;
      font-size: @fs-ss;
      color: @696969;
    }
  }
}
</style>