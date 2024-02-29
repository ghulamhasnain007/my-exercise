import { configureStore } from "@reduxjs/toolkit";
import RedConfig from '../reducer/ReducerConfig'

const Store = configureStore({
    reducer : RedConfig
})

export default Store