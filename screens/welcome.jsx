import { SafeAreaView } from 'react-native-safe-area-context'
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'

export const Welcome = () => {
  const handlePress = () => {
    Alert.alert('Ingresar')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Image source={require('../assets/Welcome/icon.png')} />
      <View style={styles.texts}>
        <Text style={styles.title}>Shoooes</Text>
        <Text style={styles.text}>Pisa fuerte, elige bien</Text>
      </View>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    gap: 32,
    justifyContent: 'center',
    padding: 16,
  },
  texts: {
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  text: {
    color: '#6B7280',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FC3400',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
