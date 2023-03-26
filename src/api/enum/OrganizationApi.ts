export enum OrganizationApi {
  GET_ORGANIZATION_ACCOUNTS_PAGE_LIST = '/s1/organizations/:organizationId/accounts',
  UPDATE_ORGANIZATION_ACCOUNT_POSITION = '/s1/organizations/:organizationId/accounts/:accountId',
  DELETE_ORGANIZATION_ACCOUNT_BY_USER_ID = '/s1/organizations/:organizationId/accounts/:accountId',
}
