import { StyleSheet, Text, View } from 'react-native'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { useNavigation } from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'
import { useState } from 'react'
import { useSignUpMutation } from '../services/authService'
import { signupSchema } from '../validations/signupSchema'

export const SignUp = () => {
  const { navigate } = useNavigation()
  const [triggerSignUp, result] = useSignUpMutation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

  const handleSignUp = async () => {
    try {
      const validation = signupSchema.validate({
        email,
        password,
        confirmPassword,
      })
      triggerSignUp({ email, password })
    } catch (error) {
      console.log(error)
      console.log(error.path)
      console.log(error.message)
      switch (error.path) {
        case 'email':
          setErrorEmail(error.message)
          break
        case 'password':
          setErrorPassword(error.message)
          break
        case 'confirmPassword':
          setErrorConfirmPassword(error.message)
          break
        default:
          break
      }
    }
  }

  const goToLogin = () => navigate(ROUTE.LOGIN)

  return (
    <View style={styles.signUp}>
      <View style={styles.section}>
        <Text style={styles.title}>Crear cuenta</Text>
        <Input
          error={errorEmail}
          label='Correo electronico'
          placeholder='francisco@shoooes.com'
          onChangeText={setEmail}
          value={email}
        />
        <Input
          error={errorPassword}
          label='Contraseña'
          placeholder='*******'
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <Input
          error={errorConfirmPassword}
          label='Confirmar csontraseña'
          placeholder='*******'
          secureTextEntry
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <Button onPress={handleSignUp}>Registrarse</Button>
      </View>
      <View style={styles.section}>
        <Text>Ya tienes cuenta?</Text>
        <Button onPress={goToLogin}>Ingresar</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  signUp: {
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