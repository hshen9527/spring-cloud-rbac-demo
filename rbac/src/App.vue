<template>
  <div id="app">
    <!-- <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
    </ul> -->
        <router-view/>
      <!-- <app-header></app-header>
      <app-footer></app-footer> -->

  </div>
  
</template>

<script>
// import Header from './components/Header'
// import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
    // "app-header": Header,
    // "app-footer": Footer
  }
}
</script>

<style>
</style>
