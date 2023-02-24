<template>
    <v-app-bar :elevation="1" style="padding: 4px; margin-top: 10px">
        <v-app-bar-title>
            <div class="d-inline-flex" style="line-height: 64px" color="#9c6142">
                <div style="color: #9c6142">
                    <router-link
                        to="/"
                        class="headline text-decoration-none text-white text-capitalize"
                    >
                        <span style="color: #6b6060">KATABA</span>
                        <img style="height: 28px; width: 24px" src="../assets/write_logo.png">
                    </router-link>
                </div>
            </div>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        
        <v-toolbar-items>
            <!-- Route to Home Page -->
            <v-btn
                variant="text"
                color="#6b6060"
            >Home</v-btn>

            <!-- Route to Image Processing Page -->
            <v-btn
                variant="text"
                color="#6b6060"
            >Process Image</v-btn>

            <!-- Route to About Page -->
            <v-btn
                variant="text"
                color="#6b6060"
            >About</v-btn>
        </v-toolbar-items>

    </v-app-bar>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<script setup>
import routes from "@/router";
</script>