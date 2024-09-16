<template>
  <div class="p-2 border bg-white dark:bg-black dark:border-gray-700 rounded mt-2">
    <section>
      <h6 class="text-lg font-bold">
        <slot />
      </h6>
      <slot name="description" />
    </section>
  </div>
</template>