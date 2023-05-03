export enum AccountApi {
  GET_ACCOUNT_ORGANIZATIONS = '/s1/accounts/:accountId/organizations',
  JOIN_ORGANIZATION = '/s1/accounts/:accountId/invitations',
  ACCOUNT_INFO = '/s1/account',
  Login = '/s1/accounts/auth/token',
  Logout = '/s1/accounts/auth/token',
  UPDATE_USER_INFO = '/s1/account',
}
