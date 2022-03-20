import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from './index'

export interface IUserInfoState {
    id: string,
    firstName: string,
    lastName: string,
    role: number
}

let initialState: IUserInfoState = {
    id: "",
    firstName: "",
    lastName: "",
    role: -1
}

export const USER_ROLE: {[key: string]: number} = {
    'developer': 0,
    'tester': 1,
    'manager': 2
}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserInfo(state, action: PayloadAction<IUserInfoState>){
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.role = USER_ROLE[action.payload.role];
        }
    }
});

export const selectUserInfo = (state: RootState) => state.userInfo
export const { setUserInfo } = userInfoSlice.actions