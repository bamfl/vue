export interface IOrder {
  id?: string,
  fullName: string,
  phone: string,
  amount: string,
  status: string
}

export enum EStatus {
  active = 'Активный',
  pending = 'В процессе',
  cancelled = 'Отменен',
  done = 'Готово'
}
