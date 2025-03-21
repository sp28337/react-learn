import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducers/counter'
import mainDataSlice from './reducers/main-data-reducer'
import dataReducer from './reducers/data'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    typeReducer: mainDataSlice,
    dataReducer: dataReducer
  },
})
