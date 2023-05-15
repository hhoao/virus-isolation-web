<template>
  <div class="m-0px enter-x">
    <div class="my-4">
      <span class="font-bold text-xl">人员信息</span>
      <a class="float-right">排序 ></a>
    </div>
    <a-table
      :columns="accountColumns"
      :data-source="organizationAccountList"
      :pagination="{ pageSize: 5, total: 20, pageSizeOptions: ['5', '10'] }"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { getOrganizationAccountsPageListApi } from '/@/api/organization';
  import { OrganizationAccount } from '/@/api/model/AcountModel';
  import { merge } from 'lodash-es';
  import { useHomeOrganization } from '/@/views/home/organization/useHomeOrganization';
  import { accountColumns } from '/@/views/home/organization/accountColums';

  const { getCurrentOrganization } = useHomeOrganization();
  watch(
    () => getCurrentOrganization.value,
    (value) => {
      const params = merge(value, { pageNum: 1, pageSize: 5 });
      getOrganizationAccountsPageListApi(params).then((res) => {
        organizationAccountList.value = res.list;
      });
    },
    {
      immediate: true,
    },
  );
  const organizationAccountList = ref<OrganizationAccount[]>([]);
</script>

<style scoped></style>
