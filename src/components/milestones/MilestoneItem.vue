<template>
  <div class="card bg-base-200 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">
        {{ props.name }}
        <div class="badge badge-secondary">{{ props.frequency }}</div>
      </h2>
      <p>{{ props.startDate }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">See Details</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: String,
  startDate: String,
  frequency: String,
});
</script>
