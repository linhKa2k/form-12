import { useRoleStore } from "../reducer/RoleReducer";
import { roleApi } from "../api/index";

async function getRole() {
  const actions = useRoleStore();
  await actions.getRequest();
  try {
    let res = await roleApi.getRole();
    console.log(res, "res in saga: ");
    await actions.getSuccess(res.data);
  } catch (error) {
    await actions.getFailure(error);
  }
}
async function addRole(payload) {
  const actions = useRoleStore();
  await actions.addRequest();
  try {
    await roleApi.addRole(payload);
    await actions.addSuccess();
    await getStatus();
  } catch (error) {
    await actions.addFailure(error);
  }
}
async function deleteRole(payload) {
  console.log("payload in saga: ", payload);
  const actions = useRoleStore();
  await actions.deleteRequest();
  try {
    await roleApi.deleteRole(null, { id: payload.id }, null);
    await actions.deleteSuccess();
    await getStatus();
  } catch (error) {
    await actions.deleteFailure(error);
  }
}
async function updateRole(payload) {
  console.log("payload in saga: ", payload);
  const actions = useRoleStore();
  await actions.updateRequest();
  try {
    await roleApi.updateRole(payload, { id: payload.id }, null);
    await actions.updateSuccess();
    await getStatus();
  } catch (error) {
    await actions.updateFailure(error);
  }
}

export { getRole, addRole, deleteRole, updateRole };
