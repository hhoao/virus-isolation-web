<template>
  <div class="h-screen flex flex-col px-8 enter-x">
    <div
      ref="headerBarRef"
      class="w-full h-1/3 grid justify-self-center grid-cols-5 gap-4 text-center row-span-1"
    >
      <div class="col-span-2 h-full flex flex-col">
        <home-organization-list />
      </div>
      <div class="h-full flex flex-col col-span-3">
        <home-organization-action-bar />
      </div>
    </div>
    <home-organization-action-accounts-info
      v-if="getOrganizationActionStatus === OrganizationActionStatus.ACCOUNTS_INFO"
    />
    <home-organization-action-organization-info
      v-else-if="getOrganizationActionStatus === OrganizationActionStatus.ORGANIZATION_INFO"
    />
    <home-organization-action-sign-in />
    <home-organization-health-clock />
  </div>
</template>

<script setup lang="ts">
  import { OrganizationActionStatus, useHomeOrganization } from './useHomeOrganization';
  import { onMounted, ref, watch } from 'vue';
  import HomeOrganizationActionAccountsInfo from '/@/views/home/organization/HomeOrganizationActionAccountsInfo.vue';
  import HomeOrganizationActionOrganizationInfo from '/@/views/home/organization/HomeOrganizationActionOrganizationInfo.vue';
  import HomeOrganizationList from '/@/views/home/organization/HomeOrganizationList.vue';
  import HomeOrganizationActionBar from '/@/views/home/organization/HomeOrganizationActionBar.vue';
  import HomeOrganizationActionSignIn from '/@/views/home/organization/HomeOrganizationActionSignIn.vue';
  import HomeOrganizationHealthClock from '/@/views/home/organization/HomeOrganizationHealthClock.vue';

  const { getOrganizationActionStatus, setHeaderBarRef } = useHomeOrganization();
  const headerBarRef = ref(null);

  // methods.setModalProps();
  onMounted(() => {
    watch(
      () => headerBarRef,
      (value) => {
        setHeaderBarRef(value.value);
      },
      { immediate: true },
    );
    // setHeaderBarRef(headerBarRef.value);
  });
</script>

<style scoped></style>
