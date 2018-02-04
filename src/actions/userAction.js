import * as axios from 'axios';
import { debug } from 'util';

export const LOAD_USER = 'LOAD_USER';
export const CHANGE_USER = 'CHANGE_USER';
export const DELETE_USER = 'DELETE_USER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SEARCH_USER = 'SEARCH_USER';
export const REFRESH_USER = 'REFRESH_USER';
export function OnSearchUser(Value) {
    return { type: SEARCH_USER, payload: Value };
}
export function OnRefreshUser() {
    return { type: REFRESH_USER };
}
    export const onLoad = () => (
        dispatch => {
            debugger
            return axios.get('http://localhost:3000/data/')
                .then(res => {
                    console.log(res)
                    dispatch({
                        type: LOAD_USER,
                        data: res.data
                    })
                })
                .catch(err => {
                    console.log("error");
                }
                )
        })
        export const OnAddUser = (user) => (
            dispatch => {
                return axios.post('http://localhost:3000/data/',user)
                    .then(res => {
                        dispatch({ type: ADD_USER, payload: user })
                    })
                    .catch(err => {
                        console.log("error");
                    }
                )
            }
        )
        export const deleteUser=(userId) => (
            dispatch => {
                debugger
                
                return axios.delete('http://localhost:3000/data/'+userId)
                    .then(res => {
                        console.log("res:   "+res)
                        dispatch({ type: DELETE_USER, userId })
                    })
                    .catch(err => {
                        console.log("error");
                    }
                )
            }
        )
    export const OnUpdateUser=(user) => (
        dispatch => {
            return axios.put('http://localhost:3000/data/'+user.id,user)
                .then(res => {
                    console.log("res:  "+res)
                    dispatch({ type: UPDATE_USER, payload: res })
                })
                .catch(err => {
                    console.log("error");
                }
            )
        }
    )