import { client } from './sanity'

const sanityQuery = (query: string, params?: any) => client.fetch(query, params)

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

export const getFeaturedRestaurantsCategory = (name: string) => {
  return sanityQuery(
    `
    *[_type=='featured' && name==$name]{
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
  `,
    { name }
  )
}
