import { defineStore } from 'pinia'
import { itemTypes } from '../constants/actionsType/index'
const INITIAL_STATE = {
    listItem: [],
    isFetching: false,
    error: false,
    messageError: null,
    type: ''
}

export const useStatusStore = defineStore({
    id: 'comments',
    state: () => INITIAL_STATE,
    actions: {
        getRequest() {
            itemTypes.GET_STATUS_REQUEST
            this.isFetching = true
        },
        getSuccess(payload) {
            console.log("payload COMMENTS in reducer: ", payload);
            this.listItem = payload
            
            ,
                console.log("in reducer: ", this.listItem);
            itemTypes.GET_STATUS_SUCCESS,
                this.isFetching = false
        },
        getFailure() {
            itemTypes.GET_STATUS_FAILURE
        },
        addRequest() {
            itemTypes.ADD_STATUS_REQUEST
            this.isFetching = true
        },
        addSuccess() {
            itemTypes.ADD_STATUS_SUCCESS
            this.isFetching = false
        },
        addFailure() {
            itemTypes.ADD_STATUS_FAILURE
        },
        deleteRequest() {
            itemTypes.DELETE_STATUS_REQUEST
            this.isFetching = true
        },
        deleteSuccess() {
            itemTypes.DELETE_STATUS_SUCCESS
            this.isFetching = false
        },
        deleteFailure() {
            itemTypes.DELETE_STATUS_FAILURE
        },
        updateRequest() {
            itemTypes.UPDATE_STATUS_REQUEST
            this.isFetching = true
        },
        updateSuccess() {
            itemTypes.UPDATE_STATUS_SUCCESS
            this.isFetching = false
        },
        updateFailure() {
            itemTypes.UPDATE_STATUS_FAILURE
        }
    },
})
