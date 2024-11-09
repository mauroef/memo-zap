<template>
  <section
    class="max-w-7xl mx-auto p-6"
    v-if="milestonesStore.allMilestones.length > 0"
  >
    <article>
      <MilesoneFilter />
    </article>
    <article>
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
    <BaseHero
      cta
      cta-text="Create Your First Milestone"
      cta-link="/milestones/new"
    >
      <template #title>Start Celebrating Life’s Moments!</template>
      <template #description>
        It looks like you haven’t set any milestones yet. Begin tracking and
        celebrating your special moments by clicking the button below!
      </template>
    </BaseHero>
  </section>
</template>

<script setup>
import { useMilestoneStore } from '@/store';
import BaseHero from '@/components/ui/BaseHero.vue';
import MilesoneFilter from '@/components/milestones/MilesoneFilter.vue';
import MilestoneItem from '@/components/milestones/MilestoneItem.vue';

const milestonesStore = useMilestoneStore();
</script>
