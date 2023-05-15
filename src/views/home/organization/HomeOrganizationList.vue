<template>
  <div class="font-bold text-xl my-4 text-left"> 组织列表 </div>
  <div class="border-2 border-solid pt-2 rounded-lg h-full">
    <div class="px-4 text-center overflow-y-scroll overflow-x-hidden min-h-36 max-h-41">
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
</template>

<script setup lang="ts">
  import { UnorderedListOutlined } from '@ant-design/icons-vue';
  import { onMounted, ref } from 'vue';
  import { getAccountOrganizations } from '/@/api/account';
  import { useUserStore } from '/@/store/modules/user';
  import { OrganizationModel } from '/@/api/model/OrganizationModel';
  import { useHomeOrganization } from '/@/views/home/organization/useHomeOrganization';

  const organizationList = ref<OrganizationModel[]>([]);
  const { getUserInfo } = useUserStore();

  const { setCurrentOrganization, getCurrentOrganization } = useHomeOrganization();

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
