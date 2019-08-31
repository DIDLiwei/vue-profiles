<template>
  <!-- 个人经验 -->
  <div>
    <h4 class="mb-2">教育经历</h4>
    <table class="table">
      <thead>
        <tr>
          <th>学校</th>
          <th>学历</th>
          <th>专业</th>
          <th>学习时间</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="edu in education" :key="edu._id">
          <td>{{edu.school}}</td>
          <td>{{edu.degree}}</td>
          <td>{{edu.fieldofstudy}}</td>
          <td>{{edu.from}} ~ {{edu.to ? edu.to : "在校"}}</td>
          <td>
            <button @click="handleEduDelete(edu._id)" class="btn btn-danger">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    education: Array
  },
  methods: {
    handleEduDelete(id) {
      // 注册事件
      this.$emit("handleEduDelete", id);
    }
  }
};
</script>

<style scoped>
</style>