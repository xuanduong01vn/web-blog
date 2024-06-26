import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        login:{
            currentUser: null,
            isFetching: false,
            error: false
        }
    },
    reducers:{
        loginStart:(state)=>{
            state.login.isFetching = true;
        },
        loginSuccess:(state,action)=>{
            state.login.isFetching =false;
            state.login.currentUser= action.payload;
            state.login.error = false;
        },
        loginFailed: (state)=>{
            state.login.isFetching = false;
            state.login.error=true;
        },
        logOutStart:(state)=>{
            state.login.isFetching = true;
        },
        logOutSuccess:(state)=>{
            state.login.isFetching =false;
            state.login.currentUser= null;
            state.login.error = false;
        },
        logOutFailed: (state)=>{
            state.login.isFetching = false;
            state.login.error=true;
        }
            
    }
})

export const { 
    loginStart, 
    loginSuccess, 
    loginFailed,
    logOutStart,
    logOutSuccess,
    logOutFailed
} = authSlice.actions;

export default authSlice.reducer;