<template>
  <div class="scroll-smooth enter-x">
    <left-outlined
      class="m-4 p-2 hover:bg-gray-200 fixed"
      :style="{ fontSize: '24px' }"
      @click="getBack()"
    />
    <a-anchor class="left-4/5 fixed w-1/5 pt-10">
      <article-anchor-link-item v-if="headers.length != 0" :items="headers" />
    </a-anchor>
    <div class="w-3/5 mx-1/5 pt-10 container">
      <a-skeleton :loading="!markdownViewerLoaded" />
      <article-content :id="id" @onMarkdownViewerLoaded="onMarkdownViewerLoaded" />
      <a-divider />
      <article-left-right />
      <a-divider />
      <div class="divide-y"></div>
      <div class="clear-both"></div>
      <article-comment />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { LeftOutlined } from '@ant-design/icons-vue';
  import ArticleComment from '/@/views/article/ArticleComment.vue';
  import ArticleContent from '/@/views/article/ArticleContent.vue';
  import { onMounted, ref } from 'vue';
  import ArticleLeftRight from '/@/views/article/ArticleLeftRight.vue';
  import ArticleAnchorLinkItem from '/@/views/article/ArticleAnchorLinkItem.vue';
  import { AnchorLink, resolveAnchorLinks } from '/@/utils/outline';
  import { useGo } from '/@/hooks/web/usePage';

  defineProps({
    id: String,
  });

  const headers = ref<AnchorLink[]>([]);
  const markdownViewerLoaded = ref(false);
  function onMarkdownViewerLoaded() {
    headers.value = resolveAnchorLinks();
    markdownViewerLoaded.value = true;
  }

  const go = useGo();
  function getBack() {
    go('/home');
  }

  onMounted(() => {});
</script>

<style lang="less"></style>
