/**
 * Created by alexanderpetrov on 24.03.19.
 */

import gql from 'graphql-tag';
import graphqlClient from './graphql';

export default {

    async getUsersList(params, success, failure) {
        try {
            const response = await graphqlClient.query({
                query: gql`
                    query {
                        users {
                            ${params}
                        }
                    }
                `
            });
            success(response);
        } catch (error){
            failure(error);    
        }
    }
}
