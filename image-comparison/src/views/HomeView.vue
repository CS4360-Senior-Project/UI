<script setup>
import Directions from '../components/main-page/Directions.vue'
import UploadImages from '../components/main-page/UploadImages.vue';

</script>

<template>
  <main>
    <v-row>
      <v-col  cols="6">
        <Directions/>
      </v-col>
      <v-col  cols="5">
        <UploadImages/>
      </v-col>
    </v-row>
  </main>
</template>
