<template>
  <div class="form-group">
    <textarea
      class="form-control form-control-lg"
      :placeholder="placeholder"
      :name="name"
      :class="{'is-invalid':error}"
      :value="value"
      @input="$emit('input',$event.target.value)"
    />
    <div v-if="error" class="invalid-feedback">{{error}}</div>
    <small v-if="info" class="form-text text-muted">{{info}}</small>
  </div>
</template>

<script>
export default {
  name: "TextAreaGroup",
  props: {
    placeholder: String,
    name: String,
    value: String,
    error: String,
    info: String
  }
};
</script>


<style scoped>
</style>
