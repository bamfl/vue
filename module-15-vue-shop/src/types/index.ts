export type IAlert = {
  type: string
  title: string
  message: string
} | null

export interface IUser {
  id: string
  email: string
  password: string
}

export interface IProduct {
  id?: string
  count: number
  title: string
  category: string
  price: number
  img: string
  isInCart?: boolean
}
