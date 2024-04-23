import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Welcome } from './screens/welcome'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='white' style='dark' />
      <Welcome />
    </SafeAreaProvider>
  )
}
