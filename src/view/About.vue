<template>
  <p>about123123123123123</p>
  <p>{{ num }}</p>
  <render-fun></render-fun>
  <carbon-accessibility/>
  <ph-activity-light></ph-activity-light>
  <ph-apple-logo-fill ></ph-apple-logo-fill>
  <mdi-ab-testing></mdi-ab-testing>
  <audio autoplay  muted controls src="于洋 - 望爱却步.mp3"></audio>
</template>
<script>
import {ref} from "vue";
import RenderFun from "./RenderFun.vue";
export default {
  name: "About",
  components: {RenderFun},
  setup() {
    var num = ref(1)
    return {num}
  },
  created() {
    console.log("About create")
  },
  unmounted() {
    console.log("about xiaohuia")
  }
}
</script>

<style scoped>

</style>
