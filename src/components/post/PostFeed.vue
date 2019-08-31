<template>
  <!-- post display -->
  <div class="posts">
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-2">
          <a>
            <img
              style="width:150px"
              class="rounded-circle d-none d-md-block"
              :src="post.avatar"
              alt
            />
          </a>
          <br />
          <p class="text-center">{{post.name}}</p>
        </div>
        <div class="col-md-10">
          <p class="lead">{{post.text}}</p>
          <button @click="handleLike(post._id)" type="button" class="btn btn-light mr-1">
            <i class="text-info fa fa-thumbs-up"></i>
            <span class="badge badge-light">{{post.likes.length}}</span>
          </button>
          <button @click="handleunLike(post._id)" type="button" class="btn btn-light mr-1">
            <i class="text-secondary fa fa-thumbs-down"></i>
          </button>
          <!-- 鼓励留言 -->
          <a href="post.html" class="btn btn-info mr-1">鼓励留言</a>

          <!-- 删除留言 -->
          <button
            v-if="user != null && user.id == post.user"
            type="button"
            class="btn btn-danger mr-1"
            @click="handleDelete(post._id)"
          >
            <i class="fa fa-times" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleDelete(id) {
      // console.log(id);
      this.$axios.delete(`/api/posts/${id}`).then(res => {
        this.$emit("update");
      });
    },
    handleunLike(id) {
      this.$axios
        .post(`/api/posts/unlike/${id}`)
        .then(res => {
          this.$emit("update");
        })
        .catch(err => {
          alert(err.response.data.notliked);
        });
    },
    handleLike(id) {
      this.$axios
        .post(`/api/posts/like/${id}`)
        .then(res => {
          this.$emit("update");
        })
        .catch(err => {
          alert(err.response.data.alreadyliked);
        });
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  props: {
    post: Object
  }
};
</script>

<style lang="scss" scoped>
</style>