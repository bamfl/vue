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
