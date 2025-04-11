<template>
  <a-anchor-link :key="item.name" v-for="item in items" :href="item.path" :title="item.name">
    <article-anchor-link-item
      v-if="item.children && item.children.length != 0"
      :items="item.children"
    />
  </a-anchor-link>
</template>

<script setup lang="ts">
  import { AnchorLink } from '/@/utils/outline';

  defineProps({
    items: { type: Object as PropType<AnchorLink[]> },
  });
</script>

<style scoped></style>
