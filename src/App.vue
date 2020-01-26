<template>
  <div id="app">
    <Navbar />
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
  body{
    background-color: #c2c2c2;
  }
  .body{
    margin-top: 2px;
  }
</style>
