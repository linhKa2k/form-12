import { defineStore } from "pinia";
import { itemTypes } from "../constants/actionsType/index";
const DEFAULT_STATE = {
  listItem: [],
  isFetching: false,
  error: false,
  messageError: null,
  type: "",
};

export const useUserStore = defineStore({
  id: "post",
  state: () => DEFAULT_STATE,
  actions: {
    getRequest() {
      console.log("GetReducer");
      itemTypes.GET_USER_REQUEST;
      this.isFetching = true;
    },
    getSuccess(payload) {
      (this.listItem = payload),
        itemTypes.GET_USER_SUCCESS,
        (this.isFetching = false);
    },
    getFailure() {
      itemTypes.GET_USER_FAILURE;
    },
    // add
    addRequest() {
     
      itemTypes.ADD_USER_REQUEST;
      this.isFetching = true;
    },
    addSuccess() {
      itemTypes.ADD_USER_SUCCESS, (this.isFetching = false);
    },
    addFailure() {
      itemTypes.ADD_USER_FAILURE;
    },
    // delete
    deleteRequest() {
      console.log("deleteReducer");
      itemTypes.DELETE_USER_REQUEST;
      this.isFetching = true;
    },
    deleteSuccess() {
      itemTypes.DELETE_USER_SUCCESS, (this.isFetching = false);
    },
    deleteFailure() {
      itemTypes.DELETE_USER_FAILURE;
    },

    // update
    updateRequest() {
      console.log("updateReducer");
      itemTypes.UPDATE_USER_REQUEST;
      this.isFetching = true;
    },
    updateSuccess() {
      itemTypes.UPDATE_USER_SUCCESS, (this.isFetching = false);
    },
    updateFailure() {
      itemTypes.UPDATE_USER_FAILURE;
    },
  },
});
