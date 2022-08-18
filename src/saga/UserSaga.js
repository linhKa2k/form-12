import { useUserStore } from "../reducer/UserReducer";
import { userApi } from "../api";

async function getUser() {
  const actions = useUserStore();
  console.log(actions, "getReducerUser");
  await actions.getRequest();
  try {
    let res = await userApi.getUser();
    console.log(res, "resSagaUser");
    await actions.getSuccess(res.data);
  } catch (error) {
    await actions.getFailure(error);
  }
}

async function addUser(payload) {
    console.log(payload, "SAGA ADDDDDD");
  const actions = useUserStore();
  await actions.addRequest();
  try {
    await userApi.addUser(payload);
    await actions.addSuccess();
    await getUser(); 
  } catch (error) {
    await actions.addFailure(error);
  }
}

async function deleteUser(payload) {
  console.log(payload, "delSAga");
  const actions = useUserStore();
  await actions.deleteRequest();
  try {
    await userApi.deleteUser(payload,{id:payload.id},null);
    await actions.deleteSuccess();
    await getUser();
  } catch (error) {
    await actions.deleteFailure(error);
  }
}

async function updateUser(payload) {
  console.log(payload, "updateSaga");
  const actions = useUserStore();
  await actions.updateRequest();
  try {
    await userApi.updateUser(payload,{id:payload.id},null);
    await actions.updateSuccess();
    await getUser();
  } catch (error) {
    await actions.updateFailure(error);
  }
}

export { getUser, addUser,deleteUser,updateUser};
