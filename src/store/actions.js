import mutations from './mutation-types';
import actions from './action-types';
import dataService from '../api/data-service';
import graphQlService from '../api/graphql-service';
import getters from './getters';

export default {

    [actions.GET_USERS_LIST]({commit}, params= "_id username email games {_id}") {
        commit(mutations.SET_LOADER, true);
        graphQlService.getUsersList(
            params,
            (response) => {
                commit(mutations.SET_LOADER, false);
                commit(mutations.SET_USERS_LIST, response.data.users);
            },
            (error) => {
                commit(mutations.SET_LOADER, false);
                console.log(error);
            }
        )
    },
    [actions.ADD_USER]({commit}, params){
        commit(mutations.SET_LOADER, true);
        graphQlService.addUser(
            params,
            (response) => {
                commit(mutations.SET_LOADER, false);
                commit(mutations.ADD_USER, response.data.addUser);
            },
            (error) => {
                commit(mutations.SET_LOADER, false);
                console.log(error);
            }
        )
    },
    [actions.DELETE_USER]({commit, state}, params){
        commit(mutations.SET_LOADER, true);
        graphQlService.deleteUser(
            params,
            (response) => {
                commit(mutations.SET_LOADER, false);
                const _id = response.data.deleteUser._id;
                const removeIndex = 
                getters.getUserIndex(state.usersList, _id);
                commit(mutations.DELETE_USER, removeIndex);
            },
            (error) => {
                commit(mutations.SET_LOADER, false);
                console.log(error);
            }
        )
    },

    [actions.GET_GAMES_LIST]({commit}, params= "_id name description image") {
        commit(mutations.SET_LOADER, true);
        graphQlService.getGamesList(
            params,
            (response) => {
                commit(mutations.SET_LOADER, false);
                commit(mutations.SET_GAMES_LIST, response.data.games);
            },
            (error) => {
                commit(mutations.SET_LOADER, false);
            }
        )
    },
    [actions.SAVE_USER]({commit, state}, params){
        commit(mutations.SET_LOADER, true);
        graphQlService.saveUser(
            params,
            (response) => {
                commit(mutations.SET_LOADER, false);
                
            },
            (error) => {
                commit(mutations.SET_LOADER, false);
                console.log(error);
            }
        )
    },

};
