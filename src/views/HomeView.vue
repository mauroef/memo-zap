<script setup>
import { useMilestoneStore } from '../store';

const milestonesStore = useMilestoneStore();
</script>

<template>
  <ul>
    <li v-for="milestone in milestonesStore.allMilestones" :key="milestone.id">
      <p>
        {{ milestone.name }} - {{ milestone.startDate }} -
        {{ milestone.frequency }}
      </p>
    </li>
  </ul>
</template>
