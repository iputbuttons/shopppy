import { FlatList, StyleSheet, Text, View } from 'react-native'
import products from '../data/products.json'
import { ProductItem } from '../components/productItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SearchInput } from '../components/searchInput'
import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ROUTE } from '../navigation/routes'

export const ItemListCategories = () => {
  const { params } = useRoute()
  const { navigate, setOptions } = useNavigation()
  const [textToSearch, setTextToSearch] = useState('')
  const [productsFiltered, setProductsFiltered] = useState(products)

  const navigateToItemDetails = productId =>
    navigate(ROUTE.ITEM_DETAIL, { productId })

  const capitalizeBrand = brandToCapitalize => {
    const [firstLetter, ...restLetters] = brandToCapitalize
    const brand = firstLetter.toUpperCase() + restLetters.join('')
    return brand
  }

  useEffect(() => {
    const productsFiltered = products.filter(product =>
      product.model.toLowerCase().includes(textToSearch.toLowerCase().trim())
    )
    setProductsFiltered(productsFiltered)
  }, [textToSearch])

  useEffect(() => {
    const brand = capitalizeBrand(params.brand)
    setOptions({ title: brand })
  }, [params.brand])

  return (
    <View style={styles.itemListCategories}>
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
    </View>
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
    backgroundColor: 'white',
  },
  list: { gap: 32 },
})
