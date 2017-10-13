<template>
  <div class='home'>
    <div class="login-wrap">
      <login-form />
    </div>
  </div>
</template>

<script>
  import LoginForm from './LoginForm'
 export default {
  name:'home',
  components:{
    LoginForm
  },
  
 }

</script>

<style>
 .login-wrap {
   width: 90%;
   margin: 20px auto;
 }
</style>
