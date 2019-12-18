import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用路由
Vue.use(VueRouter)

import Cinema from 'pages/Cinema.vue';
import Movie from 'pages/Movie.vue';
import My from 'pages/My.vue';
import comingPlaying from 'components/coming-playing.vue';
import cinemaMovie from 'pages/cinema/movie.vue';

// 创建路由对象
const router = new VueRouter({
  routes:[
    {
      path:'/cinema',
      component:Cinema
    },
    {
      path:'/movie',
      component:Movie,
      children:[
        {
          path:'comingPlaying',
          component:comingPlaying
        }
      ]
      
    },
    {
      path:'/cinema/movie/:mid',
      component:cinemaMovie
    },
    {
      path:'/my',
      component:My
    },
    {
      path:'/',
      redirect:'/movie'  //重定向
    }
  ]
})

export default router
