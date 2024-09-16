import pets from '~/assets/jsons/breeds.json'

export default defineEventHandler(async () => {
    return {
        pets
    }
})
