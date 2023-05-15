export enum OrganizationApi {
  INVITE_ACCOUNT = '/s1/organizations/:organizationId/invitations',
  GET_INVITE_RECORD = '/s1/messages',
  CANCEL_INVITATION = '/s1/messages',
  GET_ORGANIZATION_ACCOUNTS_PAGE_LIST = '/s1/organizations/:organizationId/accounts',
  GET_JOINED_ORGANIZATION_MESSAGES_PAGE_LIST = '/s1/organizations/:organizationId/messages',
  UPDATE_ORGANIZATION_ACCOUNT_POSITION = '/s1/organizations/:organizationId/accounts/:accountId',
  DELETE_ORGANIZATION_ACCOUNT_BY_USER_ID = '/s1/organizations/:organizationId/accounts/:accountId',
  GET_ORGANIZATION_ACCOUNT_SIGN_IN_STATUS = '/s1/organization/:organizationId/account/signIn',
}
