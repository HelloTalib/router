<template>
  <div class="User">
    <h1>This is an user {{userId}}</h1>
  </div>
</template>
<script>
export default {
  name: "Userprofile",
  data() {
    return {
      userId: this.$route.params.user_id
    };
  },
  methods:{
    updateId(){
      this.userId = this.$route.params.user_id
    }
  },
  
  watch:{
    $route:'updateId'
  }
};
</script>
