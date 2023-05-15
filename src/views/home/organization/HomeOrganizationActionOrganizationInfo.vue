<template>
  <div class="h-2/3 flex flex-col enter-x">
    <div class="my-4">
      <span class="font-bold text-xl">组织信息</span>
      <a class="float-right">排序 ></a>
    </div>
    <div class="flex border-2 border-solid py-8 rounded-lg overflow-x-auto">
      <basic-form
        @register="register"
        @submit="handleSubmit"
        class="w-2/3 mx-auto h-full overflow-auto inline-block"
        :actionColOptions="{ span: 24 }"
        autoFocusFirstItem
      />
      <div class="inline-block">
        <div>
          <CropperAvatar
            :uploadApi="uploadApi"
            :value="avatar"
            btnText="更换头像"
            :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
            width="180"
          /> </div
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, watch } from 'vue';
  import { FormProps, useForm } from '/@/components/Form';
  import headerImg from '/@/assets/images/header.png';
  import { uploadApi } from '/@/api/upload';
  import { useHomeOrganization } from '/@/views/home/organization/useHomeOrganization';
  import { organizationSettingsSchema } from '/@/views/home/organization/organizationProps';
  import BasicForm from '/@/components/Form/src/BasicForm.vue';
  import CropperAvatar from '/@/components/Cropper/src/CropperAvatar.vue';

  const { getCurrentOrganization } = useHomeOrganization();

  const formProps: FormProps = {
    baseRowStyle: {
      display: 'block',
      placeSelf: 'stretch',
      marginLeft: '10%',
    },
    labelWidth: 120,
    schemas: organizationSettingsSchema,
    autoSubmitOnEnter: true,
    submitButtonOptions: { text: '提交' },
  };

  const [register, { setFieldsValue }] = useForm(formProps);
  const avatar = computed(() => {
    return getCurrentOrganization.value?.avatar || headerImg;
  });
  function handleSubmit() {}

  onMounted(() => {
    watch(
      () => getCurrentOrganization.value,
      (value) => {
        if (value != null) {
          setFieldsValue(value);
        }
      },
      { immediate: true },
    );
  });
</script>

<style scoped></style>
