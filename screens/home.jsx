import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../components/header'

export const Home = () => (
  <SafeAreaView style={styles.safeArea}>
    <Header />
    <Categories />
  </SafeAreaView>
)
