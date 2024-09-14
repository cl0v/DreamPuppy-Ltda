<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2">
      <form class="max-w-md mx-auto" @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">Nome completo *</label>
          <input type="text" id="name" v-model="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">CPF *</label>
          <input type="text" id="name" v-model="cpf"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-gray-700 font-bold mb-2">Telefone *</label>
          <input type="tel" id="phone" v-model="phone"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="whatsapp" class="block text-gray-700 font-bold mb-2">WhatsApp</label>
          <input type="tel" id="whatsapp" v-model="whatsapp"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="street" class="block text-gray-700 font-bold mb-2">Endereço completo*</label>
          <input type="text" id="street" v-model="address"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="number" class="block text-gray-700 font-bold mb-2">Cidade *</label>
          <input type="text" id="number" v-model="city"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="cep" class="block text-gray-700 font-bold mb-2">CEP *</label>
          <input type="text" id="cep" v-model="cep"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <UButton type="submit" style="color: white" :loading="pending" block size="xl" icon="i-mdi-credit-card">
          Continuar para pagamento
        </UButton>
      </form>
    </div>
    <div class="hidden md:block md:w-1/2 bg-gray-100 p-4">
      <h2 class="text-xl font-bold mb-4">{{ $t("register.title") }}</h2>
      <div class="mb-4">
        <p class="text-gray-700 font-bold">{{ $t("register.details") }}</p>
        <p>{{ details.breed }}, {{ details.color }}, {{ details.gender }}, {{ details.size }}</p>
      </div>
      <div class="mb-4">
        <p class="text-gray-700 font-bold"> {{ $t("register.total") }}</p>
        <p>{{ $t('global.currency') }} {{ details.price }}</p>
      </div>
      <!-- <div class="mb-4">
        <p class="text-gray-700 font-bold">{{ $t("register.description") }}</p>
        <p>Breve descricao</p>
      </div> -->

      <div class="mt-10">
        <h2 class="text-sm font-medium text-gray-900">{{ $t('register.more.title') }}</h2>
        <div class="mt-2 space-y-1">
          <p class="text-xs text-gray-600">{{ $t('register.more.first') }}</p>
          <p class="text-xs text-gray-600">{{ $t('register.more.second') }}</p>
          <p class="text-xs text-gray-600">{{ $t('register.more.third') }}</p>
        </div>
      </div>
      <!-- <div class="mb-4">
        <p class="text-gray-700 font-bold">Imagem:</p>
        <img :src="product.image" alt="Product Image" class="w-full">
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">

const pending = ref(false)

const name = defineModel('name')
const cpf = defineModel('cpf')
const phone = defineModel('phone')
const whatsapp = defineModel('whatsapp')
const address = defineModel('address')
const city = defineModel('city')
const cep = defineModel('cep')

const { intent } = useRoute().query

const details = decodeToken<IntentType>(intent!.toString())



const submitForm = async () => {
  pending.value = true

  const response = await $fetch<{ url: string }>('/api/create-order', {
    method: 'POST',
    body: {
      breed: details.qBreed,
      size: details.qSize,
      gender: details.qGender,
      color: details.qColor,
      name: name.value,
      cpf: cpf.value,
      phone: phone.value,
      whatsapp: whatsapp.value,
      address: address.value,
      city: city.value,
      cep: cep.value,
    },
  })

  pending.value = false

  if (response.url) {
    // TODO: Talvez seja melhor mudar para navigateTo
    window.location.href = response.url
  } else {
    alert('Something went wrong')
  }

}

</script>
