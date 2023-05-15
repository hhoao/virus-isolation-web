<template>
  <basic-modal @register="registerHealthClockModal" title="健康打卡">
    <map-container />
    <div class="mt-10">
      <basic-form @register="registerForm" :model="model" />
    </div>
  </basic-modal>
</template>

<script setup lang="ts">
  import BasicModal from '/@/components/Modal/src/BasicModal.vue';
  import { useHomeOrganization } from '/@/views/home/organization/useHomeOrganization';
  import MapContainer from '/@/views/home/organization/MapContainer.vue';
  import { BasicForm, FormSchema } from '/@/components/Form/index';
  import { useForm } from '/@/components/Form';
  import { ref } from 'vue';
  import { useUserStore } from '/@/store/modules/user';

  const { getUserInfo } = useUserStore();

  const schemas: FormSchema[] = [
    {
      field: 'id',
      component: 'Input',
      label: '学号/工号',
      colProps: {
        span: 18,
      },
      defaultValue: getUserInfo.id,
    },
    {
      field: 'name',
      component: 'Input',
      label: '姓名',
      colProps: {
        span: 18,
      },
      defaultValue: getUserInfo.username,
    },
    {
      field: 'temperature',
      component: 'Slider',
      label: '体温',
      componentProps: {
        min: 0,
        max: 100,
        range: true,
        marks: {
          20: '20°C',
          60: '60°C',
        },
      },
      colProps: {
        span: 12,
      },
    },
    {
      field: 'isCold',
      component: 'RadioGroup',
      label: '不舒服/感冒',
      colProps: {
        span: 12,
      },
      componentProps: {
        options: [
          {
            label: '是',
            value: '1',
          },
          {
            label: '否',
            value: '2',
          },
        ],
      },
    },
  ];
  const model = ref({});
  const [
    registerForm,
    {
      // setFieldsValue,
      // setProps
    },
  ] = useForm({
    labelWidth: 120,
    schemas,
    showActionButtonGroup: false,
    actionColOptions: {
      span: 24,
    },
  });

  const { registerHealthClockModal } = useHomeOrganization();
</script>

<style scoped></style>
