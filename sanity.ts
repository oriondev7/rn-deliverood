import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'j3o8s5xo',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)
