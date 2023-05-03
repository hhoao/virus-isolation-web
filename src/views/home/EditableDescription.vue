<template>
  <div>
    <span>{{ title }}</span>
    <template v-if="enableEdit">
      <a-input v-if="type === 'input'" />
    </template>
    <button onclick="enableEdit = true">编辑</button>
    <span> {{ value }}</span>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  interface Props {
    title: string;
    value: string;
    type: 'input' | 'switch';
  }
  withDefaults(defineProps<Props>(), {
    type: 'input',
  });
  const enableEdit = ref(false);
</script>

<style scoped></style>
