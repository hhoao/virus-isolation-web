<template>
  <template v-if="getShow">
    <LoginFormTitle class="enter-x" />
    <div class="enter-x min-w-64 min-h-64">
      <QrCode :value="qrCodeUrl" :width="250" class="enter-x flex justify-center" />
      <Divider class="enter-x">{{ t('sys.login.scanSign') }}</Divider>
      <Button block class="mt-4 enter-x" size="large" @click="handleBackLogin">
        {{ t('sys.login.backSignIn') }}
      </Button>
    </div>
  </template>
</template>
<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import LoginFormTitle from './LoginFormTitle.vue';
  import { Button, Divider } from 'ant-design-vue';
  import { QrCode } from '/@/components/Qrcode/index';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { LoginStateEnum, useLoginState } from './useLogin';

  const qrCodeUrl = 'https://vvbin.cn/next/login';

  const { t } = useI18n();
  const { handleBackLogin, getLoginState } = useLoginState();

  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.QR_CODE);
</script>
