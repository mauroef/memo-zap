<template>
  <!-- Toast -->
  <base-toast />
  <!-- No milestones -->
  <section v-if="milestonesStore.allMilestones.length === 0" class="p-6">
    <base-hero
      cta
      cta-text="Create Your First Milestone"
      cta-link="/milestones/new"
    >
      <template #title>Start Celebrating Life’s Moments!</template>
      <template #description>
        It looks like you haven’t set any milestones yet. Begin tracking and
        celebrating your special moments by clicking the button below!
      </template>
    </base-hero>
  </section>

  <!-- No filtered milestones -->
  <section
    v-else-if="filteredMilestones.length === 0"
    class="max-w-7xl mx-auto min-h-screen flex gap-6 flex-col p-6"
  >
    <MilesoneFilter v-model:filters="filters" :disabled-filters="true" />
    <base-hero
      cta
      cta-text="Clear Filters"
      :cta-action="filteredMilestones.length === 0 ? clearFilters : null"
    >
      <template #title>No Matches Found</template>
      <template #description>
        It seems we couldn’t find any milestones that match your search or
        selected filters. Adjust your filters or try a different search term to
        explore your milestones.
      </template>
    </base-hero>
  </section>

  <!-- All or filtered milestones -->
  <section
    v-else
    class="max-w-7xl mx-auto min-h-screen flex gap-6 flex-col p-6"
  >
    <article>
      <MilesoneFilter v-model:filters="filters" />
    </article>
    <article>
      <ul class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="milestone in filteredMilestones" :key="milestone.id">
          <MilestoneItem
            :id="milestone.id"
            :name="milestone.name"
            :startDate="milestone.startDate"
            :frequency="milestone.frequency"
            :color="milestone.color"
          />
        </li>
      </ul>
    </article>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useMilestoneStore, useToastStore } from '@/store';
import MilesoneFilter from '@/components/milestones/MilesoneFilter.vue';
import MilestoneItem from '@/components/milestones/MilestoneItem.vue';

//Store
const milestonesStore = useMilestoneStore();
const toastStore = useToastStore();

onMounted(() => {
  const toastMessage = toastStore.getMessage.value;
  const toastType = toastStore.getType.value;

  if (toastMessage !== '') {
    toastStore.showToast(toastMessage, toastType);
  }
});

const filters = ref({
  searchQuery: '',
  selectedFrequency: 'all',
});

const filteredMilestones = computed(() => {
  return milestonesStore.allMilestonesReversed.filter((milestone) => {
    const matchesSearch = milestone.name
      .toLowerCase()
      .includes(filters.value.searchQuery.toLowerCase());
    const matchesFrequency =
      filters.value.selectedFrequency === 'all' ||
      milestone.frequency === filters.value.selectedFrequency;

    return matchesSearch && matchesFrequency;
  });
});

const clearFilters = () => {
  filters.value = {
    searchQuery: '',
    selectedFrequency: 'all',
  };
};
</script>
