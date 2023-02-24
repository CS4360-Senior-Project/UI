<template>
    <v-footer class="text-caption text-uppercase flex-grow-0" :elevation="2">
        <div style="color: #6b6060">
            &copy; {{ getDate }} Team Data - UI v{{ appVersion }}
        </div>
    </v-footer>
</template>

<script>
    export default {
        name: 'AppFooter'
    }
</script>

<script setup>
import {version} from "../../package.json"

const appVersion = version
console.log("APP VERSION: ", appVersion)

const getDate = new Date().getFullYear()
</script>