<template>
  <div class="movie">
    <header class="navbar" v-for="item in detailMovieList">
      <!-- 题头返回按钮 -->
      <div class="nav-wrap-left">
        <a class="back" href>
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </a>
      </div>
      <h1 class="nav-header">{{item.nm}}</h1>
    </header>
    <div class="body" v-for="item in detailMovieList">
      <!-- 广告/下载插件 -->
      <ad></ad>
      <!-- 电影详情 -->
      <div class="movie-detail">
        <!-- 遮盖 -->
        <div class="movie-filter"></div>
        <div
          class="poster-bg"
          style="background-image:url(http://p1.meituan.net/71.100/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg)"
        ></div>
        <div class="detail">
          <div class="poster">
            <img
              :src="item.img"
            />
          </div>
          <div class="content">
            <div class="tit">{{item.nm}}</div>
            <div class="tit-en-name">{{item.enm}}</div>
            <div class="score">
              {{item.sc}}
              <span class="snum">(16.5万人评)</span>
            </div>
            <div class="type">
              <span>{{item.cat}}</span>
              <div class="type-group">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAeCAYAAABwmH1PAAACn0lEQVRYhe2ZUW7TQBCGv0RBrUSl+KW8po/lqTkAknOBCN+gewPCDdwbmBuYGwRxAILEAZoneHRf6QNBAgmJSsvDjOu18TqWnBLV5JdW68zMemd2Z2bH2YG1FuAp8Bw4BUb0C3fALfAZ+Dmw1p4AL4Ane1Xr4fEb+DQCzhFjvwJr4Nc+tXoAHAMXwDPgfIi4MfTTWBCb1vp8OqSI2T4amyO3bTTcqxp7wMHgvqONwVNgBRiHliht0WJ8pLKJhx8ofwXMGuZfqmwdlg3jy7DWzrXhaTMriB3aSmmbhnF5y1R25eEbW2DpkUka+E08t82ttfOuLj2mvPNVRMBkyztyL/kIvATOPDJr5bvzzYBXwM0WPe7R1eDvQNzA3+byU6QoeEvh8sYja3S+BFmUAHFlkIXdbJkL6G5wguxgVMObASFijA/5gqSI8k07da3yY5Vd6vNr5bVCV4NT7et20mgfe8YGyELdIAknf98Ev9EpsoAXyGK+w58Ma9HV4EwVCClnyDPgEonLzDM2QnbIVTjV3jTMufQ8t8IuzuFYe+PQFhVe07jUoWXIIoXUJ6/AkXfjuTV2YXCGKHlJkUwMklVXnjEziuz9DbBOC5VeFyZ53F5RjufW2NXHfgx8UCU2/O2qVRjt31CfXRcqs6jQQmRxY6VFyFGV0K4I6lx4VAuMjfZZhecWHoH+rsrUFRNGf0+dQufMkQucwib6F4WHixjZ2QnluKzCaN/kAe6Z7J63hnIS3FAciSn+0vMeuzQ4RY6YPJn4kLteU+xlSA4IVW6CnAZ1Y66RmB7TvNAADKy1c31+v034kWMOh8/D/uNgcN8xRP6ZB/n/tq840v5uiFxDgHyBHNXLP2ocI9/dALf/3VXLwMpl2gly5dLny7QvwI8/pysRaQplMrsAAAAASUVORK5CYII="
                  alt
                />
              </div>
              <div class="src">{{item.src}}/{{item.dur}}分钟</div>
              <div class="pubDesc">{{item.pubDesc}}</div>
            </div>
          </div>
        </div>
        <!-- 右箭头 -->
        <div class="arrow-g">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ad from "components/open.vue";
// 引入电影详情数据信息
import { getDetailMovieById, getNowPlaying } from "api/now-playing.js";
export default {
  components: { ad },
  data() {
    return {
      detailMovieList: []
    };
  },
  created() {
    getNowPlaying().then(res => {
      let mid = this.$route.params.mid;
      //   获取电影详情数据
      getDetailMovieById(mid).then(res => {
        console.log(res);
        res.data.detailMovie.img = res.data.detailMovie.img.replace('w.h','128.180')
        this.detailMovieList = res.data;
        // this.detailMovieList.forEach(item => {
        //   console.log(item);
        // });
        console.log(this.detailMovieList);
      });
    });
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
  position: relative;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  .nav-wrap-left {
    height: 50.5px;
    line-height: 50.5px;
    .back {
      height: 50px;
      .w(22.5);
      line-height: 50px;
      padding: 0 15px;
      i {
        font-size: 36px;
        color: #fff;
        position: absolute;
        top: 5px;
      }
    }
  }
  .nav-header {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 52.5px;
  }
}
.body {
  position: absolute;
  top: 110px;
  width: 100%;
  .movie-detail {
    height: 188px;
    position: relative;
    cursor: pointer;
    .movie-filter {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: #333;
    }
    .poster-bg {
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
      position: absolute;
      -webkit-filter: blur(1.2rem);
      filter: blur(1.2rem);
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.55;
    }
    .detail {
      height: 200px;
      padding: 19px 30px 19px 15px;
      display: flex;
      .poster {
        img {
          .w(110);
          height: 150px;
          box-sizing: border-box;
          display: block;
        }
      }
      .content {
        overflow-x: hidden;
        margin-left: 12.5px;
        line-height: 1;
        color: #fff;
        -webkit-box-flex: 1;
        flex: 1;
        .tit {
          font-size: 20px;
          margin-top: 2px;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .tit-en-name {
          margin-top: 10px;
          font-size: 12px;
          color: #fff;
          opacity: 0.8;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .score {
          font-size: 18px;
          font-weight: 700;
          color: #fc0;
          margin-top: 11px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          .snum {
            margin-top: 10px;
            font-size: 12px;
            color: #fff;
            opacity: 0.8;
          }
        }
        .type {
          margin-top: 10px;
          font-size: 12px;
          color: #fff;
          opacity: 0.8;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          span {
            vertical-align: top;
          }
          .type-group {
            display: inline-block;
            .w(42);
            opacity: 0.85;
            img {
              .w(26);
              display: block;
            }
          }
          .src {
            margin-top: 10px;
            font-size: 12px;
            color: #fff;
            opacity: 0.8;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .pubDesc {
            margin-top: 10px;
            font-size: 12px;
            color: #fff;
            opacity: 0.8;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
    }
    .arrow-g {
      position: absolute;
      .w(10);
      right: 15px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      i {
        width: 100%;
        display: block;
        color: #fff;
        font-size: 30px;
        opacity: 0.5;
      }
    }
  }
}
</style>