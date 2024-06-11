import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './tabNavigator'
import { AuthStack } from './authStack'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useGetProfileImageQuery } from '../services/shopService'
import { setProfilePicture, setUser } from '../features/auth/authSlice'
import { fetchSession } from '../db'

export const MainNavigator = () => {
  const { localId } = useSelector(state => state.auth.value.user)
  const { data } = useGetProfileImageQuery(localId)
  const dispatch = useDispatch()

  useEffect(() => {
    const getSession = async () => {
      const session = await fetchSession()
      if (session) dispatch(setUser(session))
    }
    getSession()
  }, [])

  useEffect(() => {
    if (data) {
      dispatch(setProfilePicture(data.image))
    }
  }, [data])

  return (
    <NavigationContainer>
      {localId ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}
