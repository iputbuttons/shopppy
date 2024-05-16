import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '../screens/welcome'
import { Home } from '../screens/home'
import { ItemListCategories } from '../screens/itemListCategories'
import { ItemDetail } from '../screens/itemDetail'
import { ROUTE } from './routes'

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator()

export const Navigator = () => (
  <NavigationContainer>
    <StackNavigator screenOptions={{ headerShown: false }}>
      <StackScreen name={ROUTE.WELCOME} component={Welcome} />
      <StackScreen name={ROUTE.HOME} component={Home} />
      <StackScreen
        name={ROUTE.ITEM_LIST_CATEGORIES}
        component={ItemListCategories}
      />
      <StackScreen name={ROUTE.ITEM_DETAIL} component={ItemDetail} />
    </StackNavigator>
  </NavigationContainer>
)
