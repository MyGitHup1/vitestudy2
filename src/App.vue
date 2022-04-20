<template>
  <!--  <p>-->
  <!--    <router-link to="/">Go to Home</router-link>-->
  <!--    |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </p>-->
  <p>
    <button @click="xiaohui('/')">X</button>
    <button @click="to('/')">Home</button>
  </p>
  <p>
    <button @click="xiaohui('/about')">X</button>
    <button @click="to('/about')">About</button>
  </p>
  <router-view v-slot="{ Component }">
    <keep-alive :include="cached">
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>
<script setup>
import {reactive} from "vue";
import {useRouter} from "vue-router";

var router = useRouter()
var cached = reactive([])

function xiaohui(name) {
  var name2 = translate(name)
  var index = cached.findIndex(item => item === name2);
  cached.splice(index, 1)
}

function to(name) {
  var name2 = translate(name)
  var index = cached.findIndex(item => item === name2);
  if (index === -1) {
    cached.push(name2);
  }
  router.push(name)
}

function translate(name) {
  if (name === "/")
    return "Home"
  if (name === "/about")
    return "About"
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.icon{
  color: #42b983;
}
</style>
