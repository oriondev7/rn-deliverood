import { client } from './sanity'

const sanityQuery = (query: any, params?: any) => client.fetch(query, params)

export const getFeaturedRestaurants = () => {
  return sanityQuery(`
    *[_type=='featured']{
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
          ...
        },
        type->{
          name
        }
      }
    }
  `)
}

export const getCategories = () => {
  return sanityQuery(`
    *[_type=='category']
  `)
}

export const getFeaturedRestaurantsByID = (id: any) => {
  return sanityQuery(`
    *[_type=='featured' && _id == $id]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
          ...
        },
        type->{
          name
        }
      }
    }[0]
  `, {id})
}
