import { Genre } from '../components/enums'

export default interface Book {
  title: string
  author: string
  numberOfPages: number
  inStock: boolean
  genre: Genre
}
