<template>
  <a-dropdown placement="top" :overlayClassName="`${prefixCls}-dropdown-overlay`">
    <span :class="[prefixCls]" class="flex">
      <img :class="`${prefixCls}__header`" :src="getUserInfo.avatar" />
      <span :class="`${prefixCls}__info hidden md:block`">
        <span :class="`${prefixCls}__name  `" class="truncate">
          {{ getUserInfo.username }}
        </span>
      </span>
    </span>

    <template #overlay>
      <a-menu @click="handleMenuClick">
        <drop-menu-item
          item-key="doc"
          :text="t('layout.header.dropdownItemDoc')"
          icon="ion:document-text-outline"
        />
        <a-menu-divider />
        <drop-menu-item
          itemKey="lock"
          :text="t('layout.header.tooltipLock')"
          icon="ion:lock-closed-outline"
        />
        <drop-menu-item
          itemKey="logout"
          :text="t('layout.header.dropdownItemLoginOut')"
          icon="ion:power-outline"
        />
      </a-menu>
    </template>
  </a-dropdown>
  <!--  <LockAction @register="register" />-->
</template>
<script setup lang="ts">
  // components
  import type { MenuInfo } from 'ant-design-vue/lib/menu/src/interface';
  import DropMenuItem from '/@/views/home/user-dropdown/DropMenuItem.vue';

  import { computed } from 'vue';

  import { DOC_URL } from '/@/settings/siteSetting';

  import { useUserStore } from '/@/store/modules/user';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useDesign } from '/@/hooks/web/useDesign';
  // import { useModal } from '/@/components/Modal';
  import headerImg from '/@/assets/images/header.jpg';
  import { openWindow } from '/@/utils';

  type MenuEvent = 'logout' | 'doc' | 'lock';

  const { prefixCls } = useDesign('header-user-dropdown');
  const { t } = useI18n();
  const userStore = useUserStore();

  const getUserInfo = computed(() => {
    const { username = '', avatar, desc } = userStore.getUserInfo || {};
    return { username, avatar: avatar || headerImg, desc };
  });

  // const [register, { openModal }] = useModal();

  // function handleLock() {
  //   openModal(true);
  // }

  //  login out
  function handleLoginOut() {
    userStore.confirmLoginOut();
  }

  // open doc
  function openDoc() {
    openWindow(DOC_URL);
  }

  function handleMenuClick(e: MenuInfo) {
    switch (e.key as MenuEvent) {
      case 'logout':
        handleLoginOut();
        break;
      case 'doc':
        openDoc();
        break;
      case 'lock':
        // handleLock();
        break;
    }
  }
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-header-user-dropdown';

  .@{prefix-cls} {
    height: @header-height;
    padding: 0 0 0 10px;
    padding-right: 10px;
    overflow: hidden;
    font-size: 12px;
    cursor: pointer;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }

    &__header {
      border-radius: 50%;
    }

    &__name {
      font-size: 14px;
    }
  }
</style>
