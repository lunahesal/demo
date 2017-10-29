<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home'
 export default{
   name:'app',
   components:{Home},
   
 }
</script>

<style>
  body{
    margin:0;
    background-color:lightblue;
  }
  * {
     box-sizing: border-box;
   }

   a {
     text-decoration: none;
   }
  #app{
    min-height: 100vh;
  }

</style>
