import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {
      user: {
        email: null,
        localId: null,
      },
      token: null,
      imageCamera: null,
      profilePicture: null,
      location: {
        address: '',
        latitude: 0,
        longitude: 0,
      },
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value.user.email = action.payload.email
      state.value.user.localId = action.payload.localId
      state.value.token = action.payload.token
    },
    setCameraImage: (state, action) => {
      state.value.imageCamera = action.payload
    },
    setProfilePicture: (state, action) => {
      state.value.profilePicture = action.payload
    },
    setUserLocation: (state, action) => {
      state.value.location = action.payload
    },
    logout: state => {
      state.value = {
        user: {
          email: null,
          localId: null,
        },
        token: null,
        imageCamera: null,
        profilePicture: null,
        location: {
          address: '',
          latitude: 0,
          longitude: 0,
        },
      }
    },
  },
})

export const {
  setUser,
  setCameraImage,
  setProfilePicture,
  setUserLocation,
  logout,
} = authSlice.actions

export default authSlice.reducer
