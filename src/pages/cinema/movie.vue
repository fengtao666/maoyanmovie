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
      <ad style="position:absolute;top:-60px;"></ad>
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
            <img :src="item.img" />
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
      <!-- 上映日期 -->
      <div id="showDays">
        <ul id="timeline">
          <li
            class="showDay"
            v-for="(item,index) in showDays"
            :key="index"
            @click="change(index)"
          >{{item.date}}</li>
        </ul>
      </div>
      <!-- 筛选条件 -->
      <filter-date></filter-date>
      <!-- 影院信息 -->
      <div class="cinema-list">
        <div class="list-wrap">
          <!-- 包裹每一家影院信息的盒子 -->
          <div class="item" v-for="(item,index) in cinemasLists">
            <div class="title-block">
              <div class="title">
                <span>{{item.nm}}</span>
                <span class="price-block">
                  <span class="price">{{item.sellPrice}}</span>
                  <span class="q">元起</span>
                </span>
              </div>
              <div class="location-block">
                <div class="flex">{{item.addr}}</div>
                <div class="distance">{{item.distance}}</div>
              </div>
              <div class="label-block">
                <div class="allowRefund">退</div>
                <div class="endorse">改签</div>
                <div class="snack">小吃</div>
                <div class="vipTag">折扣卡</div>
                <div class="hallType">4K厅</div>
              </div>
              <div class="discount-block">
                <div>
                  <div class="discount-label">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                      alt
                    />
                  </div>
                  <div class="discount-label-text">{{item.promotion.cardPromotionTag}}</div>
                </div>
              </div>
            </div>
            <!-- 近期场次 -->
            <div class="min-show-block">
              <span>近期场次：</span>
              <span
                class="time-line"
                style="padding-left:0;border-left:0 solid #eee;"
              >{{item.showTimes}}</span>
              <!-- <span class="time-line">16:10</span>
              <span class="time-line">17:20</span>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入广告组件
import ad from "components/open.vue";
// 引入筛选组件
import filterDate from "components/filter.vue";
// 引入电影详情数据信息
import { getDetailMovieById, getNowPlaying } from "api/now-playing.js";
// 引入假数据
import cinemasData from "api/cinemas_data.json";
import cinemasData2 from "api/cinemas_data2.json";
import cinemasData3 from "api/cinemas_data3.json";
export default {
  components: { ad, filterDate, cinemasData, cinemasData2, cinemasData3 },
  data() {
    return {
      detailMovieList: [],
      cinemasLists: null,
      cinemasLists1: cinemasData.cinemas,
      cinemasLists2: cinemasData2.cinemas,
      cinemasLists3: cinemasData3.cinemas,
      showDays: cinemasData.showDays.dates
      //   active: false
    };
  },
  methods: {
    change(index) {
      //   console.log(index)
      if (index == 0) {
        this.cinemasLists = this.cinemasLists1;
      } else if (index == 1) {
        this.cinemasLists = this.cinemasLists2;
      } else {
        this.cinemasLists = this.cinemasLists3;
      }
      //   this.active = true
      // console.log(this.$attrs)
    }
  },
  created() {
    // console.log(this.cinemasLists);
    console.log(this.showDays);
    this.cinemasLists = this.cinemasLists1;
    getNowPlaying().then(res => {
      let mid = this.$route.params.mid;
      //   获取电影详情数据
      getDetailMovieById(mid).then(res => {
        console.log(res);
        res.data.detailMovie.img = res.data.detailMovie.img.replace(
          "w.h",
          "128.180"
        );
        this.detailMovieList = res.data;
        // this.detailMovieList.forEach(item => {
        //   console.log(item);
        // });
        console.log(this.detailMovieList);
      });
    });
  }
  //   filters:{
  //         cinemasShowDay:(showDays)=>{
  //             let time = null;
  //             // console.log(showDays)
  //             showDays.map((item)=>{
  //                 console.log(item.date)
  //                 // item.date = item.date.replace()
  //                 let y = item.date.slice(0,4)
  //                 console.log(y)
  //                 let m = item.date.slice(5,7)
  //                 console.log(m)
  //                 let d = item.date.slice(9,11)
  //                 console.log(d)
  //                 time = y+'年'+m+'月'+d+'日'
  //                 console.log(time)
  //             })
  //             return time
  //         }
  //   }
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
  #showDays {
    width: 100%;
    height: 45px;
    overflow-x: scroll;
    background-color: #fff;
    #timeline {
      overflow-x: scroll;
      padding: 0;
      margin: 0;
      height: 45px;
      white-space: nowrap;
      .showDay {
        position: relative;
        display: inline-block;
        width: 115px;
        line-height: 43px;
        margin-left: 4.5px;
        font-size: 14px;
        text-align: center;
        list-style: none;
        color: #666;
      }
      .chosen {
        position: relative;
        display: inline-block;
        width: 115px;
        line-height: 43px;
        margin-left: 4.5px;
        font-size: 14px;
        text-align: center;
        list-style: none;
        border-bottom: 2px solid #f03d37;
        color: #f03d37;
      }
    }
    #timeline::-webkit-scrollbar {
      display: none;
    }
  }
  .cinema-list {
    margin-top: 0px;
    .list-wrap {
      min-height: 602.2px;
      background-color: #fff;
      .item {
        padding: 13px 15px 13px 0;
        margin-left: 15px;
        background-color: #fff;
        position: relative;
        overflow: hidden;
        .title-block {
          display: block;
          -webkit-box-align: center;
          align-items: center;
          line-height: 1.5;
          .title {
            height: 23px;
            line-height: 23px;
            font-size: 16px;
            color: #000;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            .price-block {
              padding-top: 9px;
              padding-left: 3px;
              line-height: 1.5;
              .price {
                font-size: 18px;
                color: #f03d37;
              }
              .q {
                margin-left: 3px;
                font-size: 11px;
                color: #f03d37;
              }
            }
          }
          .location-block {
            margin-top: 6px;
            font-size: 13px;
            color: #666;
            line-height: 1.5;
            .flex {
              -webkit-box-flex: 1;
              flex: 1;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              display: inline-block;
              .w(270);
            }
            .distance {
              position: absolute;
              right: 15px;
              display: inline-block;
            }
          }
          .label-block {
            height: 17px;
            line-height: 17px;
            margin-top: 4px;
            margin-bottom: 4px;
            overflow: hidden;
            font-size: 0;
            flex-shrink: 0;
            .allowRefund,
            .endorse,
            .snack,
            .vipTag,
            .hallType {
              color: #589daf;
              border: 1px solid #589daf;
              position: relative;
              display: inline-block;
              height: 15px;
              padding: 0px 3px 15px 3px;
              line-height: 15px;
              border-radius: 2px;
              font-size: 10px;
            }
            .endorse,
            .hallType {
              margin-left: 5px;
            }
            .snack,
            .vipTag {
              color: #f90;
              border: 1px solid #f90;
              margin-left: 5px;
            }
          }
          .discount-block {
            color: #999;
            margin-bottom: 4px;
            .discount-label {
              .w(15);
              height: 14px;
              position: relative;
              top: 3px;
              display: inline-flex;
              img {
                width: 100%;
                display: block;
              }
            }
            .discount-label-text {
              margin-left: 0;
              font-size: 11px;
              display: inline-block;
              margin-left: 5px;
            }
          }
        }
        .min-show-block {
          padding: 0 15px 0 0;
          margin-right: -15px;
          line-height: 1.5;
          font-size: 0;
          span {
            font-size: 12px;
            color: #999;
            padding-right: 7px;
          }
          .time-line {
            display: inline-block;
            position: relative;
            padding-left: 7px;
            border-left: 1px solid #ccc;
          }
        }
      }
    }
  }
}
</style>