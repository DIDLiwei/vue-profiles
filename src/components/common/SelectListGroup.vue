<template>
  <div class="form-group">
    <select
      class="form-control form-control-lg"
      :class="{'is-invalid':error}"
      :name="name"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
      <option v-for="(option,index) in options" :key="index" :value="option.value">{{option.value}}</option>
    </select>
    <div v-if="error" class="invalid-feedback">{{error}}</div>
    <small v-if="info" class="form-text text-muted">{{info}}</small>
  </div>
</template>

<script>
export default {
  name: "SelectListGroup",
  props: {
    name: String,
    value: String,
    error: String,
    info: String,
    options: Array
  }
};
</script>


<style scoped>
</style>
