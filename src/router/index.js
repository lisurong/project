import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import news from '@/components/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path: '/news',
    	name: 'news',
    	component: news
    }
  ]
})
