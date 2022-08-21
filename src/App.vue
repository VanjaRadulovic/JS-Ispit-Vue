<template>
  <div id="app">
    <div>
      <b-navbar toggleable="sm" type="dark" variant="dark">
        <b-navbar-brand to="/">UsTube</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item-dropdown text="Categories" right>
              <b-nav-item to="/kanals">Channels</b-nav-item>
              <b-nav-item to="/videos">Videos</b-nav-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>


          <b-navbar-nav class="ml-auto">

            <b-nav-item v-if="!token" to="/register">Register</b-nav-item>
            <b-nav-item v-if="!token" to="/login">Log In</b-nav-item>
            <b-nav-item v-else @click="logout()">Log Out</b-nav-item>



          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: "App",
  data() {
    return {
      searchQuery: "",
      // departments: []
    }
  },
  computed: {
    ...mapState([
      'token'
    ])
  },
  mounted() {
    // fetch()
    //   .then(o => o.json)
    //   .then(res => this.departments = res.departments);
    if(localStorage.token){
      this.setToken(localStorage.token);
    }
  },
  methods: {
    ...mapMutations([
      'removeToken',
      'setToken'
    ]),
    search(e){
      e.preventDefault();
      // const query = this.searchQuery;
      // this.searchQuery = "";
      // this.$router.push({name: 'Search', query: {q: query}})
    },
    logout(){
      this.removeToken();
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #051627;
  
}
.navbar-dark .navbar-nav .nav-link {
    color: rgba(182, 4, 4, 0.5) !important;
}
</style>