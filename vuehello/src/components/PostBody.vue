<template>
  <div class="post-body">
    <div v-if="ready">
      <h1>{{ title }}</h1>
      {{ content }}
      {{commentNo}}条评论
      {{this.$route.params}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-body',
  computed:{
    ready:function(){
      return this.post
    },
    postId:function(){
      return this.$route.params.id
    },
    commentNo:function(){
      const allComments = this.$store.state.comment.all
      return allComments.filter( t => {
        return t.postId == this.postId
      }).length
    },
    post:function(){
      const posts = this.$store.state.post.all
      const post = posts.find( t => t.id == this.postId)
      return post
    },
    content:function(){
      return this.post.content
    },
    title:function(){
      return this.post.title
    }
  }
}
</script>

<style scoped>

</style>
