import { computed, ref } from 'vue';

export enum HomeStatusEnum {
  MAIN,
  ORGANIZATION,
  PERSON,
  SETTING,
}

const currentStatus = ref(HomeStatusEnum.MAIN);

export function useHomeStatus() {
  function setHomeStatus(status: HomeStatusEnum) {
    currentStatus.value = status;
  }
  const getHomeStatus = computed(() => currentStatus.value);
  return {
    setHomeStatus,
    getHomeStatus,
  };
}
