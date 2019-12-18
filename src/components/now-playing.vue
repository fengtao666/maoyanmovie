<template>
  <div class="nowPlaying">
    <div class="page-box">
      <div class="box">
        <div class="content">
          <div class="list" >
            <!-- 每一个电影的内容盒子 -->
            <div class="item" 
                  v-for="(item,index) in nowPlayLists" 
                  :key="index"
                  @click="jump(item.id)">
              <div class="item-box">
                <!-- 电影图片 -->
                <div class="avatar">
                  <img
                    :src="item.img"
                  />
                </div>
                <!-- 右侧内容 -->
                <div class="content-r">
                  <!-- 电影介绍 -->
                  <div class="content">
                    <div class="title">
                      <div class="tit">{{item.nm}}</div>
                      <img v-if="ver"
                        class="pic"
                        src="data:image/png;base64,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"
                      />
                    </div>
                    <div class="detail">
                      <!-- 评分 -->
                      <div class="score">
                        <span v-if="ar">观众评</span>
                        <span class="grade">{{item.sc}}</span>
                      </div>
                      <!-- 主演 -->
                      <div class="actor">{{item.star}}</div>
                      <div class="show-info">{{item.showInfo}}</div>
                    </div>
                  </div>
                  <!-- 购票 -->
                  <div class="btn-block">
                    <div class="btn">
                      <span class="fix">购票</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// 引入数据接口文件
import { getNowPlaying } from "api/now-playing.js";
export default {
  data(){
    return{
      nowPlayLists:'',
      pics:'',
      imgUrl:[],
      // 观众点评
      ar:true,
      // 2D 3D小图标
      ver:true
    }
  },
  methods:{
    jump(mid){
      // console.log(mid)
      this.$router.push(`/cinema/movie/${mid}`)
    }
  },
  created(){
    getNowPlaying().then((res)=>{
      // console.log(res)
      this.nowPlayLists = res.data.movieList
      // console.log('nowplay',this.nowPlayLists)
      this.pics = res.data.movieList
      // console.log('pics',this.pics)
      // 遍历pics
      this.pics.map((item)=>{
        // 修改图片链接路径
        item.img = item.img.replace('w.h','128.180')
        if(item.sc == 0){
          item.sc = "暂无评分";
          this.ar = false;
        }    
        // console.log( item.img )
        this.imgUrl.push(item.img)
      })
      // console.log(this.imgUrl)
    })
  }
};
</script>



<style lang="less" scoped>
@import "~style/index.less";
.page-box {
  height: 571.7px;
  overflow: hidden;
  // position: fixed;
  top: 110px;
  z-index: 2;
  width: 100%;
  .box {
    width: 100%;
    height: 100%;
    overflow: auto;
    .content {
      position: absolute;
      width: 100%;
      display: block;
      .list {
        background-color: #f5f5f5;
        margin-top: 0px;
        position: absolute;
        width: 100%;
        top: 160px;
        .item {
          padding-left: 15px;
          background-color: #fff;
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
          padding-top: 10px;
          .item-box {
            position: relative;
            width: 100%;
            .avatar {
              .w(64);
              height: 90px;
              position: relative;
              float: left;
              // background-color: #e1e1e1;
              background-size: 100% 100%;
              img {
                background-color: transparent;
                height: 90px;
                width: 100%;
                border: 0;
                display: block;
                margin-top: 10px;
              }
            }
            .content-r {
              padding: 12px 14px 12px 0;
              margin-left: 74px;
              height: 90px;
              max-height: 90px;
              position: relative;
              .content {
                padding-right: 5px;
                margin-right: 48px;
                overflow: hidden;
                .title {
                  max-height: 24px;
                  margin-bottom: 7px;
                  line-height: 24px;
                  overflow: hidden;
                  display: flex;
                  .tit {
                    font-size: 17px;
                    color: #333;
                    font-weight: 700;
                    padding-right: 5px;
                    flex-shrink: 1;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  }
                  .pic {
                    .w(43);
                    height: 14px;
                  }
                }
                .detail {
                  box-sizing: border-box;
                  line-height: 1;
                  overflow: hidden;
                  .score {
                    font-size: 13px;
                    color: #666;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    .grade {
                      font-weight: 700;
                      color: #faaf00;
                      font-size: 15px;
                      white-space: nowrap;
                    }
                  }
                  .actor,
                  .show-info {
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
              .btn-block {
                font-size: 12px;
                position: absolute;
                right: 14px;
                top: 0;
                bottom: 0;
                height: 27px;
                margin: auto;
                .btn {
                  .w(47);
                  height: 27px;
                  line-height: 28px;
                  text-align: center;
                  box-sizing: border-box;
                  background-color: #f03d37;
                  color: #fff;
                  border-radius: 4px;
                  white-space: nowrap;
                  font-size: 12px;
                  cursor: pointer;
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


