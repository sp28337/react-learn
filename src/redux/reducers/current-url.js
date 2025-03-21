import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  url: "",
}

export const urlReducer = createSlice({
    name: 'urlReducer',
    initialState,
    reducers: {
      setUrl: (state, action) => {
            state.url = action.payload
        },
    }
})

  
export const { setUrl } = urlReducer.actions
export default urlReducer.reducer
