import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from './index'

interface UserInfoState {
    id: string,
    firstName: string,
    lastName: string,
    role: number
}

const initialState: UserInfoState = {
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
        setUserInfo(state, action: PayloadAction<UserInfoState>){
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.role = USER_ROLE[action.payload.role];
        }
    }
});

export const selectUserInfo = (state: RootState) => state.userInfo
export const { setUserInfo } = userInfoSlice.actions