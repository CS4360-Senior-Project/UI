<template>
    <v-app-bar :elevation="1" style="padding: 4px; margin-top: 10px" color="#2A93D5">
        <v-app-bar-title>
            <div class="d-inline-flex" style="line-height: 64px" color="#2A93D5">
                <div style="color: #2A93D5">
                    <router-link
                        to="/"
                        class="headline text-decoration-none text-white text-capitalize"
                    >
                        <span style="color: white">KATABA</span>
                        <img style="height: 28px; width: 24px" src="../assets/write_logo.png">
                    </router-link>
                </div>
            </div>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        
        <v-toolbar-items>
            <!-- Route to Home Page -->
            <v-btn variant="text" color="white" >
                <router-link to="/" class="headline text-decoration-none text-white text-capitalize">Home</router-link>
            </v-btn>

            <!-- Route to Image Processing Page -->
            <v-btn variant="text" color="white">
                <router-link to="/image-processing" class="headline text-decoration-none text-white text-capitalize">Process Image</router-link>
            </v-btn>  

            <!-- Route to About Page -->
            <v-btn variant="text" color="white">
                <router-link to="/about" class="headline text-decoration-none text-white text-capitalize">About</router-link>
            </v-btn>
        </v-toolbar-items>

    </v-app-bar>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<script setup>

</script>