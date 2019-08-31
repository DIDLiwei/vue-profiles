<template>
  <div class="loading">
    <img src="../../assets/loading.gif" />
  </div>
</template>

<script>
export default {
  name: "loading"
};
</script>


<style scoped>
.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.loading img {
  position: absolute;
  width: 50px;
  height: 50px;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
}
</style>
