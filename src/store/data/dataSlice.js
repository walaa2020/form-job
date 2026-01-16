import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
const initialState = { savedInfo: {} }
const dataSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
        saveFun: (state, actions) => {
            localStorage.setItem("form", JSON.stringify(actions.payload))
        },
        saveCookies: (state, actions) => {
            Cookies.set("form", JSON.stringify(actions.payload), { expires: 3 });
        }

    },
});
export const { saveFun, saveCookies } = dataSlice.actions;
export default dataSlice.reducer;