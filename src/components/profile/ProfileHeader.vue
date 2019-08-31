<template>
  <!-- Header -->
  <div class="row">
    <div class="col-md-12">
      <div class="card card-body bg-info text-white mb-3">
        <div class="row">
          <div class="col-4 col-md-3 m-auto">
            <img class="rounded-circle" :src="profile.user.avatar" alt />
          </div>
        </div>
        <div class="text-center">
          <h1 class="display-4 text-center">{{profile.user.name}}</h1>
          <p class="lead text-center">{{profile.status}}</p>
          <p v-if="profile.location">{{profile.location}}</p>
          <p>
            <a v-if="profile.website" class="text-white p-2" :href="profile.website">
              <i class="fa fa-globe fa-2x"></i>
            </a>
            <a v-if="profile.social && profile.social.QQ" class="text-white p-2" href="#">
              <i class="fa fa-qq fa-2x"></i>
            </a>
            <a v-if="profile.social && profile.social.wechat" class="text-white p-2" href="#">
              <i class="fa fa-wechat fa-2x"></i>
            </a>
            <a v-if="profile.social && profile.social.tengxunkt" class="text-white p-2" href="#">
              <i class="fa fa-linkedin fa-2x"></i>
            </a>
            <a v-if="profile.social && profile.social.wangyikt" class="text-white p-2" href="#">
              <i class="fa fa-instagram fa-2x"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: Object
  }
};
</script>

<style  scoped>
</style>