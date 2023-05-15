<template>
  <div class="h-full border-solid border-y-0 border-x-2 pt-2">
    <div class="font-bold text-xl my-4 text-center"> 组织列表 </div>
    <div class="">
      <div class="px-4 text-center overflow-y-auto overflow-x-hidden">
        <a-spin class="m-auto" :spinning="listLoading">
          <template v-if="!listLoading">
            <div v-for="item of organizationList" :key="item.id">
              <div
                :class="[
                  { 'bg-green-100': isActive(item) },
                  'rounded-md',
                  'p-1',
                  'pl-2',
                  'flex',
                  'm-auto',
                ]"
              >
                <UnorderedListOutlined class="my-auto" />
                <a class="pl-2 text-gray-800" @click="setCurrentOrganization(item)">{{
                  item.name
                }}</a>
              </div>
            </div>
          </template>
        </a-spin>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { UnorderedListOutlined } from '@ant-design/icons-vue';
  import { useUserStore } from '/@/store/modules/user';
  import { OrganizationModel } from '/@/api/model/OrganizationModel';
  import { onMounted, ref } from 'vue';
  import { getAccountOrganizations } from '/@/api/account';
  import { useHomeMessages } from '/@/views/home/messages/useHomeMessages';

  const organizationList = ref<OrganizationModel[]>([]);
  const { getUserInfo } = useUserStore();

  const { setCurrentOrganization, getCurrentOrganization } = useHomeMessages();

  function isActive(organization: OrganizationModel) {
    return organization.id == getCurrentOrganization.value?.id;
  }
  const listLoading = ref(true);
  onMounted(() => {
    getAccountOrganizations(getUserInfo.id).then((res) => {
      organizationList.value = res;
      listLoading.value = false;
      if (organizationList.value.length != 0) {
        setCurrentOrganization(organizationList.value[0]);
      }
    });
  });
</script>

<style scoped></style>
