import breeds from '~/assets/jsons/breeds_details.json'

export default defineEventHandler((event) => {
    const { breed } = getQuery(event)
    const pet = breeds.find((e) => e.uuid == breed)

    if (!pet) {
        throw createError({
            statusCode: 404,
            message: 'Filhote não encontrado!'
        })
    }
    /*
    "gender": [
                
            ],
            "highlights": [
                "Pelagem padrão",
                "Pedigree CBKC",
                "Microchipado",
                "Vermifugado e Vacinado corretamente"
            ]
            
    */
    return pet
})
