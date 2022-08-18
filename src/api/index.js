import Helpers from "../util/helpers/index";
import ApiScheme from "./@scheme";

export const statusApi = {
  getStatus: Helpers.createApi(ApiScheme.STATUS.GET),
  addStatus: Helpers.createApi(ApiScheme.STATUS.ADD),
  updateStatus: Helpers.createApi(ApiScheme.STATUS.UPDATE),
  deleteStatus: Helpers.createApi(ApiScheme.STATUS.DELETE),
};
export const userApi = {
  getUser: Helpers.createApi(ApiScheme.USER.GET),
  addUser: Helpers.createApi(ApiScheme.USER.ADD),
  updateUser: Helpers.createApi(ApiScheme.USER.UPDATE),
  deleteUser: Helpers.createApi(ApiScheme.USER.DELETE)
}
export const accountApi = {
  getAccount: Helpers.createApi(ApiScheme.ACCOUNT.GET),
  addAccount: Helpers.createApi(ApiScheme.ACCOUNT.ADD),
  updateAccount: Helpers.createApi(ApiScheme.ACCOUNT.UPDATE),
  deleteAccount: Helpers.createApi(ApiScheme.ACCOUNT.DELETE)
}
export const roleApi = {
  getRole: Helpers.createApi(ApiScheme.ROLE.GET),
  addRole: Helpers.createApi(ApiScheme.ROLE.ADD),
  updateRole: Helpers.createApi(ApiScheme.ROLE.UPDATE),
  deleteRole: Helpers.createApi(ApiScheme.ROLE.DELETE)
}
export const numberApi = {
  getNumber: Helpers.createApi(ApiScheme.NUMBER.GET),
  addNumber: Helpers.createApi(ApiScheme.NUMBER.ADD),
  updateNumber: Helpers.createApi(ApiScheme.NUMBER.UPDATE),
  deleteNumber: Helpers.createApi(ApiScheme.NUMBER.DELETE)
}