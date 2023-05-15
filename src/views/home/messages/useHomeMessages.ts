import { computed, ref } from 'vue';
import { OrganizationModel } from '/@/api/model/OrganizationModel';

const currentOrganization = ref<Nullable<OrganizationModel>>(null);

export function useHomeMessages() {
  function setCurrentOrganization(organization: OrganizationModel) {
    currentOrganization.value = organization;
  }
  const getCurrentOrganization = computed(() => currentOrganization.value);
  return {
    setCurrentOrganization,
    getCurrentOrganization,
  };
}
