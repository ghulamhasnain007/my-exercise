import { configureStore } from "@reduxjs/toolkit";
import RedConfig from '../reducer/ReducerConfig'

export const store = configureStore(
    {
        reducer: RedConfig
    }
)