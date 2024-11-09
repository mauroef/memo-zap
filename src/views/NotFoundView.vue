<template>
  <BaseHero cta cta-text="Return to Homepage" cta-link="/">
    <template #title> Uh-oh! Page Not Found </template>
    <template #description
      >It seems like you’re a bit off track. Let’s get you back to celebrating
      those important moments!</template
    >
  </BaseHero>
</template>

<script setup>
import BaseHero from '@/components/ui/BaseHero.vue';
</script>
