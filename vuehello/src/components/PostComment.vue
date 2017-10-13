<template>
  <div>
    <input v-model="text" />
    <button v-on:click="handleClick">提交评论</button>
    <ul>
      <li v-for="comment in reverseComments">
        {{ comment.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'post-comment',
  data:()=>({
    text:''
  }),
  computed:{
    postId:function(){
      return this.$route.params.id
    },
    comments:function(){
      const allComments = this.$store.state.comment.all
      return allComments.filter( t => {
        return t.postId == this.postId
      })
    },
    reverseComments:function(){
      return this.comments.slice().reverse()
    }
  },
  methods:{
    handleClick:function(){
      // const input = document.getElementById('addcomment')
      // this.comments.push({text:input.value})
      // input.value=''
      // this.comments.push({text:this.text})
      this.$store.dispatch({type:'addComment',text:this.text,postId:this.postId})
      this.text=''
    }
  },
  created:function(){
    this.$store.dispatch('loadComments')
  }
}

</script>

<style scoped>

</style>
