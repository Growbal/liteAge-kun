<template>
    <div>
        <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-toolbar-title>おばあちゃん</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="ml-1" variant="text" icon="mdi-magnify"></v-btn>
        <v-btn class="ml-1" variant="text" icon="mdi-phone" @click="click">
        </v-btn>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-toolbar>
    </div>
</template>  
    
<script lang="ts">
    export default {
    name: 'LineTitle'
    }
</script>