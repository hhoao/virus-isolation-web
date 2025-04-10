<template>
  <div ref="container" class="m-20px">
    <app-logo class="fixed z-10" height="30" />
    <div class="my-4"> </div>
    <a-row v-if="!getIsMobile" :gutter="20">
      <a-col :span="4" />
      <a-col :span="12">
        <div class="font-bold text-2xl mt-2 mb-10">文章列表</div>
        <article-content />
      </a-col>
      <a-col :span="4">
        <article-sidebar />
      </a-col>
      <a-col :span="4" />
    </a-row>
    <article-content v-else />
  </div>
</template>

<script setup lang="ts">
  import ArticleContent from './ArticleContent.vue';
  import ArticleSidebar from './ArticleSidebar.vue';
  import { ref } from 'vue';
  import { useAppInject } from '/@/hooks/web/useAppInject';
  import AppLogo from '/@/components/Application/src/AppLogo.vue';

  const { getIsMobile } = useAppInject();
  const container = ref(null);
</script>

<style scoped></style>
