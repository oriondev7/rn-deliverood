import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface DishModel {
  _id: string
  description: string
  image: SanityImageSource
  name: string
  price: number
}
