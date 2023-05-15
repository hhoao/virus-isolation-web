<template>
  <div ref="container" class="grid h-full" style="grid-template-columns: 1fr 1280px">
    <home-left-panel />
    <page-layout />
    <home-main v-if="getHomeStatus === HomeStatusEnum.MAIN" />
    <home-organization v-else-if="getHomeStatus === HomeStatusEnum.ORGANIZATION" />
    <home-person v-else-if="getHomeStatus === HomeStatusEnum.PERSON" />
    <home-settings v-else-if="getHomeStatus === HomeStatusEnum.SETTING" />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import HomeLeftPanel from '/@/views/home/HomeLeftPanel.vue';
  import { HomeStatusEnum, useHomeStatus } from '/@/views/home/useHome';
  import HomeOrganization from '/@/views/home/HomeOrganization.vue';
  import HomePerson from '/@/views/home/HomePerson.vue';
  import HomeSettings from '/@/views/home/HomeSettings.vue';
  import HomeMain from '/@/views/home/HomeMain.vue';
  import PageLayout from '/@/layouts/page/index.vue';

  const { getHomeStatus } = useHomeStatus();
  const container = ref(null);
</script>

<style scoped></style>
