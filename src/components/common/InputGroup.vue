<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">
        <i :class="icon"></i>
      </span>
    </div>
    <input
      :type="type"
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
  name: "InputGroup",
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
    icon: String
  }
};
</script>


<style scoped>
</style>
