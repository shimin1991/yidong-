<template>
<!-- 	<div class='child'>
		  <h3>这里是子组件</h3>
		  <slot>ddd</slot>
	</div> -->
	
	
	<!-- 具名插槽 -->
<!-- 	<div class='child'>
		剧名插槽
		<slot name='up'>
			
		</slot>
		<h3>这里是子组件</h3>
		具名插槽
		<slot  name='down'>
			
		</slot>
		 匿名插槽
		<slot>
			
		</slot>
	</div> -->
	
	
	<div class='child'>
		  <h3>这里是子组件</h3>
		  <slot :data='list'></slot>
	</div>
</template>

<script>
	export default{
		 data(){
			  return{
				  
				  data:['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
			  }
		 },
		 props:[
			 'list'
		 ]
	}
</script>

<style>
</style>
