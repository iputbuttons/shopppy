import { FlatList, StyleSheet, Text, View } from 'react-native'
import orderData from '../data/orders.json'
import { OrderItem } from '../components/orderItem'

export const Orders = () => (
  <View style={styles.orders}>
    <FlatList
      contentContainerStyle={styles.list}
      data={orderData}
      renderItem={({ item }) => <OrderItem {...item} />}
      ListEmptyComponent={<Text>No orders</Text>}
    />
  </View>
)

export const styles = StyleSheet.create({
  orders: {
    backgroundColor: 'white',
    minHeight: '100%',
  },
  list: {
    gap: 32,
  },
})
