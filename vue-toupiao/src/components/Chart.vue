<template>
  <div class='chart'>
    <div v-for="option in sortedOptions" class="chartin">
      <svg-chart :option="option" />
    </div>
  </div>
</template>

<script>
  import SvgChart from './SvgChart'
   export default {
    name:'chart',
    components:{ SvgChart },
     computed:{
       menus:function(){
         return this.$store.state.menu.all
       },
       showNames:function(){
         return this.$store.state.user.all
       },
       sortedOptions:function(){
         let result = this.menus.map(t => {
           const voteCount = this.showNames.filter(
             item => item.menuId == t.id ).length
             return {
               name:t.text,
               id:t.id,
               voteCount
             }
         })
         return result.sort(function(a,b){
           return a.voteCount - b.voteCount
         }).slice().reverse()
       }
     }
   }

</script>

<style scoped>
  .chart{
    background-color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

</style>
