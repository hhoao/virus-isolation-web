export enum OrganizationApi {
  INVITE_ACCOUNT = '/s1/organizations/:organizationId/invitations',
  GET_INVITE_RECORD = '/s1/messages',
  CANCEL_INVITATION = '/s1/messages',
  GET_ORGANIZATION_ACCOUNTS_PAGE_LIST = '/s1/organizations/:organizationId/accounts',
  GET_JOINED_ORGANIZATIONS_MESSAGES_PAGE_LIST = '/s1/messages/_bulk',
  UPDATE_ORGANIZATION_ACCOUNT_POSITION = '/s1/organizations/:organizationId/accounts/:accountId',
  DELETE_ORGANIZATION_ACCOUNT_BY_USER_ID = '/s1/organizations/:organizationId/accounts/:accountId',
}
