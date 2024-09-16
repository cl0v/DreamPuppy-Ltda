// Create a reactive state and set default value
// const petImages = useState('images', () => [])
// const petPrice = useState<number>('price', () => 0)


const usePetImages = () => {
    const petImages = useState<string[]>('images', () => [])

    const setPetImages = (images: string[]) => {
        petImages.value = images
    }
    return {
        petImages,
        setPetImages
    }
}
export default usePetImages
