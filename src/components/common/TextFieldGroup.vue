<template>
  <div class="form-group">
    <input
      :type="type"
      class="form-control form-control-lg"
      :placeholder="placeholder"
      :name="name"
      :class="{'is-invalid':error}"
      :value="value"
      :disabled="disabled"
      @input="$emit('input',$event.target.value)"
    />
    <div v-if="error" class="invalid-feedback">{{error}}</div>
    <small v-if="info" class="form-text text-muted">{{info}}</small>
  </div>
</template>

<script>
export default {
  name: "TextFieldGroup",
  props: {
    type: {
      style: String,
      default: "text"
    },
    placeholder: String,
    name: String,
    value: String,
    error: String,
    info: String,
    disabled: Boolean
  }
};
</script>


<style scoped>
</style>
