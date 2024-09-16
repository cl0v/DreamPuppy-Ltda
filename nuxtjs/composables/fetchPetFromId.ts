export default function (id: string) {

  if (id.length < 6) throw 'Id inválido';


  const product = {
    name: 'Filhote de Golden Retriever',
    price: 1500,
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Cachorros', href: '#' },
      { id: 2, name: 'Golden Retriever', href: '#' },
    ],
    images: [
      {
        src: '/temp/0.heic',
        alt: 'Primeira imagem do filhote.',
      },
      {
        src: '/temp/1.heic',
        alt: 'Segunda imagem do filhote.',
      },
      {
        src: '/temp/3.heic',
        alt: 'Terceira imagem do filhote.',
      },
      {
        src: '/temp/2.heic',
        alt: 'Quarta imagem do filhote.',
      },
    ], gender: [
      { name: 'Macho', inStock: true },
      { name: 'Fêmea', inStock: true },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description:
      'Nada melhor do que um Filhote de Golden Retriever para alegrar os seus dias. Essa raça é conhecida por seu carisma imenso e a quantidade de energia para brincadeiras. Além de ser uma ótima opção para quem tem crianças em casa.',
    highlights: [
      'Pelagem padrão',
      'Pedigree CBKC',
      'Microchipado',
      'Vermifugado e Vacinado corretamente',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  }

  const reviews = { href: '#', average: 4, totalCount: 117 }
  return {
    product,
    reviews,
  }
}