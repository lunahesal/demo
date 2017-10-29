<template>
  <div class='voting'>
    <div v-for="menu in menus" class="menu-item">
      <vote-option :menu="menu" :showNames="showNames" ></vote-option>
    </div>
  </div>
</template>

<script>
  import VoteOption from './VoteOption'
   export default {
    name:'voting',
    components:{VoteOption},
    created:function(){
      this.$store.dispatch('loadMenus')
      this.$store.dispatch('loadUsers')
    },
    computed:{
      menus:function(){
        return this.$store.state.menu.all
      },
      showNames:function(){
        return this.$store.state.user.all
      }
    },
    methods:{
      vote:function(){
        const currentUser = this.$store.state.auth.currentUser
        if(currentUser){
          this.$store.dispatch({type:'vote',userName:currentUser})
        }
      }
    },
   }

</script>

<style scoped>
  .menu-item{
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
    font-size: 20px;
    text-align: center;
    line-height: 1.8;
    padding: 20px 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
</style>
