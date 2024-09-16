<script setup lang="ts">

import usePetImages from '~/composables/imagesState';

const { petImages } = usePetImages();

const props = defineProps(['petImages'])

</script>


<style>
@media only screen and (max-width: 1026px) {
    #fadeshow1 {
        display: none;
    }
}

@media only screen and (min-width: 1026px) {
    #fadeshow2 {
        display: none;
    }
}
</style>

<template>
    <div id="fadeshow2">
        <CustomCarousel :petImages="props.petImages" />
    </div>
    <div id="fadeshow1">
        <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
            data-carousel-item>
            <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <NuxtImg :src="props.petImages[0]" alt="Primeira imagem do filhote."
                    class="h-full w-full object-cover object-center" />
            </div>
            <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8" data-carousel-item>
                <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <NuxtImg :src="props.petImages[1]" alt="Segunda imagem do filhote."
                        class="h-full w-full object-cover object-center" />
                </div>
                <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg" data-carousel-item>
                    <NuxtImg :src="props.petImages[2]" alt="Terceira imagem do filhote."
                        class="h-full w-full object-cover object-center" />
                </div>
            </div>
            <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg"
                data-carousel-item>
                <NuxtImg :src="props.petImages[3]" alt="Quarta imagem do filhote."
                    class="h-full w-full object-cover object-center" />
            </div>
        </div>
    </div>
</template>