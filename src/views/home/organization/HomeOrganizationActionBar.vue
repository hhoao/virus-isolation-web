<template>
  <div class="my-4 text-left">
    <span class="font-bold text-xl">组织功能</span>
    <span class="pl-2">| 管理</span>
  </div>
  <div class="border-2 border-solid rounded-lg px-4 py-2 h-full grid grid-cols-7">
    <div v-for="item of getToolItemList()" :key="item.name" class="col-span-1">
      <!--      <div-->
      <!--        class="hover:bg-gray-100 border border-solid p-2 h-14 m-auto w-14 grid content-center rounded-md shadow-md cursor-pointer"-->
      <!--        "-->
      <!--      >-->
      <div @click="setActionStatus(item.status)" class="cursor-pointer">
        <svg-icon :name="item.icon" :size="42" class="hover:bg-gray-100" />
        <!--      </div>-->
        <p>{{ item.name }}</p>
      </div>
    </div>
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
