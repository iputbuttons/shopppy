import { FlatList, StyleSheet, Text, View } from 'react-native'
import data from '../data/categories.json'
import { Category } from './category'

export const Categories = () => (
  <View>
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => <Category name={item} />}
    />
  </View>
)
