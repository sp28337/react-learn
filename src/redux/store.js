import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducers/counter'
import mainDataSlice from './reducers/main-data-reducer'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    typeReducer: mainDataSlice,
  },
})