import {useCallback} from "react";

const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_USERS_AMOUNT = 'users/SET_USERS_AMOUNT';
const SET_USER = 'users/SET_USER';
const SET_USERID = 'users/SET_USERID';
const SET_STATS = 'users/SET_STATS';
const SET_DATE = 'users/SET_DATE';
const SET_LOADING = 'users/SET_LOADING';

let initialState = {
    users: [
        {"id":1,first_name:"Christie",last_name:"Gann",email:"cgann0@hostgator.com",gender:"Female",ip_address:"57.14.195.231"},
        {"id":2,first_name:"Hamil",last_name:"Cressey",email:"hcressey1@delicious.com",gender:"Male",ip_address:"45.225.25.145"},
        {"id":4,first_name:"Christie",last_name:"Gann",email:"cgann0@hostgator.com",gender:"Female",ip_address:"57.14.195.231"},
        {"id":5,first_name:"Hamil",last_name:"Cressey",email:"hcressey1@delicious.com",gender:"Male",ip_address:"45.225.25.145"},
        {"id":6,first_name:"Christie",last_name:"Gann",email:"cgann0@hostgator.com",gender:"Female",ip_address:"57.14.195.231"},
        {"id":7,first_name:"Hamil",last_name:"Cressey",email:"hcressey1@delicious.com",gender:"Male",ip_address:"45.225.25.145"},
        {"id":8,first_name:"Christie",last_name:"Gann",email:"cgann0@hostgator.com",gender:"Female",ip_address:"57.14.195.231"},
        {"id":9,first_name:"Hamil",last_name:"Cressey",email:"hcressey1@delicious.com",gender:"Male",ip_address:"45.225.25.145"},
        {"id":3,first_name:"Lottie",last_name:"Dupre",email:"ldupre2@dot.gov",gender:"Female",ip_address:"254.46.181.79"},
    ],
    stats:[{ user_id: 139, date: '2019-10-08', page_views: 160, clicks: 112 },
        { user_id: 139, date: '2019-10-09', page_views: 990, clicks: 813 },
        { user_id: 139, date: '2019-10-10', page_views: 900, clicks: 930 }],
    user: '',
    userId: "",
    date: ['2020-01-01', '2021-01-01'],
    currentPage: 1,
    pageSize: 10,
    usersAmount: 10,
    loading: false
}

const usersRerducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
        }
        case SET_USERS_AMOUNT:{
            return {...state, usersAmount: action.amount}
        }
        case SET_USER:{
            return {...state, user: action.name}
        }
        case SET_USERID:{
            return {...state, userId: action.id}
        }
        case SET_STATS:{
            return {...state, stats: action.stats}
        }
        case SET_DATE:{
            return {...state, date: action.date}
        }
        case SET_LOADING:{
            return {...state, loading: action.loading}
        }
        default :
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setUsersAmount = (amount) => ({type: SET_USERS_AMOUNT, amount})
export const setUserInfo = (name) => ({type: SET_USER, name})
export const setUserId = (id) => ({type: SET_USERID, id})
export const setUserStats = (stats) => ({type: SET_STATS, stats})
export const setDate = (date) => ({type: SET_DATE, date})
export const setLoading = (loading) => ({type: SET_LOADING, loading})

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        dispatch(setCurrentPage(currentPage));

        const responce =  await fetch(`/api/user/users?page=${currentPage}`, {method:'GET', headers:{}})
        const data = await responce.json()
        console.log(data);
        dispatch(setUsers(data))
        dispatch(setLoading(false))
    }
}

export const getUsersAmount = () => {
    return async (dispatch) => {

        const responce =  await fetch(`/api/user/usersAmount`, {method:'GET', headers:{}})
        const data = await responce.json()
        console.log(data[0].amount);
        dispatch(setUsersAmount(data[0].amount))
        return data
    }
}

export const requestUserStats = (user_id, startDate = '1900-01-01', endDate = '2200-01-01') => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        const responce =  await fetch(`/api/user/userStatInfo?user_id=${user_id}&startDate=${startDate}&endDate=${endDate}`, {method:'GET', headers:{}})
        const data = await responce.json()
        console.log(data);
        dispatch(setUserStats(data))
        if(startDate == '1900-01-01' && data.length > 0){
            dispatch(setDate([data[0].date,data.slice(-1)[0].date]))
        }
        dispatch(setLoading(false))
    }
}

export const requestUserInfo = (user_id) => {
    return async (dispatch) => {
        const responce =  await fetch(`/api/user/userById?user_id=${user_id}`, {method:'GET', headers:{}})
        const data = await responce.json()
        console.log(data);
        dispatch(setUserInfo(`${data.first_name} ${data.last_name}`))
        dispatch(setUserId(data.id))
    }
}

export const setUser = (name,id) => {
    return async (dispatch) => {
        dispatch(setUserInfo(name));
        dispatch(setUserId(id));
    }
}

export default usersRerducer;