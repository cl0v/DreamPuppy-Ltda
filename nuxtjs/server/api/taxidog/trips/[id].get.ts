export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    return {
        "origin": "Curitiba",
        "destination": "São Paulo",
        "price": 100.30,
        "id": id
    }
})