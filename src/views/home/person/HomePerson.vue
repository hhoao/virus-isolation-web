<template>
  <div class="h-screen flex flex-col mx-8 enter-x">
    <div class="font-bold text-xl my-4">
      <span>账户信息</span>
    </div>
    <div class="py-8 border-2 border-solid rounded-lg overflow-auto flex">
      <basic-form
        @register="register"
        class="w-2/3 mx-auto"
        @submit="handleSubmit"
        :actionColOptions="{ span: 24 }"
        autoFocusFirstItem
      />
      <div>
        <CropperAvatar
          :uploadApi="uploadApi"
          :value="avatar"
          btnText="更换头像"
          :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
          @change="updateAvatar"
          width="150"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import BasicForm from '/@/components/Form/src/BasicForm.vue';
  import { FormProps, useForm } from '/@/components/Form';
  import { personSettingsSchema } from './homePersonProps';
  import { computed, onMounted } from 'vue';
  import { uploadApi } from '/@/api/upload';
  import { useUserStore } from '/@/store/modules/user';
  import headerImg from '/@/assets/images/header.png';
  import CropperAvatar from '/@/components/Cropper/src/CropperAvatar.vue';
  import { updateAccount } from '/@/api/account';

  const formProps: FormProps = {
    baseRowStyle: {
      display: 'block',
      placeSelf: 'stretch',
      marginLeft: '10%',
    },
    labelWidth: 120,
    schemas: personSettingsSchema,
    autoSubmitOnEnter: true,
    submitButtonOptions: { text: '提交' },
    submitFunc: updateAccount,
  };

  const userStore = useUserStore();
  const [register, { setFieldsValue }] = useForm(formProps);
  const avatar = computed(() => {
    const { avatar } = userStore.getUserInfo;
    console.log(avatar);
    return avatar || headerImg;
  });
  function updateAvatar({ src, data }) {
    const userinfo = userStore.getUserInfo;
    userinfo.avatar = src;
    userStore.setUserInfo(userinfo);
    console.log('data', data);
  }
  function handleSubmit() {}

  onMounted(() => {
    const userInfo = userStore.getUserInfo;
    setFieldsValue(userInfo);
  });
</script>

<style scoped></style>
