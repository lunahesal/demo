<template>
  <div class='login-form'>
    <div v-if="!isAuthenticated">
      你是
      <input v-model="text" placeholder="你的名字" class="newinput"/>
      <button @click="login">保存</button>
    </div>
    <div v-else>
      我是 {{ currentUser }}
    </div>
  </div>
</template>

<script>
 export default {
  name:'login-form',
  data:()=>({
    text:''
  }),
  computed:{
    isAuthenticated:function(){
      return this.$store.state.auth.isAuthenticated
    },
    currentUser:function(){
      return this.$store.state.auth.currentUser
    }
  },
  methods:{
    login:function(){
      if(!this.text.trim()){
        return
      }
      this.$store.commit({type:'login',text:this.text})
      this.text=''
    }
  }
}

</script>

<style scoped>
.login-form {
   background-color: #fff;
   box-shadow: 0 2px 2px rgba(0, 0, 0, 0.8);
   font-size: 20px;
   text-align: center;
   line-height: 1.8;
   padding: 20px 10px;
 }
 input {
   border: 0;
   border-bottom: 1px solid #00bcd4;
   padding: 5px;
   font-size: 18px;
   color: rgba(0, 0, 0, 0.5);
 }
 input:focus {
   outline: 0;
 }
</style>
