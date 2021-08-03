import vueRouter from 'vue-router'
 let router =new vueRouter({
	   routes:[
		   {path:'/',
		     component:resolve =>require(['@/views/index.vue'],resolve)
			}
	   ]
 })
 export default router