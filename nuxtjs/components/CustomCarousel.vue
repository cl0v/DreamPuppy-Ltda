<template>
    <Carousel>
        <Slide v-for="idx in props.petImages.length" :key="idx">
            <div class="carousel__item">
                <NuxtImg :src="props.petImages[idx]" alt="Imagem do filhote." class="h-full w-full object-cover object-center" />
            </div>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>

    </Carousel>

</template>
<style>
.carousel__item {
    /* 
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    */
    min-height: 200px;
    width: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}
</style>
<script setup>


// import { Icon } from '#components'

// const MyIcon = h(Icon, { name: 'uil:twitter' })
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

// import 'vue3-carousel/dist/carousel.css'

const props = defineProps(['petImages'])
console.log(props.petImages.length)
</script>