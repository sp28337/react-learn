import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
    type: "profit",
    comment: "",
}

export const mainDataSlice = createSlice({
    name: 'mainDataReducer',
    initialState,
    reducers: {
      changeValue: (state, action) => {
        state.value = action.payload
      },
      changeType: (state, action) => {
        state.type = action.payload
      },
      changeComment: (state, action) => {
        state.comment = action.payload
      },
    },
  })
  
  export const { changeType, changeValue, changeComment } = mainDataSlice.actions
  
  export default mainDataSlice.reducer
