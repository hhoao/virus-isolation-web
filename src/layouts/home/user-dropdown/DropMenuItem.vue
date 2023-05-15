<template>
  <a-menu-item :key="itemKey">
    <span class="flex items-center">
      <Icon :icon="icon" class="mr-1" />
      <span>{{ text }}</span>
    </span>
  </a-menu-item>
</template>
<script setup lang="ts">
  import { computed, getCurrentInstance } from 'vue';
  import Icon from '/@/components/Icon/index';

  const props = defineProps({
    itemKey: String,
    text: String,
    icon: String,
  });
  const instance = getCurrentInstance();
  const itemKey = computed(() => props.itemKey || instance?.vnode?.props?.key);
</script>
