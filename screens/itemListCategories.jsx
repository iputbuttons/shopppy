import { FlatList, StyleSheet, Text } from 'react-native'
import products from '../data/products.json'
import { ProductItem } from '../components/productItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SearchInput } from '../components/searchInput'
import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'

export const ItemListCategories = () => {
  const { params } = useRoute()
  const { navigate } = useNavigation()
  const [textToSearch, setTextToSearch] = useState('')
  const [productsFiltered, setProductsFiltered] = useState(products)

  const navigateToItemDetails = productId =>
    navigate(ROUTE.ITEM_DETAIL, { productId })

  useEffect(() => {
    const productsFiltered = products.filter(product =>
      product.model.toLowerCase().includes(textToSearch.toLowerCase().trim())
    )
    setProductsFiltered(productsFiltered)
  }, [textToSearch])

  return (
    <SafeAreaView style={styles.itemListCategories}>
      <Text style={styles.brand}>{params.brand}</Text>
      <SearchInput
        onChangeText={setTextToSearch}
        placeholder='Buscar zapatillas aquí...'
        value={textToSearch}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={productsFiltered}
        key={item => item.id}
        renderItem={({ item }) => (
          <ProductItem
            {...item}
            onPress={() => navigateToItemDetails(item.id)}
          />
        )}
      />
      {productsFiltered.length === 0 ? (
        <Text>
          No se han encontrado zapatillas con la búsqueda "{textToSearch}"
        </Text>
      ) : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  brand: {
    fontFamily: 'Unbounded-Bold',
    fontSize: 18,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  itemListCategories: {
    gap: 32,
    padding: 16,
  },
  list: { gap: 32 },
})
