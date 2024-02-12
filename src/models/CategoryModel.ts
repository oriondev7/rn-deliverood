import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface CategoryModel {
  _id: string
  description: string
  image: SanityImageSource
  name: string
}
