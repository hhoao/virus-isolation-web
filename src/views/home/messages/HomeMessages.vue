<template>
  <div class="grid grid-cols-6 h-screen">
    <div class="col-span-1">
      <home-messages-organization-list />
    </div>
    <div class="flex flex-col h-screen col-span-5 overflow-y-auto">
      <div class="bg-white text-xl pl-4 py-2 border-x-0 border-y-1 border-solid">
        <a-avatar :src="getCurrentOrganization?.avatar" />
        {{ getCurrentOrganization?.name }}
      </div>
      <div class="overflow-y-scroll h-full bg-gray-100 text-center">
        <a-spin class="m-auto" :spinning="listLoading">
          <div
            v-for="organizationMessage in organizationMessages"
            :key="organizationMessage.id"
            class="m-10 mt-0 text-left"
          >
            <div class="text-center mb-4">{{ dayjs(organizationMessage.createTime) }}</div>
            <div>
              <a-avatar :src="organizationMessage.avatar" />
              <span class="ml-2"> {{ organizationMessage.source }}: </span>
            </div>
            <div class="bg-white rounded-lg py-2 px-2 my-2">
              <a class="text-blue mr-2">@{{ organizationMessage.target }} </a>
              <span>{{ organizationMessage.content }}</span>
            </div>
          </div>
        </a-spin>
      </div>
      <div>
        <a-textarea :rows="4" class="border-0" style="border-width: 1px 0; border-radius: 0" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';
  import { getJoinedOrganizationMessages } from '/@/api/account';
  import { OrganizationJoinMessageModel } from '/@/api/model/MessageModel';
  import HomeMessagesOrganizationList from '/@/views/home/messages/HomeMessagesOrganizationList.vue';
  import dayjs from 'dayjs';
  import { useHomeMessages } from '/@/views/home/messages/useHomeMessages';

  const { getCurrentOrganization } = useHomeMessages();

  const listLoading = ref(true);
  const organizationMessages = ref<OrganizationJoinMessageModel[]>([]);
  onMounted(() => {
    watch(
      () => getCurrentOrganization.value,
      (value) => {
        if (value != null && value.id) {
          getJoinedOrganizationMessages(value.id).then((res) => {
            organizationMessages.value = res.list;
            listLoading.value = false;
          });
        }
      },
      { immediate: true },
    );
  });
</script>

<style scoped></style>
