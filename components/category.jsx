import { StyleSheet, Text, View } from 'react-native'

export const Category = ({ name }) => (
  <View style={styles.category}>
    <Text style={styles.name}>{name}</Text>
  </View>
)

const styles = StyleSheet.create({
  category: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 32,
    height: 64,
    justifyContent: 'center',
    marginHorizontal: 8,
    width: 64,
  },
  name: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
