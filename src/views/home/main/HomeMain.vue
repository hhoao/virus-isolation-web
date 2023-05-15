<template>
  <div class="h-screen flex flex-col mx-8 enter-x">
    <home-main-top-bar />
    <home-main-article-list />
  </div>
</template>

<script lang="ts" setup>
  import HomeMainTopBar from '/@/views/home/main/HomeMainTopBar.vue';
  import HomeMainArticleList from '/@/views/home/main/HomeMainArticleList.vue';
</script>

<style></style>
