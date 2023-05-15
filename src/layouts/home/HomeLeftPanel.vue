<template>
  <div class="top-0 p-8 flex flex-col h-full">
    <div class="h-full">
      <app-logo width="42" />
      <a-divider />
      <a-input-search />
      <ul>
        <li v-for="item of navigateItemList" :key="item.id" class="mt-6">
          <a-divider v-if="item.hasDivide" />
          <a
            @click="item.onClick()"
            class="pl-2 py-1 border-0 border-l-4 border-solid text-gray-700"
            :class="{
              'border-green-400': getHomeStatus === item.id,
              'font-bold': getHomeStatus === item.id,
              'border-white': getHomeStatus !== item.id,
              'hover:border-gray-200': getHomeStatus !== item.id,
            }"
          >
            {{ item.name }}</a
          >
        </li>
      </ul>
      <a-divider />
    </div>
    <div>
      <user-dropdown />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { HomeStatusEnum, useHomeStatus } from '/@/views/home/useHome';
  import UserDropdown from './user-dropdown/index.vue';
  import AppLogo from '@/components/Application/src/AppLogo.vue';
  // import AppLogo from '/@/components/Application/src/AppLogo.vue';

  const navigateItemList = [
    {
      id: HomeStatusEnum.MAIN,
      name: '主页',
      onClick: () => setHomeStatus(HomeStatusEnum.MAIN),
    },
    {
      id: HomeStatusEnum.ORGANIZATION,
      name: '组织',
      onClick: () => setHomeStatus(HomeStatusEnum.ORGANIZATION),
    },
    {
      id: HomeStatusEnum.PERSON,
      name: '个人',
      onClick: () => setHomeStatus(HomeStatusEnum.PERSON),
    },
    {
      id: HomeStatusEnum.SETTING,
      name: '设置',
      hasDivide: true,
      onClick: () => setHomeStatus(HomeStatusEnum.SETTING),
    },
  ];
  const { getHomeStatus, setHomeStatus } = useHomeStatus();
</script>

<style scoped></style>
