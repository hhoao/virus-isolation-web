<template>
  <div class="w-3/5 mx-20 mt-10 container">
    <article-content :id="id" />
    <a-divider />
    <article-left-right />
    <a-divider />
    <div class="divide-y"></div>
    <div class="clear-both"></div>
    <article-comment />
  </div>
</template>

<script lang="ts" setup>
  import ArticleComment from '/@/views/article/ArticleComment.vue';
  import ArticleContent from '/@/views/article/ArticleContent.vue';
  import { onMounted } from 'vue';
  import ArticleLeftRight from '/@/views/article/ArticleLeftRight.vue';

  defineProps({
    id: String,
  });
  onMounted(() => {});
</script>

<style lang="less"></style>
