<template>
  <!-- 广告/下载 -->
  <a id="download-header">
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
</template>


<script>
export default {
    
}
</script>


<style lang="less" scoped>
@import '~style/index.less';
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