<template>
  <div class="my-4 enter-x flex flex-col flex-grow overflow-y-auto">
    <div class="my-4">
      <span class="font-bold text-xl mr-10">健康打卡信息</span>
      <a-range-picker :value="rangeDate" @calendarChange="onCalendarChange" />
      <a class="float-right">排序 ></a>
    </div>
    <div class="flex-grow overflow-y-auto">
      <a-table
        ellipsis="true"
        :columns="healthInfoColumns"
        :data-source="organizationAccountHealthRecordList"
        :pagination="{ pageSize: 5, total: 20, pageSizeOptions: ['5', '10'] }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useHomeOrganization } from '/@/views/home/organization/useHomeOrganization';
  import { healthInfoColumns } from './healthInfoColumns';
  import dayjs, { Dayjs } from 'dayjs';
  import {
    OrganizationAccountHealthRecord,
    OrganizationDocumentType,
  } from '/@/api/model/OrganizationModel';
  import { getOrganizationAccountsHealthRecordPageListApi } from '/@/api/organization';
  import { RangeValue } from 'ant-design-vue/es/vc-picker/interface';

  const { getCurrentOrganization } = useHomeOrganization();
  const rangeDate = ref<RangeValue<Dayjs>>([dayjs().subtract(1, 'day'), dayjs()]);
  const organizationAccountHealthRecordList = ref<OrganizationAccountHealthRecord[]>([]);
  function onCalendarChange(dates: RangeValue<Dayjs>) {
    if (getCurrentOrganization?.value?.id && dates && dates[0] && dates[1]) {
      const params = {
        pageNum: 1,
        pageSize: 5,
        type: OrganizationDocumentType.HEALTH_INFORMATION,
        startTime: dates[0]?.millisecond(),
        endTime: dates[1]?.millisecond(),
      };
      getOrganizationAccountsHealthRecordPageListApi(params, getCurrentOrganization.value.id).then(
        (res) => {
          organizationAccountHealthRecordList.value = res.list;
        },
      );
    }
  }
  watch(
    () => getCurrentOrganization.value,
    (value) => {
      if (value?.id) {
        const params = {
          pageNum: 1,
          pageSize: 5,
          type: OrganizationDocumentType.HEALTH_INFORMATION,
        };
        getOrganizationAccountsHealthRecordPageListApi(params, value.id).then((res) => {
          organizationAccountHealthRecordList.value = res.list;
        });
      }
    },
    {
      immediate: true,
    },
  );
</script>

<style scoped></style>
