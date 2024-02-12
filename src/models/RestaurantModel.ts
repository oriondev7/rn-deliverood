import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { DishModel } from './'

export interface RestaurantModel {
  _id: string
  address: string
  dishes: DishModel[]
  description: string
  lat: number
  lng: number
  name: string
  rating: number
  reviews: number
  image: SanityImageSource
  type: {
    name: string
  }
}
