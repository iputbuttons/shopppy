import { StyleSheet, Text, View } from 'react-native'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'

export const Login = () => {
  const { navigate } = useNavigation()

  const handleLogin = () => {}

  const goToSignUp = () => navigate(ROUTE.SIGN_UP)

  return (
    <View style={styles.login}>
      <View style={styles.section}>
        <Text style={styles.title}>Bienvenido a Shoooes</Text>
        <Input label='Correo electronico' placeholder='francisco@shoooes.com' />
        <Input label='Contraseña' placeholder='******' secureTextEntry />
        <Button onPress={handleLogin}>Ingresar</Button>
      </View>
      <View style={styles.section}>
        <Text>Aun no tienes cuenta?</Text>
        <Button onPress={goToSignUp}>Registrate</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  login: {
    minHeight: '100%',
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  section: {
    width: '100%',
    gap: 16,
  },
  title: {
    fontFamily: 'Unbounded-Bold',
    fontSize: 24,
  },
})
