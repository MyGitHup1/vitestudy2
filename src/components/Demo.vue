<template>
  <p>Demo</p>
  <p>{{a}}</p>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";

function getData() {
  let list: Array<object> = [];
  for (let i = 0; i < 100000; i++) {
    list.push({a: i + 1 + "a", b: i + 1 + "b", i})
  }
  return list;
}

export default defineComponent({
  setup(props) {
    let state = reactive({a: 1})
    return {...toRefs(state)}
  }
})
</script>

<style scoped>

</style>
