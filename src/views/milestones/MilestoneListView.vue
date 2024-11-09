<template>
  <section class="max-w-7xl mx-auto p-6" v-if="milestonesStore.allMilestones.length > 0">
    <article>
      <MilesoneFilter />
    </article>
    <article class="">
      <ul class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="milestone in milestonesStore.allMilestones"
          :key="milestone.id"
        >
          <MilestoneItem
            :name="milestone.name"
            :startDate="milestone.startDate"
            :frequency="milestone.frequency"
          />
        </li>
      </ul>
    </article>
  </section>
  <section v-else>
    <article class="max-w-7xl mx-auto p-6">
      <p>No milestones found.</p>
    </article>
  </section>
</template>

<script setup>
import { useMilestoneStore } from '@/store';
import MilesoneFilter from '@/components/milestones/MilesoneFilter.vue';
import MilestoneItem from '@/components/milestones/MilestoneItem.vue';

const milestonesStore = useMilestoneStore();
</script>
