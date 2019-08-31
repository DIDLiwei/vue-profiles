<template>
  <div class="section add-experience">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <a class="btn btn-light" @click.prevent="$router.go(-1)">返回</a>
          <h1 class="display-4 text-center">添加个人经历</h1>
          <p class="lead text-center">有关于工作的任何经验</p>
          <small class="d-block pb-3">* 为必填项</small>

          <form @submit.prevent="handleSubmit">
            <TextFieldGroup
              placeholder="* 工作内容"
              name="title"
              v-model="msgInfo.title"
              :error="errors.title"
            />
            <TextFieldGroup
              placeholder="* 公司"
              name="company"
              v-model="msgInfo.company"
              :error="errors.company"
            />

            <TextFieldGroup
              placeholder="地点"
              name="location"
              v-model="msgInfo.location"
              :error="errors.location"
            />

            <h6>开始时间</h6>
            <TextFieldGroup type="date" name="from" v-model="msgInfo.from" :error="errors.from" />

            <h6>结束时间</h6>
            <TextFieldGroup
              :disabled="msgInfo.current"
              type="date"
              name="to"
              v-model="msgInfo.to"
              :error="errors.to"
            />

            <div class="form-check mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                name="current"
                v-model="msgInfo.current"
                id="current"
              />
              <label class="form-check-label" for="current">至今</label>
            </div>

            <TextAreaGroup
              placeholder="工作描述"
              name="description"
              v-model="msgInfo.description"
              :error="errors.description"
              info="更多关于工作经验的描述"
            />

            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextFieldGroup from "../components/common/TextFieldGroup";
import TextAreaGroup from "../components/common/TextAreaGroup";
export default {
  components: { TextFieldGroup, TextAreaGroup },
  methods: {
    handleSubmit() {
      this.$axios.post("/api/profile/experience", this.msgInfo).then(res => {
        console.log(res.data);
        this.errors = {};
        this.$router.push("/dashboard");
      })
      .catch(err => {
          if(err.response.data){
              this.errors = err.response.data;
          }
      })
    }
  },
  data() {
    return {
      msgInfo: {
        title: "",
        company: "",
        location: "",
        from: "",
        to: "",
        current: false,
        description: ""
      },
      errors: {}
    };
  }
};
</script>
