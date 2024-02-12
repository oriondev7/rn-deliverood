import { RestaurantModel } from './'

export interface FeaturedModel {
  description: string
  name: string
  restaurants: RestaurantModel[]
}
