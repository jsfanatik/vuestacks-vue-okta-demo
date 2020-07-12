<template>
  <div>
    <nav class="green">
      <div class="nav-wrapper">
        <span class="brand-logo">VueStacks Chat App</span>
        <ul class="right">
          <li><a @click.prevent="login" v-if="!activeUser">Login</a></li>
          <li><a @click.prevent="logout" v-if="activeUser">Logout</a></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeUser: null
    }
  },
  async created () {
    await this.refreshActiveUser()
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    '$route': 'refreshActiveUser'
  },
  methods: {
    login () {
      this.$auth.loginRedirect()
    },
    async refreshActiveUser () {
      this.activeUser = await this.$auth.getUser()
    },
    async logout () {
      await this.$auth.logout()
      await this.refreshActiveUser()
      this.$router.push('/loggedout')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 65px;
}
body {
  background-color: #EAEDED;
}
.custom-contain {
  margin-top: 100px;
}
</style>
