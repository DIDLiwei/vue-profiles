<template>
  <!-- 留言 -->
  <div class="feed">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <PostForm @update="updatePost" />

          <PostFeed @update="updatePost" v-for="post in posts" :key="post.id" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "../components/post/PostForm";
import PostFeed from "../components/post/PostFeed";
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getPosts());
  },
  methods: {
    getPosts() {
      this.$axios.get("/api/posts").then(res => {
        console.log(res.data);
        this.posts = res.data;
      });
    },
    updatePost() {
      this.getPosts();
    }
  },
  data() {
    return {
      posts: []
    };
  },
  components: { PostForm, PostFeed }
};
</script>

<style lang="scss" scoped>
</style>