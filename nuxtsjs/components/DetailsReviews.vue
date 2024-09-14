<!-- <template>
  <div class="mt-6">
    <h3 class="sr-only">{{ $t('details.layout.reviews') }}</h3>
    <div class="flex items-center">
      <div class="flex items-center">
        <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
          :class="[reviews.average > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
          aria-hidden="true" />
      </div>
      <p class="sr-only">{{ reviews.average }} {{ $t('details.layout.stars') }}</p>
      <a :href="reviews.href" class="disabled ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{
        reviews.totalCount }} {{ $t('details.layout.reviews') }}</a>
    </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style></style> -->