<template>
  <nav id="navbar">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link :to="{name:'about'}">About</router-link>
      </li>
      <li>
        <router-link to="/services">Services</router-link>
      </li>
      <li>
        <router-link to="/portfolio">Portfolio</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <ul>
      <li v-for="(id,index) in userIds" :key="index">
        <router-link :to="{name:'user',params:{user_id: id}}">
          <span>Profile {{id}}</span>
        </router-link>
      </li>
    </ul>
    <hr style="border:red solid 1px">
    <ul>
      <li>
        <button @click="goBack">Go Back</button>
      </li>
      <li>
        <button @click="goHome">Go Home</button>
      </li>
      <li>
        <button @click="goForward">Go Forward</button>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
  name: "Navbar",
  data() {
    return {
      userIds: ['talib', 'shakib', 'mim'],
      // userIds:''
    };
  },
  // ================================
  // FOR NUMBER OF LIST
  // ================================
  // mounted(){
  //   this.userIds = 25
  // },



  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    }
  }
};
</script>

<style lang="scss" scoped>
#navbar {
  background: rgb(62, 18, 104);
  position: fixed;
  height: 160px;
  right: 0;
  left: 0;
  ul {
    list-style-type: none;
    li {
      display: inline-block;
      padding: 15px;
    }
    a {
      text-decoration: none;
      font-weight: bold;
      color: #f9fbfd;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>

