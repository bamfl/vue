export function useFormatPrice(num: number) {
  return new Intl.NumberFormat('ru-RU').format(num)
}
