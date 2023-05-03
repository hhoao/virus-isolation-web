<template>
  <div class="h-screen flex flex-col px-8 enter-x">
    <div
      ref="headerBarRef"
      class="w-full h-1/3 grid justify-self-center grid-cols-5 gap-4 text-center row-span-1"
    >
      <div class="lg:col-span-2 h-full flex flex-col">
        <home-organization-list />
      </div>
      <div class="h-full flex flex-col lg:col-span-3">
        <home-organization-action-bar />
      </div>
    </div>
    <home-organization-action-accounts-info
      v-if="getOrganizationActionStatus === OrganizationActionStatus.ACCOUNTS_INFO"
    />
    <home-organization-action-organization-info
      v-else-if="getOrganizationActionStatus === OrganizationActionStatus.ORGANIZATION_INFO"
    />
  </div>
</template>

<script setup lang="ts">
  import HomeOrganizationActionBar from '/@/views/home/HomeOrganizationActionBar.vue';
  import HomeOrganizationList from '/@/views/home/HomeOrganizationList.vue';
  import { OrganizationActionStatus, useHomeOrganization } from '/@/views/home/useHomeOrganization';
  import HomeOrganizationActionAccountsInfo from '/@/views/home/HomeOrganizationActionAccountsInfo.vue';
  import HomeOrganizationActionOrganizationInfo from '/@/views/home/HomeOrganizationActionOrganizationInfo.vue';
  import { onMounted, ref, watch } from 'vue';

  const { getOrganizationActionStatus, setHeaderBarRef } = useHomeOrganization();
  const headerBarRef = ref(null);

  onMounted(() => {
    watch(
      () => headerBarRef,
      (value) => {
        console.log(value.value);
        setHeaderBarRef(value.value);
      },
      { immediate: true },
    );
    // setHeaderBarRef(headerBarRef.value);
  });
</script>

<style scoped></style>
