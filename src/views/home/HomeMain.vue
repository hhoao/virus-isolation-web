<template>
  <div class="h-screen flex flex-col mx-8 enter-x">
    <home-main-top-bar />
    <home-main-article-list />
  </div>
</template>

<script lang="ts" setup>
  import HomeMainArticleList from '/@/views/home/HomeMainArticleList.vue';
  import HomeMainTopBar from '/@/views/home/HomeMainTopBar.vue';
</script>

<style></style>
