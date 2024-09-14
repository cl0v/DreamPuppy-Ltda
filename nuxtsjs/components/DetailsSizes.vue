<template>
  <client-only>
    <RadioGroup v-model="selectedSize" class="mt-4" @update:modelValue="updateSize">
      <RadioGroupLabel class="sr-only">{{ $t('details.size') }}</RadioGroupLabel>
      <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
        <RadioGroupOption as="template" v-for="size in petSizes" :key="size.name" :value="size"
          :disabled="!size.inStock" v-slot="{ active, checked }">
          <div
            :class="[size.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'cursor-not-allowed bg-gray-50 text-gray-200', active ? 'ring-2 ring-indigo-500' : '', 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
            <RadioGroupLabel as="span">{{ size.name }}</RadioGroupLabel>
            <span v-if="size.inStock"
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

<script setup lang="ts">
import { ref } from 'vue'
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'


interface PetSizeType {
  name: string;
  query: string;
  inStock: boolean;
}


const props = defineProps({
  petSizes: {
    type: Array as () => PetSizeType[], default: () => []
  }
})

const availableSizes = props.petSizes!

const { size } = useRoute().query

const maybeSize = availableSizes.find((e) => e.query == size)

const selectedSize = ref(maybeSize ?? availableSizes[0])

function updateSize(newSize: PetSizeType) {
  selectedSize.value = newSize

  updateQueryStringParameter('size', newSize.query)

  // useFetchPriceNImages()

}
</script>
