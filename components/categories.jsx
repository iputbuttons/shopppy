import { FlatList, StyleSheet, Text, View } from 'react-native'
import data from '../data/categories.json'
import { CategoryItem } from './categoryItem'
import { useNavigation } from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'

export const Categories = () => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.categories}>
      <Text style={styles.text}>Marcas top</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        horizontal
        renderItem={({ item }) => (
          <CategoryItem
            name={item}
            onPress={() =>
              navigate(ROUTE.ITEM_LIST_CATEGORIES, {
                brand: item,
              })
            }
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'column',
    gap: 16,
  },
  list: {
    gap: 12,
  },
  text: {
    fontFamily: 'Unbounded-Bold',
    fontSize: 16,
  },
})
