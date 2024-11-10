<template>
  <section class="max-w-7xl mx-auto p-6 min-h-screen">
    <article class="bg-base-200 p-6 rounded-lg max-w-lg mx-auto">
      <h1 class="text-3xl">New Milestone</h1>
      <div class="w-full">
        <div class="divider"></div>
      </div>
      <milestone-form></milestone-form>
    </article>
  </section>
</template>

<script setup>
import MilestoneForm from '@/components/milestones/MilestoneForm.vue';
</script>
