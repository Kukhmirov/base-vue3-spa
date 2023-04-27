<template>
  <div>
    <h1 v-text="title" />
    <p v-text="description" />
    <p>Count: {{ count }}</p>
    <button @click="incrementCount">Increment</button>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'App',
  setup() {
    const count = ref(0);
    const title = 'Базовая комлпектация';
    const description = 'Содержит: Vue 3, Axios, vue-router, eslintrc, учтановленый sass';
    
    const incrementCount = () => {
      count.value++;
    };

    return {
      count,
      title,
      description,
      incrementCount,
    };
  },

};
</script>

<style lang="scss" src="./app.scss"></style>

