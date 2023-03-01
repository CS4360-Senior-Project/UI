<template>
  <v-app style="background-color: #D1EBFF" >
    <!--v-parallax src="https://i0.wp.com/www.knoxalliance.store/wp-content/uploads/2017/05/light-color-background-images-for-website-top-hd-images-for-free-light-color-background-images-for-website-1-1024x768.jpg?ssl=1"></v-parallax-->
    <AppHeader/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import AppHeader from './components/app-header.vue'
  import AppFooter from './components/app-footer.vue'
</script>