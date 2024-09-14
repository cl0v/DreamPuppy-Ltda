<template>
  <client-only>
    <RadioGroup v-model="selectedGender" class="mt-4" @update:modelValue="updateGender">
      <RadioGroupLabel class="sr-only">{{ $t('details.gender') }}</RadioGroupLabel>
      <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
        <RadioGroupOption as="template" v-for="gender in availableGenders" :key="gender.name" :value="gender"
          :disabled="!gender.inStock" v-slot="{ active, checked }">
          <div
            :class="[gender.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'cursor-not-allowed bg-gray-50 text-gray-200', active ? 'ring-2 ring-indigo-500' : '', 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
            <RadioGroupLabel as="span">{{ gender.name }}</RadioGroupLabel>
            <span v-if="gender.inStock"
              :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-md']"
              aria-hidden="true" />
            <span v-else aria-hidden="true"
              class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
              <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100"
                preserveAspectRatio="none" stroke="currentColor">
                <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
              </svg>
            </span>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </client-only>
</template>

<script setup>
import { ref } from 'vue'
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'
import availableGenders from  "~/assets/jsons/genders.json"


// interface PetGenderType {
//   name: string
//   inStock: boolean
//   query: string
// }


const { gender } = useRoute().query

const maybeGender = availableGenders.find((e) => e.query == gender)

const selectedGender = ref(maybeGender ?? availableGenders[0])

function updateGender(newGender) {
  selectedGender.value = newGender
  updateQueryStringParameter('gender', newGender.query)
  // useFetchPriceNImages()
}
</script>