import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTE } from './routes'
import { Login } from '../screens/login'
import { SignUp } from '../screens/signUp'

const { Navigator, Screen } = createNativeStackNavigator()

export const AuthStack = () => (
  <Navigator initialRouteName={ROUTE.LOGIN}>
    <Screen name={ROUTE.LOGIN} component={Login} />
    <Screen name={ROUTE.SIGN_UP} component={SignUp} />
  </Navigator>
)
