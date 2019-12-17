<template>
  <div class="coming-playing">
    <div class="page-box">
      <!-- 最受期待 -->
      <div class="most-expected">
        <p class="title">近期最受期待</p>
        <div class="most-expected-list">
          <!-- 每一部电影 -->
          <div class="expected-item" v-for="(item,index) in comingPlayLists">
            <div class="post-img">
              <img
                :src="item.img"
              />
            </div>
            <h5 class="movie-name">{{item.nm}}</h5>
            <p class="date">{{item.comingTitle}}</p>
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
import {getMostExpected} from "api/coming-playing.js";
export default {
    data(){
        return{
            comingPlayLists:''
        }
    },
    created(){
        getMostExpected().then((res)=>{
            // console.log(res)
            this.comingPlayLists = res.data.coming;
            this.comingPlayLists.map((item)=>{
                item.img = item.img.replace('w.h','128.180')
            })
        console.log(this.comingPlayLists)
        })
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
    .most-expected-list::-webkit-scrollbar {display:none}
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
  }
}
</style>