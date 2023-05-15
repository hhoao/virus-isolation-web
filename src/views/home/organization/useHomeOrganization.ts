import { computed, ref } from 'vue';
import { OrganizationModel } from '/@/api/model/OrganizationModel';
import { useModal } from '/@/components/Modal';

export enum OrganizationActionStatus {
  ORGANIZATION_INFO,
  ACCOUNTS_INFO,
  SIGN_IN,
  HEALTH_CLOCK,
}

const toolItemList = [
  {
    name: '组织信息',
    status: OrganizationActionStatus.ORGANIZATION_INFO,
    icon: 'organization-information',
  },
  { name: '人员信息', status: OrganizationActionStatus.ACCOUNTS_INFO, icon: 'information' },
  { name: '签到打卡', status: OrganizationActionStatus.SIGN_IN, icon: 'record' },
  { name: '健康打卡', status: OrganizationActionStatus.HEALTH_CLOCK, icon: 'checkin' },
];

const currentStatus = ref(OrganizationActionStatus.ORGANIZATION_INFO);

const currentOrganization = ref<Nullable<OrganizationModel>>(null);

const headerBarRef = ref(null);

const [registerSignInModal, { openModal: openSignInModal }] = useModal();
const [registerHealthClockModal, { openModal: openHealthClockModal }] = useModal();

export function useHomeOrganization() {
  function setHeaderBarRef(headerBar) {
    headerBarRef.value = headerBar;
  }
  const getHeaderBarRef = computed(() => headerBarRef.value);
  function setCurrentOrganization(organization: OrganizationModel) {
    currentOrganization.value = organization;
  }
  const getCurrentOrganization = computed(() => currentOrganization.value);
  function setOrganizationActionStatus(status: OrganizationActionStatus) {
    currentStatus.value = status;
  }
  function getToolItemList() {
    return toolItemList;
  }
  const getOrganizationActionStatus = computed(() => currentStatus.value);
  return {
    setHeaderBarRef,
    getHeaderBarRef,
    setCurrentOrganization,
    getCurrentOrganization,
    getToolItemList,
    setOrganizationActionStatus,
    getOrganizationActionStatus,
    openSignInModal,
    registerSignInModal,
    registerHealthClockModal,
    openHealthClockModal,
  };
}
