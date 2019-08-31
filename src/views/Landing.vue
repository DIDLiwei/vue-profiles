<template>
  <div class="landing">
    <div class="dark-overlay landing-inner text-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="display-3 mb-4">开发者</h1>
            <p class="lead">更多内容</p>
            <router-link v-if="!isLogin" to="/register" class="btn btn-lg btn-info mr-2">注册</router-link>
            <router-link v-if="!isLogin" to="/login" class="btn btn-lg btn-light">登录</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "landing",
  computed: mapGetters(["isLogin"])
};
</script>

<style scoped>
.landing {
  position: relative;
  background: url("../assets/showcase.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  height: 80vh;
  margin-top: -24px;
  margin-bottom: -50px;
}

.landing-inner {
  padding-top: 80px;
}
</style>
