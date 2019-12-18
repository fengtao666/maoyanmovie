<template>
  <!-- 筛选条件 -->
  <div class="filter-nav-wrap">
    <div class="tab">
      <div class="item">
        全城
        <span class="drop"></span>
      </div>
      <div class="item">
        品牌
        <span class="drop"></span>
      </div>
      <div class="item">
        特色
        <span class="drop"></span>
      </div>
    </div>
  </div>
</template>


<style lang='less' scoped>
@import "~style/index.less";
.filter-nav-wrap {
  width: 100%;
  height: 40px;
  z-index: 10;
  background-color: #fff;
  .tab {
    display: flex;
    .item {
      -webkit-box-flex: 1;
      flex: 1;
      text-align: center;
      line-height: 40px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      font-size: 13px;
      text-overflow: ellipsis;
      .drop {
        display: inline-block;
        position: absolute;
        top: 18px;
        width: 0;
        height: 0;
        margin-left: 4px;
        border: 4px solid transparent;
        border-top-color: #b0b0b0;
      }
    }
  }
}
</style>