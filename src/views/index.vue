<template>
	<div class='container'>
		<!-- 具名插槽 -->
		<!-- <child>
			<div slot='up'>
				 <span>菜单1</span>
			</div>
			<div slot='down'>
				 <span>菜单2</span>
			</div>
			<div>
				插槽
			</div>
		</child> -->
		 <!-- 作用域插槽 -->
		<child :list='tempList'>
			  <template slot-scope='demo'>
				  <ul>
					  <li v-for='item in demo.data'>{{item}}</li>
				  </ul>
			  </template>
		 </child>
		   <!-- <child>
		      <template slot-scope="user">
		        <ul>
		          <li v-for="item in user.data">{{item}}</li>
		        </ul>
		      </template>
		 
		    </child> -->
			<child :list='tempList'>
			      <template slot-scope="user">
			       {{user.data}}
			      </template>
			 
			    </child>


		
		
		 <div class='list'>
			    <div class='tab'>
				  <img src="../assets/home.png" alt="">
				  <div>
					 首页
				  </div>
				</div>
		 </div>
	</div>
</template>

<script>
	import child from'../components/slotDemo.vue'
	export default{
		data(){
			return{
				tempList:['等等','等等','额','啊啊','问问','等等']
			}
		},
		components:{
			 child
		}
	}
</script>
 
<style scoped>
	.container{
		height: 100%;
	}
	.list{
		 position: fixed;
		 bottom: 0;
		 height: 60px;
		 width: 100%;
		 border-top: 1px solid #eee;
	}
	.list .tab {
		height: 100%;  
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.list .tab  img{
		 height: 15px;
		 width: auto;
		 margin-bottom: 6px;
	}
</style>
