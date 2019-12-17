<template>
  <div class="topbar">
    <div class="white-bg topbar-bg">
      <div class="city-entry">
        <span class="city-name">上海</span>
        <i class="fa fa-sort-desc" aria-hidden="true"></i>
      </div>
      <div class="switch-hot">
        <div :class="state?'active':'hot-item'" @click="toggle()">正在热映</div>
        <div :class="state?'hot-item':'active'" @click="toggle()">即将上映</div>
      </div>
      <div class="search-entry">
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: true
    };
  },
  methods: {
    toggle() {
      this.state = !this.state;
      if (this.state == true) {
        this.$router.push("/movie");
      } else {
        this.$router.push("/movie/comingPlaying");
      }
      this.$emit('tog',this.state)
    }
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.topbar {
  border-bottom: 1px solid #e6e6e6;
  height: 44px;
  position: fixed;
  top: 110px;
  width:100%;
  z-index: 2;
  .white-bg {
    background-color: #fff;
  }
  .topbar-bg {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 44px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    .city-entry {
      padding-left: 15px;
      font-size: 15px;
      color: #666;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      .city-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 70px;
        max-width: 19.2vw;
      }
      i {
        margin-left: 5px;
      }
    }
    .switch-hot {
      display: flex;
      height: 44px;
      line-height: 44px;
      position: relative;
      .hot-item {
        font-size: 15px;
        color: #666;
        .w(80);
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
      }
      .active {
        font-size: 15px;
        .w(80);
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
        color: @red;
        border-bottom: 2px solid @red;
      }
    }
    .search-entry {
      .w(45);
      height: 40px;
      i {
        color: @red;
        font-size: @fs-xxl;
        position: absolute;
        right: 15px;
        bottom: 10px;
      }
    }
  }
}
</style>