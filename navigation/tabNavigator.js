import { NavigationContainer } from '@react-navigation/native'
import { ShopStack } from './shopStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CartStack } from './cartStack'
import { Cart } from '../icons/cart'
import { Storefront } from '../icons/storefront'
import { OrdersStack } from './ordersStack'

const { Screen, Navigator } = createBottomTabNavigator()

export const TabNavigator = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FC3400',
        tabBarInactiveTintColor: '#9ca3af',
      }}
    >
      <Screen
        name='ShopTab'
        component={ShopStack}
        options={{
          title: 'Tienda',
          tabBarIcon: ({ color }) => <Storefront color={color} />,
        }}
      />
      <Screen
        name='CartTab'
        component={CartStack}
        options={{
          title: 'Carrito',
          tabBarIcon: ({ color }) => <Cart color={color} />,
        }}
      />
      <Screen
        name='OrdersTab'
        component={OrdersStack}
        options={{
          title: 'Ordenes',
          tabBarIcon: ({ color }) => <Cart color={color} />,
        }}
      />
    </Navigator>
  </NavigationContainer>
)
