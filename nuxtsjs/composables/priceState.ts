const usePetPrice = () => {
  const petPrice = useState<number>('price', () => 0)

  const setPetPrice = (price: number) => {
    petPrice.value = price
  }
  return {
    petPrice,
    setPetPrice
  }
}
export default usePetPrice