import mutations from './mutation-types';
import actions from './action-types';
import dataService from '../api/data-service';
import graphQlService from '../api/graphql-service';
import getters from './getters';

export default {

    [actions.GET_USERS_LIST]({commit}, params= "_id username email") {
        commit(mutations.SET_LOADER, true);
        graphQlService.getUsersList(
            params,
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        )
    }


};
