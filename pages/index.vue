<template>
  <div class="page-index">
    <BackGround />
    <Home class="absolute"/>
  </div>
</template>
<script lang="ts" setup>
import Home from './home/index.vue';
import BackGround from './background/index.vue';
</script>
<style>
.page-index {
  max-height: 100vh;
}
</style>
