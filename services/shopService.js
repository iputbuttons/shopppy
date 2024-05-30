import { baseUrl } from '../firebase/database'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { objectToArray } from '../utils/array'

// TODO: Agregar endpoint getProductById

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getProductsByCategory: builder.query({
      query: brand => `products.json?orderBy="brand"&equalTo="${brand}"`,
      transformResponse: response => objectToArray(response),
    }),
    getCategories: builder.query({
      query: () => 'categories.json',
    }),
    postOrder: builder.mutation({
      query: order => ({
        url: 'orders.json',
        method: 'POST',
        body: order,
      }),
    }),
  }),
})

export const {
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
  usePostOrderMutation,
} = shopApi
