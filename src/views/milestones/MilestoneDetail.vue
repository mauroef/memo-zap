<template>
  <section class="max-w-7xl mx-auto p-6 min-h-screen">
    <div class="card bg-base-200 w-96 mx-auto">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ selectedMilestone.name }}</h2>
        <p>{{ selectedMilestone.frequency }}</p>
        <p>{{ selectedMilestone.startDate }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Accept</button>
          <button class="btn btn-outline btn-error">Remove</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useMilestoneStore } from '@/store';

const props = defineProps({
  id: {
    type: String,
  },
});

const milestonesStore = useMilestoneStore();
const selectedMilestone = computed(() => {
  return milestonesStore.allMilestones.find(
    (milestone) => milestone.id === props.id
  );
});
</script>
