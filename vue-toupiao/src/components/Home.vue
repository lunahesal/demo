<template>
  <div class='home'>
    <div class="login-wrap">
      <login-form />
    </div>
    <div class="voting-wrap">
      <voting />
    </div>
    <div class="action-wrap">
      <action />
    </div>
    <div class="chart-wrap">
      <chart />
    </div>
  </div>
</template>

<script>
  import LoginForm from './LoginForm'
  import Voting from './Voting'
  import Action from './Action'
  import Chart from './Chart'
   export default {
    name:'home',
    components:{
      LoginForm,
      Voting,
      Action,
      Chart
    },

   }

</script>

<style>
 .login-wrap,.voting-wrap,.action-wrap,.chart-wrap {
   width: 90%;
   margin: 20px auto;
 }
</style>
