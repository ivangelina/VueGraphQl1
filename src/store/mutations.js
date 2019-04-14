import mutations from './mutation-types';

export default {
  [mutations.SET_LOADER](state, isLoading) {
    state.isLoading = isLoading;
  },
  [mutations.SET_USERS_LIST](state, usersList) {
    state.usersList = usersList;
  },
  [mutations.SET_SELECTED_USER](state, user){
    state.selectedUser = user;
  },
  [mutations.ADD_USER](state, user){
    state.usersList.push(user);
  },
  [mutations.UPDATE_USER](state, {index, user}){
    state.usersList.splice(index, 1, user);
  },
  [mutations.DELETE_USER](state, index){
    state.usersList.splice(index, 1);
  }
};
