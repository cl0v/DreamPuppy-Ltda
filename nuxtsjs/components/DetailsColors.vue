<template>
  <client-only>
    <RadioGroup v-model="selectedColor" class="mt-4" @update:model-value="updateColor">
      <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
      <div class="flex items-center space-x-3">
        <RadioGroupOption as="template" v-for="color in availableColors" :key="color.query" :value="color"
          v-slot="{ active, checked }">
          <div
            :class="[active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
            <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>

            <span aria-hidden="true"
              :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </client-only>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

interface PetColorType {
  name: string
  query: string
  class: string
}

const props = defineProps({
  petColors: { type: Array as () => PetColorType[], default: () => [] }
})

const availableColors = props.petColors;

const {color} = useRoute().query

const maybeColor = availableColors.find((e) => e.query == color)

const selectedColor = ref(maybeColor ?? availableColors[0])

function updateColor(newColor: PetColorType) {
  selectedColor.value = newColor

  updateQueryStringParameter('color', newColor.query);
  // useFetchPriceNImages()
}
</script>
