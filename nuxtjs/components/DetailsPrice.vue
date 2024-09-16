<script setup lang="ts">


const props = defineProps(['petPrice'])

</script>

<template>
    <ClientOnly>
        <p class="text-3xl tracking-tight text-gray-900">{{ $t('global.currency') + props.petPrice }}</p>
    </ClientOnly>
</template>
