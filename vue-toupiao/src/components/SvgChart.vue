<template>
  <div class='svg-chart'>
    <div>
      <div class="menu-perc">
        <div class="menu-name">
          {{option.name}}:
        </div>
        <div class="percent">
          <div :style="{width:`${percent*100 + '%'}`}">
            <h3>{{ percent*100 + '%' }}</h3>

          </div>
        </div>
        <div class="pie-yum">
          <svg width="50" height="50" viewBox="0 0 32 32">
            <circle id="background"
               r="16" cx="16" cy="16" fill="#fff" stroke="yellow" stroke-width="12" />
            <circle id="percent"
               r="16" cx="16" cy="16" fill="#fff" fill-opacity="0.5" stroke="deeppink"
               stroke-width="12"
               :stroke-dasharray=" percentStr " />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
   export default {
    name:'svg-chart',
    props: ['option'],
    computed: {
      totalVotes:function(){
        return this.$store.state.user.all.length
      },
      percent: function () {
        return (this.option.voteCount/this.totalVotes).toFixed(2)
      },
      percentStr: function () {
        return this.percent*100 + ' 100'
      }
    },
   }

</script>

<style scoped>
  .menu-perc{
    display: flex;
    padding: 5px;
    box-sizing: border-box;
    align-items: center;
  }
  .percent{
    width: 260px;
    line-height: 24px;
    margin-left: 10px;
    margin-right: 10px
  }
  .percent>div{
    background-color: lightblue;
  }
  h3{
    margin: 0;
    font-size: 16px;
    font-weight: normal;
  }
  svg {
    transform: rotate(-90deg);
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
</style>
