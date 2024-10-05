// import {configureStore} from "@reduxjs/toolkit";
// import todoReducer from "../features/todo/todoSlice";

// export const store = configureStore({
//     reducer: todoReducer,
// })

// export default store;

// Here out store is build from the help of reducer

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer, // Ensure the key "todo" is here
    },
});

export default store;
