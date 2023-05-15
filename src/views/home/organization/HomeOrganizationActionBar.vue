<template>
  <div class="my-4 text-left">
    <span class="font-bold text-xl">组织功能</span>
    <span class="pl-2">| 管理</span>
  </div>
  <div class="border-2 border-solid rounded-lg px-4 py-2 flex h-full gap-5">
    <div v-for="item of getToolItemList()" :key="item.name">
      <div
        class="hover:bg-gray-100 border border-solid p-2 h-14 w-14 grid content-center rounded-md shadow-md cursor-pointer"
        @click="setActionStatus(item.status)"
      >
        <svg-icon :name="item.icon" :size="36" />
      </div>
      <span>{{ item.name }}</span></div
    >
  </div>
</template>

<script setup lang="ts">
  import SvgIcon from '/@/components/Icon/src/SvgIcon.vue';
  import {
    OrganizationActionStatus,
    useHomeOrganization,
  } from '/@/views/home/organization/useHomeOrganization';

  const { getToolItemList, setOrganizationActionStatus, openSignInModal, openHealthClockModal } =
    useHomeOrganization();
  function setActionStatus(status: OrganizationActionStatus) {
    if (status === OrganizationActionStatus.SIGN_IN) {
      openSignInModal();
    } else if (status === OrganizationActionStatus.HEALTH_CLOCK) {
      openHealthClockModal();
    } else {
      setOrganizationActionStatus(status);
    }
  }
</script>

<style scoped></style>
