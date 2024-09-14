<template>
  <DetailsColors :pet-colors="colors" />
</template>

<script setup>
const colors = [
  {
    "name": "Branco",
    "class": "bg-white",
    "selectedClass": "bg-zinc-100",
    "query": "white"
  },
  {
    "name": "Preto",
    "class": "bg-black",
    "selectedClass": "bg-zinc-100",
    "query": "black"
  },
  {
    "name": "Dourado",
    "class": "bg-amber-600",
    "selectedClass": "bg-zinc-100",
    "query": "gold"
  },
  {
    "name": "Cinza",
    "class": "bg-gray-400",
    "selectedClass": "bg-zinc-100",
    "query": "gray"
  },
  {
    "name": "Branco e Preto",
    "class": "bg-gradient-to-r from-white to-black",
    "selectedClass": "bg-zinc-100",
    "query": "white_and_black"
  },
  {
    "name": "Branco e Dourado",
    "class": "bg-gradient-to-r from-white to-amber-600",
    "selectedClass": "bg-zinc-100",
    "query": "white_and_gold"
  }
];
/*

  <div class="flex flex-wrap">
    <div class="flex space-x-2">
      <div class="w-16 h-16 bg-red-500"></div>
      <div class="w-16 h-16 bg-green-500"></div>
      <div class="w-16 h-16 bg-blue-500"></div>
      <div class="w-16 h-16 bg-yellow-500"></div>
      <div class="w-16 h-16 bg-purple-500"></div>
      <div class="w-16 h-16 bg-pink-500"></div>
      <div class="w-16 h-16 bg-indigo-500"></div>
      <div class="w-16 h-16 bg-teal-500"></div>
      <div class="w-16 h-16 bg-orange-500"></div>
      <div class="w-16 h-16 bg-gray-500"></div>
    </div>
    <!-- Primeira Linha -->
    <div class="flex flex-wrap">

      <div class="w-16 h-16 m-1 bg-red-500"></div>
      <div class="w-16 h-16 m-1 bg-green-500"></div>
      <div class="w-16 h-16 m-1 bg-blue-500"></div>
      <div class="w-16 h-16 m-1 bg-yellow-500"></div>
      <div class="w-16 h-16 m-1 bg-purple-500"></div>
      <div class="w-16 h-16 m-1 bg-pink-500"></div>
      <div class="w-16 h-16 m-1 bg-indigo-500"></div>
      <div class="w-16 h-16 m-1 bg-teal-500"></div>
      <div class="w-16 h-16 m-1 bg-orange-500"></div>
      <div class="w-16 h-16 m-1 bg-gray-500"></div>
    </div>
    <!-- Segunda Linha -->
    <div class="flex flex-wrap">

      <div class="w-16 h-16 m-1 bg-red-600"></div>
      <div class="w-16 h-16 m-1 bg-green-600"></div>
      <div class="w-16 h-16 m-1 bg-blue-600"></div>
      <div class="w-16 h-16 m-1 bg-yellow-600"></div>
      <div class="w-16 h-16 m-1 bg-purple-600"></div>
      <div class="w-16 h-16 m-1 bg-pink-600"></div>
      <div class="w-16 h-16 m-1 bg-indigo-600"></div>
      <div class="w-16 h-16 m-1 bg-teal-600"></div>
      <div class="w-16 h-16 m-1 bg-orange-600"></div>
      <div class="w-16 h-16 m-1 bg-gray-600"></div>
    </div>

    <!-- Terceira Linha -->
    <div class="flex flex-wrap">

      <div class="w-16 h-16 m-1 bg-red-700"></div>
      <div class="w-16 h-16 m-1 bg-green-700"></div>
      <div class="w-16 h-16 m-1 bg-blue-700"></div>
      <div class="w-16 h-16 m-1 bg-yellow-700"></div>
      <div class="w-16 h-16 m-1 bg-purple-700"></div>
      <div class="w-16 h-16 m-1 bg-pink-700"></div>
      <div class="w-16 h-16 m-1 bg-indigo-700"></div>
      <div class="w-16 h-16 m-1 bg-teal-700"></div>
      <div class="w-16 h-16 m-1 bg-orange-700"></div>
      <div class="w-16 h-16 m-1 bg-gray-700"></div>
    </div>
  </div>
*/
</script>

