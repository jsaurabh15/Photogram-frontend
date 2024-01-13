import { api } from "../../config/api"
import { CREATE_COMMENT_FAILURE, CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS, CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, GET_ALL_POST_FAILURE, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS, GET_USERS_POST_FAILURE, GET_USERS_POST_REQUEST, GET_USERS_POST_SUCCESS, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS } from "./post.actionType"

// create post

export const createPostAction = (postData) => async(dispatch) =>{
    dispatch({type: CREATE_POST_REQUEST})

    try {
        const {data} = await api.post('/posts/create/user', postData)
        dispatch({type: CREATE_POST_SUCCESS, payload: data})
        console.log("created post", data)
    } catch (error) {
        console.log("error", error);
        dispatch({type: CREATE_POST_FAILURE, payload: error})
    }
};

// get all post
export const getAllPostAction = () => async(dispatch) =>{
    dispatch({type: GET_ALL_POST_REQUEST})

    try {
        const {data} = await api.get('/posts/all-posts')
        dispatch({type: GET_ALL_POST_SUCCESS, payload: data})
        console.log("get all post", data)
    } catch (error) {
        console.log("error", error);
        dispatch({type: GET_ALL_POST_FAILURE, payload: error})
    }
};

//get post of user
export const getUsersPostAction = (userId) => async(dispatch) =>{
    dispatch({type: GET_USERS_POST_REQUEST})

    try {
        const {data} = await api.get(`/posts/user/${userId}`)
        dispatch({type: GET_USERS_POST_SUCCESS, payload: data})
        console.log("get user's post", data)
    } catch (error) {
        console.log("error", error);
        dispatch({type: GET_USERS_POST_FAILURE, payload: error})
    }
};

// like post
export const likePostAction = (postId) => async(dispatch) =>{
    dispatch({type: LIKE_POST_REQUEST})

    try {
        const {data} = await api.put(`/posts/like/${postId}`)
        dispatch({type: LIKE_POST_SUCCESS, payload: data})
        console.log("like post", data)
    } catch (error) {
        console.log("error", error);
        dispatch({type: LIKE_POST_FAILURE, payload: error})
    }
};

// create comment on post
export const createCommentAction = (reqData) => async(dispatch) =>{
    dispatch({type: CREATE_COMMENT_REQUEST})

    try {
        const {data} = await api.post(`/comments/add/post/${reqData.postId}`, reqData.data)
        dispatch({type: CREATE_COMMENT_SUCCESS, payload: data})
        console.log("created comment", data)
    } catch (error) {
        console.log("error", error);
        dispatch({type: CREATE_COMMENT_FAILURE  , payload: error})
    }
};