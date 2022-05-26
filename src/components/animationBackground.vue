<template>
    <div id="app">
        <particles-bg type="lines" :canvas="{backgroundColor:'#888'}" :bg="true"/>
    </div>
</template>

<script>
    import { ParticlesBg } from "particles-bg-vue";
    export default {
        name: "animationTest",
        components: {
            ParticlesBg
        },
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
