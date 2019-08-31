<template>
  <div id="app">
    <Nav />
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
    <Footer />
    <Loading v-show="loading" />
  </div>
</template>
<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./views/Landing";
import jwt_decode from "jwt-decode";
import Loading from "./components/common/Loading";
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: mapGetters(["loading"]),
  created() {
    if (localStorage.jwtToken) {
      const decoded = jwt_decode(localStorage.jwtToken);

      // token验证

      // 获取当前时间
      const currentTime = Date.now() / 1000;

      // 判断是否过期
      if (decoded.exp < currentTime) {
        // 已经过期
        this.$store.dispatch("setUserAsync", {});
        this.$store.dispatch("setIsLoginAsync", false);
        // 页面跳转
        this.$router.push("/login");
      } else {
        // 将解析完的token存储到vuex中
        this.$store.dispatch("setUserAsync", decoded);
        // 存储isLogin的值到vuex
        this.$store.dispatch("setIsLoginAsync", !this.isEmpty(decoded));
      }
    }
  },
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  },
  components: {
    Nav,
    Footer,
    Landing,
    Loading
  }
};
</script>

<style>
</style>
