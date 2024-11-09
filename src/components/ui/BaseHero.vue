<template>
  <section class="p-6">
    <article class="hero bg-base-200 min-h-screen rounded-lg">
      <div class="hero-content text-center">
        <div class="max-w-xl">
          <h1 class="text-5xl font-bold"><slot name="title"></slot></h1>
          <p class="py-6">
            <slot name="description"></slot>
          </p>
          <router-link v-if="props.cta" :to="props.ctaLink" class="btn btn-primary">{{
            props.ctaText
          }}</router-link>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
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
});
</script>
