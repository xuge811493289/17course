import Vue from 'vue'
import Layout from './components/Layout.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index.vue'
import DetailPage from './pages/detail.vue'
import DetailCountPage from './pages/detail/count.vue'
import DetailForPage from './pages/detail/forecast.vue'
import DetailAnaPage from './pages/detail/analysis.vue'
import DetailPubPage from './pages/detail/publish.vue'
import orderList from './pages/orderList.vue'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
//实例化
let router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component: IndexPage
		},
		{
			path:'/orderList',
			component: orderList
		},
		{
			path:'/detail',
			component:DetailPage,
			redirect:'detail/analysis',
			children:[
				{
					path:'count',
					component:DetailCountPage
				},
				{
					path:'forecast',
					component:DetailForPage
				},
				{
					path:'analysis',
					component:DetailAnaPage
				},
				{
					path:'publish',
					component:DetailPubPage
				}
			]
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
