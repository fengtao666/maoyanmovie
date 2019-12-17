<template>
  <div class="coming-playing">
    <div class="page-box">
      <!-- 最受期待 -->
      <div class="most-expected">
        <p class="title">近期最受期待</p>
        <!-- 近期最受期待电影列表 -->
        <div class="most-expected-list">
          <!-- 每一部电影 -->
          <div class="expected-item" v-for="(item,index) in comingPlayLists">
            <div class="post-img">
              <img :src="item.img" />
            </div>
            <h5 class="movie-name">{{item.nm}}</h5>
            <p class="date">{{item.comingTitle}}</p>
          </div>
        </div>
        <!-- 即将上映电影列表 -->
        <div class="coming-list">
          <!-- 包裹每一部电影的盒子 -->
          <div v-for="(item,index) in comingMovieLists">
            <p class="group-date">{{item.comingTitle}}</p>
            <div class="item">
              <div class="main-block">
                <!-- 电影图片 -->
                <div class="avatar">
                  <div class="img-bg">
                    <img
                      :src="item.img"
                    />
                  </div>
                </div>
                <!-- 电影内容+购票 -->
                <div class="content-box">
                  <div class="content">
                    <div class="movie-title">
                      <div class="title">{{item.nm}}</div>
                    </div>
                    <div class="detail">
                      <div class="wantsee">
                        <span class="person">{{item.wish}}</span>
                        <span class="p-suffix">人想看</span>
                      </div>
                      <div class="actor">主演: {{item.star}}</div>
                      <div class="actor">{{item.rt}}上映</div>
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="btn">
                      <span class="fix">预售</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 即将上映电影列表 -->
      <div class="coming-list"></div>
    </div>
  </div>
</template>

<script>
// 引入数据接口文件
import { getMostExpected, getComingList } from "api/coming-playing.js";
export default {
  data() {
    return {
      comingPlayLists: "",
      comingMovieLists: ""
    };
  },
  created() {
    // 即将上映最受欢迎电影数据
    getMostExpected().then(res => {
      // console.log(res)
      this.comingPlayLists = res.data.coming;
      this.comingPlayLists.map(item => {
        item.img = item.img.replace("w.h", "128.180");
      });
      // console.log(this.comingPlayLists);
    });
    // 即将上映电影列表数据
    getComingList().then(res => {
      console.log(res);
      this.comingMovieLists = res.data.coming;
      this.comingMovieLists.map(item => {
        item.img = item.img.replace("w.h","128.180");
      });
      console.log(this.comingMovieLists);
    });
  }
};
</script>

<style lang="less" scoped>
@import "~style/index.less";
.page-box {
  background-color: #f5f5f5;
  margin-top: 150px;
  height: 500px;
  background-color: yellow;
  border-top: 2px solid #999;
  .most-expected {
    padding: 12px 0 12px 15px;
    background-color: #fff;
    margin-bottom: 10px;
    .title {
      margin: 0;
      font-size: 14px;
      color: #333;
      margin-bottom: 12px;
    }
    .most-expected-list::-webkit-scrollbar {
      display: none;
    }
    .most-expected-list {
      overflow: scroll;
      white-space: nowrap;
      .expected-item {
        display: inline-block;
        .w(85);
        overflow: hidden;
        margin-right: 10px;
        white-space: nowrap;
        .post-img {
          .w(85);
          height: 115px;
          position: relative;
          margin-bottom: 6px;
          background-color: #e1e1e1;
          background-size: 100% 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .movie-name {
          margin: 0;
          font-size: 13px;
          color: #222;
          margin-bottom: 3px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .date {
          margin: 0;
          font-size: 12px;
          color: #999;
        }
      }
    }
    .coming-list {
      background-color: #fff;
      .group-date {
        padding: 12px 15px 0;
        margin: 0;
        font-size: 14px;
        color: #333;
      }
      .item {
        padding-left: 15px;
        background-color: #fff;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        .main-block {
          position: relative;
          width: 100%;
          .avatar {
            .w(64);
            height: 90px;
            position: relative;
            margin-top: 12px;
            float: left;
            .img-bg {
              background-color: #e1e1e1;
              background-size: 100% 100%;
              img {
                background-color: transparent;
                height: 90px;
                width: 100%;
                display: block;
              }
            }
          }
          .content-box {
            padding: 12px 14px 12px 0;
            margin-left: 74px;
            height: 90px;
            max-height: 90px;
            position: relative;
            .content {
              padding-right: 5px;
              margin-right: 48px;
              overflow: hidden;
              .movie-title {
                // max-height: 24px;
                // margin-bottom: 7px;
                line-height: 24px;
                overflow: hidden;
                display: flex;
                .title {
                  font-size: 17px;
                  color: #333;
                  font-weight: 700;
                  padding-right: 5px;
                  flex-shrink: 1;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
              }
              .detail {
                box-sizing: border-box;
                line-height: 1;
                overflow: hidden;
                .wantsee {
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  .person {
                    color: #faaf00;
                    font-size: 15px;
                    font-weight: 600;
                    white-space: nowrap;
                  }
                  .p-suffix {
                    font-size: 13px;
                    margin-left: -2px;
                    display: inline-block;
                    color: #666;
                    white-space: nowrap;
                  }
                }
                .actor {
                  font-size: 13px;
                  color: #666;
                  margin-top: 6px;
                  line-height: 15px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
              }
            }
            .button-block {
              font-size: 12px;
              position: absolute;
              right: 14px;
              top: 0;
              bottom: 0;
              height: 27px;
              margin: auto;
              .btn {
                .w(47);
                background-color: #3c9fe6;
                height: 27px;
                line-height: 28px;
                text-align: center;
                box-sizing: border-box;
                color: #fff;
                border-radius: 4px;
                white-space: nowrap;
                font-size: 12px;
                cursor: pointer;
                .fix {
                  white-space: nowrap;
                  font-size: 12px;
                  cursor: pointer;
                  line-height: 28px;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>