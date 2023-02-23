<template>
    <v-app-bar color="#3C5556">
        <v-app-bar-title>
            <div class="d-inline-flex" style="line-height: 64px">
                <div>
                    <router-link
                        to="/"
                        class="headline text-decoration-none text-white text-capitalize"
                    >
                        BRIGIT
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
                color="white"
            >Home</v-btn>

            <!-- Route to Image Processing Page -->
            <v-btn
                variant="text"
                color="white"
            >Process Image</v-btn>

            <!-- Route to About Page -->
            <v-btn
                variant="text"
                color="white"
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