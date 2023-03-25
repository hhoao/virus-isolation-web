export enum OrganizationApi {
  GET_ORGANIZATION_PAGE_LIST = '/v1/organizations',
  ADD_ORGANIZATION = '/v1/organizations',
  UPDATE_ORGANIZATION = '/v1/organizations/:organizationId',
  DELETE_ORGANIZATION = '/v1/organizations/:organizationId',
  GET_ORGANIZATION_ACCOUNTS_PAGE_LIST = '/v1/organizations/:organizationId/accounts',
  UPDATE_ORGANIZATION_ACCOUNT_POSITION = '/v1/organizations/:organizationId/accounts/:accountId',
  DELETE_ORGANIZATION_ACCOUNT_BY_USER_ID = '/v1/organizations/:organizationId/accounts/:accountId',
}
