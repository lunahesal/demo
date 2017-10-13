<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

 export default{
   created:function(){
     this.$store.dispatch({type:'loadComments'})
     this.$store.dispatch('loadPosts')
   }
 }
</script>

<style>
</style>
