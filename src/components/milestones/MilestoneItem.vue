<template>
  <div class="card bg-base-200 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">
        {{ props.name }}
        <div class="badge badge-secondary">{{ props.frequency }}</div>
      </h2>
      <p>{{ props.startDate }}</p>
      <div class="card-actions justify-end">
        <router-link class="btn btn-primary" :to="milestoneDetailsLink">See Details</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  id: String,
  name: String,
  startDate: String,
  frequency: String,
});

const milestoneDetailsLink = computed(() => {
  return `/milestones/${props.id}`;
})
</script>
