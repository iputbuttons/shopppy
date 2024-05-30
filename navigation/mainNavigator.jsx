import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './tabNavigator'
import { AuthStack } from './authStack'
import { useSelector } from 'react-redux'

export const MainNavigator = () => {
  const user = useSelector(state => state.auth.value.user)

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}
