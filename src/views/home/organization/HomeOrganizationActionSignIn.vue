<template>
  <basic-modal @register="registerSignInModal" title="签到打卡">
    <div class="align-center m-auto w-3/4 border-2 border-solid rounded-lg">
      <a-calendar v-model:value="value" @panelChange="onPanelChange" :fullscreen="false">
        <template #dateCellRender="{ current }">
          <icon
            :color="getIconStyle(getDayStatus(current).type).color"
            :icon="getIconStyle(getDayStatus(current).type).icon"
          />
        </template>
        <template #monthCellRender="{ current }">
          <icon
            :color="getIconStyle(getMonthStatus(current).type).color"
            :icon="getIconStyle(getMonthStatus(current).type).icon"
          />
        </template>
      </a-calendar>
    </div>
  </basic-modal>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';
  import { BasicModal } from '/@/components/Modal';
  import { Dayjs } from 'dayjs';
  import { useHomeOrganization } from '/@/views/home/organization/useHomeOrganization';
  import { SignInStatusType } from '/@/api/model/OrganizationModel';
  import { getOrganizationSignInStatus } from '/@/api/account';
  import Icon from '/@/components/Icon/src/Icon.vue';

  const { registerSignInModal, getCurrentOrganization } = useHomeOrganization();

  const value = ref<Dayjs>();
  const onPanelChange = (value: Dayjs, mode: string) => {
    console.log(value, mode);
  };
  function getIconStyle(value) {
    const defaultIcon = 'material-symbols:check-circle-outline';
    switch (value) {
      case SignInStatusType.SUCCESS:
        return {
          color: 'rgba(16, 185, 129)',
          icon: defaultIcon,
        };
      case SignInStatusType.WARN:
        return {
          color: 'rgba(245, 158, 11)',
          icon: defaultIcon,
        };
      case SignInStatusType.DANGER:
        return {
          color: 'rgba(239, 68, 68',
          icon: defaultIcon,
        };
      default:
        return {};
    }
  }
  const statusIndexData = ref({});
  const getDayStatus = (value: Dayjs) => {
    const date = value.format('YYYY-MM-DD');
    return statusIndexData.value[date] || {};
  };

  const getMonthStatus = (value: Dayjs) => {
    if (value.month() === 8) {
      return { type: SignInStatusType.SUCCESS };
    }
    return {};
  };
  onMounted(() => {
    watch(
      () => getCurrentOrganization.value,
      (value) => {
        if (value != null && value.id) {
          getOrganizationSignInStatus([value.id]).then((res) => {
            for (let status of res.list) {
              statusIndexData.value[status.date] = status;
            }
          });
        }
      },
      { immediate: true },
    );
  });
</script>

<style scoped></style>
