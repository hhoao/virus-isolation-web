<template>
  <div class="w-full h-1/3 grid grid-cols-5 gap-4 text-center row-span-1">
    <div class="lg:col-span-3 flex flex-col overflow-auto">
      <div class="my-4 flex justify-between">
        <span class="font-bold text-xl">疫情信息</span>
        <a class="float-right self-end">详细信息 ></a>
      </div>
      <div class="border-2 border-solid border-gray-200 rounded-lg overflow-y-scroll">
        {{ covid19Status }}
      </div>
    </div>
    <div class="lg:col-span-2 flex flex-col overflow-auto">
      <div class="my-4 flex justify-between">
        <span class="font-bold text-xl">组织消息</span>
        <a class="float-right self-end">详细信息 ></a>
      </div>
      <div class="border-2 border-solid border-gray-200 rounded-lg overflow-y-scroll">
        {{ organizationMessages }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { getCovid19Status } from '/@/api/health';
  import { onMounted, ref } from 'vue';
  import { getJoinedOrganizationsMessages } from '/@/api/account';
  import { OrganizationJoinMessageModel } from '/@/api/model/MessageModel';

  const covid19Status = ref('');
  const organizationMessages = ref<OrganizationJoinMessageModel[]>([]);

  onMounted(() => {
    getCovid19Status().then((res) => {
      covid19Status.value = res;
    });
    getJoinedOrganizationsMessages().then((res) => {
      organizationMessages.value = res.list;
    });
  });
</script>

<style scoped></style>
