<template>
  <!-- 登录 -->
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">登录</h1>
          <p class="lead text-center">用正确的账号登录</p>
          <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
            <TextFieldGroup
              v-model="user.email"
              type="email"
              placeholder="Email Address"
              name="email"
              :error="errors.email"
            />
            <TextFieldGroup
              v-model="user.password"
              placeholder="password"
              name="password"
              type="password"
              :error="errors.password"
            />
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import TextFieldGroup from "../components/common/TextFieldGroup";
export default {
  name: "login",
  components: {
    TextFieldGroup
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      this.$axios
        .post("/api/users/login", this.user)
        .then(res => {
          console.log(res.data);
          const { token } = res.data;
          localStorage.setItem("jwtToken", token);

          // 解析token
          const decoded = jwt_decode(token);

          // 将解析完的token存储到vuex中
          this.$store.dispatch("setUserAsync", decoded);

          // 存储isLogin的值到vuex
          this.$store.dispatch("setIsLoginAsync", !this.isEmpty(decoded));

          this.errors = {};

          // 页面跳转
          this.$router.push("/dashboard");
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    },
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>


<style scoped>
</style>
