<template>
  <!-- Profile -->
  <div class="row">
    <div v-if="experience.length > 0" class="col-md-6">
      <h3 class="text-center text-info">工作经验</h3>
      <ul class="list-group">
        <li v-for="(exp,index) in experience" :key="index" class="list-group-item">
          <h4>{{exp.company}}</h4>
          <p>{{exp.from}} ~ {{exp.to ? exp.to : "至今"}}</p>
          <p>
            <strong>职位:</strong>
            {{exp.title}}
          </p>
          <p>
            <strong>描述:</strong>
            {{exp.description}}
          </p>
        </li>
      </ul>
    </div>
    <div v-if="education.length > 0" class="col-md-6">
      <h3 class="text-center text-info">教育经历</h3>
      <ul class="list-group">
        <li v-for="(edu,index) in education" :key="index" class="list-group-item">
          <h4>{{edu.school}}</h4>
          <p>{{edu.from}} ~ {{edu.to ? edu.to : "在校"}}</p>
          <p>
            <strong>学历:</strong>
            {{edu.degree}}
          </p>
          <p>
            <strong>专业:</strong>
            {{edu.fieldofstudy}}
          </p>
          <p></p>
          <p>
            <strong>描述:</strong>
            {{edu.description}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    education: Array,
    experience: Array
  }
};
</script>

<style  scoped>
</style>