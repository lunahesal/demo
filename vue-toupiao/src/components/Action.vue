<template>
  <div class='action'>
    <div>
      <input v-model="text" placeholder="菜品" class="caiinput"/>
      <button @click="add">保存</button>
    </div>
  </div>
</template>

<script>
   export default {
    name:'action',
    data:()=>({
      text:''
    }),
    methods:{
      add:function(){
        console.log(this.text);
        this.$store.dispatch({type:'addMenu',text:this.text})
        this.text=''
      }
    },

   }

</script>

<style scoped>
.action {
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
button{
  border:0;
  width: 100px;
  margin: 10px auto;
  padding:5px 10px;
  box-sizing: border-box;
  border-radius: 5px;
}

</style>
