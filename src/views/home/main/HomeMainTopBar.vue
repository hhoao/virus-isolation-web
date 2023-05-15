<template>
  <div class="w-full h-1/3 grid grid-cols-5 gap-4 text-center row-span-1">
    <div class="col-span-3 flex flex-col overflow-auto">
      <div class="my-4 flex justify-between">
        <span>
          <span class="font-bold text-xl mr-2">疫情信息 </span>
          <span>{{ updateTime }}</span>
        </span>
        <a class="float-right self-end">详细信息 ></a>
      </div>
      <div class="border-2 border-solid border-gray-200 rounded-lg overflow-y-scroll pt-2 pl-4">
        <a-spin class="m-auto" :spinning="covidStatisticLoading">
          <div class="grid grid-cols-3">
            <template v-for="(value, label) in covidStatistic" :key="label">
              <template v-if="value instanceof Object">
                <span
                  v-for="(innerValue, innerLabel) in value"
                  :key="innerLabel"
                  class="w-1/2 text-left"
                >
                  <a-statistic
                    :title="innerLabel"
                    :value="value === '' ? 'To be announced' : innerValue"
                    :value-style="statisticValueStyle"
                  />
                </span>
              </template>
              <span v-else class="w-1/2 text-left m-0">
                <a-statistic
                  :title="label"
                  :value="value === '' ? 'To be announced' : value"
                  :valueStyle="statisticValueStyle"
                />
              </span>
            </template>
          </div>
        </a-spin>
      </div>
    </div>
    <div class="col-span-2 flex flex-col overflow-auto">
      <div class="my-4 flex justify-between">
        <span class="font-bold text-xl">注意</span>
      </div>
      <div class="border-2 border-solid border-gray-200 rounded-lg overflow-y-scroll">
        <div class="grid grid-cols-1">
          <template v-for="(value, label) in remarkAndNotesData" :key="label">
            <span class="text-left m-2">
              {{ value }}
            </span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { getCovid19Status } from '/@/api/health';
  import { onMounted, ref } from 'vue';
  import { CovidStatisticModel, RemarkAndNotesModel } from '/@/api/model/HealthModel';
  import dayjs from 'dayjs';

  const remarkAndNotesData = ref<RemarkAndNotesModel>({});
  const covidStatistic = ref<CovidStatisticModel>();
  const updateTime = ref<string>('none');

  const covidStatisticLoading = ref(true);
  const statisticValueStyle = { 'font-size': '1.25rem' };

  onMounted(() => {
    getCovid19Status().then((res) => {
      if (res.results == null) return;
      const {
        currentConfirmedCount,
        currentConfirmedIncr,
        confirmedCount,
        confirmedIncr,
        suspectedCount,
        suspectedIncr,
        curedCount,
        curedIncr,
        deadCount,
        deadIncr,
        seriousCount,
        seriousIncr,
        globalStatistics,
      } = res.results[0];
      covidStatistic.value = {
        currentConfirmedCount,
        currentConfirmedIncr,
        confirmedCount,
        confirmedIncr,
        suspectedCount,
        suspectedIncr,
        curedCount,
        curedIncr,
        deadCount,
        deadIncr,
        seriousCount,
        seriousIncr,
        globalStatistics,
      };
      const { remark1, remark2, remark3, remark4, remark5, note1, note2, note3 } = res.results[0];
      remarkAndNotesData.value = {
        remark1,
        remark2,
        remark3,
        remark4,
        remark5,
        note1,
        note2,
        note3,
      };
      updateTime.value = dayjs(res.results[0].updateTime).toString();
      covidStatisticLoading.value = false;
    });
  });
</script>

<style scoped></style>
