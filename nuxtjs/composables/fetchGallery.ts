export default async function () {

    const { data } = await useFetch('/api/gallery')

    return data.value?.pets.map(product => ({
      ...product,
      href: `/filhotes/${product.uuid}`
    }));
  };