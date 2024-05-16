import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import products from '../data/products.json'
import { theme } from '../configs/theme'
import { useState } from 'react'
import { useRoute } from '@react-navigation/native'

export const ItemDetail = () => {
  const { params } = useRoute()
  const [selectedSize, setSelectedSize] = useState()

  const { brand, image, model, price } = products.find(
    product => product.id === params.productId
  )
  const SIZES = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  const handleSize = size => {
    setSelectedSize(size)
  }

  return (
    <SafeAreaView style={styles.itemDetail}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode='contain'
          />
          <Text style={styles.titleSection}>Details</Text>
          <View style={styles.info}>
            <Text style={styles.text}>{brand}</Text>
            <Text style={styles.text}>{model}</Text>
            <Text style={styles.text}>{price}</Text>
          </View>
          <Text style={styles.titleSection}>Size</Text>
          <View style={styles.sizes}>
            {SIZES.map(size => {
              const isSelected = selectedSize === size

              return (
                <Pressable
                  key={size}
                  style={isSelected ? styles.selectedSize : styles.size}
                  onPress={() => handleSize(size)}
                >
                  <Text
                    style={
                      isSelected ? styles.selectedSizeText : styles.sizeText
                    }
                  >
                    {size}
                  </Text>
                </Pressable>
              )
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  itemDetail: {
    padding: 16,
  },
  container: {
    gap: 32,
  },
  image: {
    width: '100%',
    height: 320,
  },
  info: {
    gap: 16,
  },
  titleSection: {
    fontFamily: 'Unbounded-Bold',
  },
  text: {
    textTransform: 'capitalize',
  },
  sizes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  size: {
    borderWidth: 2,
    borderColor: theme.colors.gray[500],
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  selectedSize: {
    borderColor: theme.colors.primary[600],
    borderWidth: 2,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  sizeText: {
    color: theme.colors.gray[500],
    fontWeight: 'bold',
  },
  selectedSizeText: {
    color: theme.colors.primary[600],
    fontWeight: 'bold',
  },
})
