export enum AccountApi {
  ACCOUNT_INFO = '/v1/account',
  AccountPageList = '/v1/accounts',
  Login = '/v1/accounts/auth/token',
  Logout = '/v1/accounts/auth/token',
  DELETE_ACCOUNT = '/v1/accounts/:id',
  UPDATE_ACCOUNT = '/v1/accounts/:id',
  ADD_ACCOUNT = '/v1/accounts',
}
