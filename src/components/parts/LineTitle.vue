<template>
    <div>
        <v-toolbar prominent color="rgb(0, 195, 0,0.5)">
        <v-toolbar-title>おばあちゃん</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="ml-1" variant="text" icon="mdi-magnify" @click="click"></v-btn>
        <v-btn class="ml-1" variant="text" icon="mdi-phone">
        </v-btn>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-toolbar>
    </div>
</template>  
    
<script lang="ts">
    export default {
    name: 'LineTitle',
    methods:{
        click: function():void{
            this.$emit("click");
        },
    }
    }
</script>