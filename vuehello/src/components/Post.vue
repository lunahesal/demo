<template>
  <div class="post">
      <post-body></post-body>
      <post-comment></post-comment>

  </div>
</template>

<script>
import PostBody from './PostBody'
import PostComment from './PostComment'
export default {
  name: 'post',
  components:{ PostBody, PostComment },
  data: function () {
    return {
      postId: '456'
    }
  }
}
</script>

<style scoped>

</style>
