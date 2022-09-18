import { createSlice } from '@reduxjs/toolkit'

interface UserSlice {
  user: {
    name: string | null
    email: string | null
    avatar: string | null
  } | null
}

const initialState = {
  user: null
} as UserSlice

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
    },
    removeUser: (state, action) => {
      state.user = null
    },
  },
})

export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer
