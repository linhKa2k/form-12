import { useStatusStore } from "../reducer/StatusReducer";
import { statusApi } from "../api/index";

async function getStatus() {
  const actions = useStatusStore();
  await actions.getRequest();
  try {
    let res = await statusApi.getStatus();
    console.log(res, "res in saga: ");
    await actions.getSuccess(res.data);
  } catch (error) {
    await actions.getFailure(error);
  }
}
async function addStatus(payload) {
  const actions = useStatusStore();
  await actions.addRequest();
  try {
    await statusApi.addStatus(payload);
    await actions.addSuccess();
    await getStatus();
  } catch (error) {
    await actions.addFailure(error);
  }
}
async function deleteStatus(payload) {
  console.log("payload in saga: ", payload);
  const actions = useStatusStore();
  await actions.deleteRequest();
  try {
    await statusApi.deleteStatus(null, { id: payload.id }, null);
    await actions.deleteSuccess();
    await getStatus();
  } catch (error) {
    await actions.deleteFailure(error);
  }
}
async function updateStatus(payload) {
  console.log("payload in saga: ", payload);
  const actions = useStatusStore();
  await actions.updateRequest();
  try {
    await statusApi.updateStatus(payload, { id: payload.id }, null);
    await actions.updateSuccess();
    await getStatus();
  } catch (error) {
    await actions.updateFailure(error);
  }
}

export { getStatus, addStatus, deleteStatus, updateStatus };
