<template>
  <!-- Register -->
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">注册</h1>
          <p class="lead text-center">创建一个新的账号</p>
          <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
            <TextFieldGroup
              v-model="newUser.name"
              placeholder="name"
              name="name"
              :error="errors.name"
            />

            <TextFieldGroup
              v-model="newUser.email"
              type="email"
              placeholder="Email Address"
              name="email"
              info="This site uses Gravatar so if you want a profile image, use a
                Gravatar email"
              :error="errors.email"
            />

            <TextFieldGroup
              v-model="newUser.password"
              placeholder="password"
              name="password"
              type="password"
              :error="errors.password"
            />

            <TextFieldGroup
              v-model="newUser.password2"
              placeholder="Confirm Password"
              name="password2"
              type="password"
              :error="errors.password2"
            />
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { maxHeaderSize } from "http";
import TextFieldGroup from "../components/common/TextFieldGroup";
export default {
  name: "register",
  components: {
    TextFieldGroup
  },
  data() {
    return {
      newUser: {
        name: "",
        email: "",
        password: "",
        password2: ""
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      this.$axios
        .post("/api/users/register", this.newUser)
        .then(res => {
          this.errors = {};
          this.$router.push("/login");
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });

      // 同源策略   只要不同源 就是跨域
      /** http://localhost:8080/
       * 1.请求头 http:// https:// file://
       * 2.域名   localhost / 127.0.0.1 / www.baidu.com / taobao.com
       * 3.端口号 :8080 :8081 :5000 :5001
       *
       * http://www.baidu.com:2042/music/yyqx
       * http://www.baidu.com:2042/bdbk/yyqx
       *
       * https://www.thenewstep.com/api/backend
       * https://www.thenewstep.com/api/frontend
       */
    }
  }
};
</script>


<style scoped>
</style>
