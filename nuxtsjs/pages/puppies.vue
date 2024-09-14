<script setup lang="ts">
defineOgImageComponent('NuxtSeo', {
  headline: 'Boas vindas ao iPets',
  alt: 'Logo da iPets',
  url: '/logo.png',
  title: 'Filhotes disponíveis',
  description: 'Compre seu filhote de forma segura!',
  theme: '#000000',
  colorMode: 'light',
})

const { data } = await useFetch('/api/gallery')

const pets = data.value?.pets;

// pets?.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-4 sm:px-1 sm:py-4 lg:max-w-7xl lg:px-8 max-sm:py-2">
      <h2 class="sr-only">Filhotes</h2>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="pet in pets" :key="pet.uuid" :href="'/filhotes/' + pet.uuid" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img :src="pet.imageUrl" :alt="pet.imageAlt"
              class="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ pet.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            {{ $t('gallery.startsAt') + ' ' + $t('global.currency') + pet.price }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>