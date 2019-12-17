<template>
  <div class="movie">
    <!-- title -->
    <header class="navbar">
      <h1 class="nav-header">猫眼电影</h1>
    </header>
    <!-- 广告/下载 -->
    <a id="download-header" >
      <div class="download-app-bar">
        <img
          style="width:42px;height:42px;"
          class="img noneBg logo"
          src="http://s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png"
          
        />
        <div class="app-name-desc">
          <div class="app-name">猫眼</div>
          <div class="app-desc">在线选座，热门影讯，爱上看电影</div>
        </div>
        <div class="btn-open-app">立即打开</div>
      </div>
    </a>
    <!-- 地址城市 -->
    <topbar-movie @tog="change"></topbar-movie>
    <!-- 正在上映 -->
    <now-playing v-if="flag"></now-playing>
    <!-- 即将上映 -->
    <coming-playing v-else></coming-playing>
  </div>
</template>

<script>
import topbarMovie from 'components/topbar-movie.vue';
import nowPlaying from 'components/now-playing.vue';
import comingPlaying from 'components/coming-playing.vue';
export default {
    components:{topbarMovie,nowPlaying,comingPlaying},
    data(){
        return{
            flag:true
        }
    },
    methods:{
        change(state){
            this.flag = state
        }
    }
};
</script>

<style lang='less' scoped>
@import "~style/index.less";
.navbar {
  height: 50.5px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  display: -webkit-box;
  display: -ms-flexbox;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  .nav-header {
    margin-right: 0 !important;
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    font-size: @fs-l;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
#download-header {
  display: block;
  position: fixed;
  top: 50px;
  z-index: 2;
  width: 100%;
  .download-app-bar {
    position: relative;
    height: 63px;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    img.logo {
      position: absolute;
      left: 15px;
      top: 11px;
      .w(44);
      height: 44px;
      border: none;
      vertical-align: middle;
    }
    .app-name-desc {
      position: absolute;
      left: 66px;
      top: 13px;
      .app-name {
        font-size: 17px;
        color: #222;
        line-height: 23px;
      }
      .app-desc {
        font-size: @fs-xs;
        color: @999;
      }
    }
    .btn-open-app {
      position: absolute;
      right: 15px;
      top: 17px;
      .w(68);
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: #ef4238;
      border-radius: 3px;
      font-size: 13px;
      color: #fff;
    }
  }
}
</style>