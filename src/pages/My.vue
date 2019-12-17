<template>
  <div class="my">
    <header class="navbar">
      <h1 class="nav-header">我的</h1>
    </header>
  </div>
</template>

<script>
export default {};
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
  position: relative;
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
</style>