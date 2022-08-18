<template >
    <Narbar />
    <router-view />
</template>
<script>
import Narbar from './router/index'


export default {
    name: "App",
    components: {
        Narbar
    }
}
</script>
<style>
#app {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

}
</style>