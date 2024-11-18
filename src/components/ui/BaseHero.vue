<template>
  <article
    class="hero bg-base-200 min-h-70dvh rounded-lg"
    :class="{
      'bg-gradient-to-r from-blue-100 to-teal-100 dark:from-gray-800 dark:to-black':
        withBg,
    }"
  >
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 class="text-5xl font-bold">
          <slot name="title"></slot>
        </h1>
        <p class="py-6">
          <slot name="description"></slot>
        </p>
        <div v-if="cta">
          <button v-if="ctaAction" class="btn btn-primary" @click="ctaAction">
            {{ ctaText }}
          </button>
          <router-link v-else :to="ctaLink" class="btn btn-primary">
            {{ ctaText }}
          </router-link>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  cta: {
    type: Boolean,
  },
  ctaText: {
    type: String,
  },
  ctaLink: {
    type: String,
    default: '/',
  },
  ctaAction: {
    type: Function,
    default: null,
  },
  withBg: {
    type: Boolean,
    default: false,
  },
});
</script>
