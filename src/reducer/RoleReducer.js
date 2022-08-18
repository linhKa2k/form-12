import { defineStore } from "pinia";
import { itemTypes } from "../constants/actionsType/index";
const ROLE_STATE = {
  listItem: [],
  isFetching: false,
  error: false,
  messageError: null,
  type: "",
};

export const useRoleStore = defineStore({
  id: "post",
  state: () => ROLE_STATE,
  actions: {
    getRequest() {
      console.log("GetReducer");
      itemTypes.GET_ROLE_REQUEST;
      this.isFetching = true;
    },
    getSuccess(payload) {
      (this.listItem = payload),
        itemTypes.GET_ROLE_SUCCESS,
        (this.isFetching = false);
    },
    getFailure() {
      itemTypes.GET_ROLE_FAILURE;
    },
    // add
    addRequest() {
     
      itemTypes.ADD_ROLE_REQUEST;
      this.isFetching = true;
    },
    addSuccess() {
      itemTypes.ADD_ROLE_SUCCESS, (this.isFetching = false);
    },
    addFailure() {
      itemTypes.ADD_ROLE_FAILURE;
    },
    // delete
    deleteRequest() {
      console.log("deleteReducer");
      itemTypes.DELETE_ROLE_REQUEST;
      this.isFetching = true;
    },
    deleteSuccess() {
      itemTypes.DELETE_ROLE_SUCCESS, (this.isFetching = false);
    },
    deleteFailure() {
      itemTypes.DELETE_ROLE_FAILURE;
    },

    // update
    updateRequest() {
      console.log("updateReducer");
      itemTypes.UPDATE_ROLE_REQUEST;
      this.isFetching = true;
    },
    updateSuccess() {
      itemTypes.UPDATE_ROLE_SUCCESS, (this.isFetching = false);
    },
    updateFailure() {
      itemTypes.UPDATE_ROLE_FAILURE;
    },
  },
});
