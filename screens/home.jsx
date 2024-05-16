import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../components/header'
import { Categories } from '../components/categories'
import { StyleSheet } from 'react-native'
import { Banner } from '../components/banner'

export const Home = () => (
  <SafeAreaView style={styles.home}>
    <Header />
    <Banner />
    <Categories />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  home: {
    flex: 1,
    padding: 16,
    gap: 32,
  },
})
