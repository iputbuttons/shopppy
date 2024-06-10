import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './tabNavigator'
import { AuthStack } from './authStack'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useGetProfileImageQuery } from '../services/shopService'
import { setProfilePicture } from '../features/auth/authSlice'

export const MainNavigator = () => {
  const { localId } = useSelector(state => state.auth.value.user)
  const { data } = useGetProfileImageQuery(localId)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(setProfilePicture(data.image))
    }
  }, [data])

  return (
    <NavigationContainer>
      {/* {user ? <TabNavigator /> : <AuthStack />} */}
      <TabNavigator />
    </NavigationContainer>
  )
}
