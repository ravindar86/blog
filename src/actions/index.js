import jsonplaceholder from "../apis/jsonplaceholder";
import _ from 'lodash';

export const fetchPosts = () => async(dispatch) => {
    const response = await jsonplaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}; 

/*export const fetchUser = (id) => async(dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
};*/

export const fetchUser = (id) => (dispatch) => {
    _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
});

/*
export const fetchPosts = () => {
    return async function(dispatch, getState) {
        const response = await jsonplaceholder.get('/posts');

        dispatch({
            type: 'FETCH_POSTS',
            payload: response
        })
    }
};
*/

/*
export const fetchPosts = () => {
    return function(dispatch, getState) {
        const promise = jsonplaceholder.get('/posts');

        return{
            type: 'FETCH_POSTS',
            payload: promise
        }
    }
}
*/