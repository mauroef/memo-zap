<template>
  <!-- Toast -->
  <base-toast />
  <!-- No memos -->
  <section v-if="memosStore.allMemos.length === 0" class="p-6">
    <base-hero
      cta
      cta-text="Create Your First Memo"
      cta-link="/memos/new"
    >
      <template #title>Start Celebrating Life’s Moments!</template>
      <template #description>
        It looks like you haven’t set any memos yet. Begin tracking and
        celebrating your special moments by clicking the button below!
      </template>
    </base-hero>
  </section>

  <!-- No filtered memos -->
  <section
    v-else-if="filteredMemos.length === 0"
    class="max-w-7xl mx-auto min-h-screen flex gap-6 flex-col p-6"
  >
    <MemoFilter v-model:filters="filters" :disabled-filters="true" />
    <base-hero
      cta
      cta-text="Clear Filters"
      :cta-action="filteredMemos.length === 0 ? clearFilters : null"
    >
      <template #title>No Matches Found</template>
      <template #description>
        It seems we couldn’t find any memos that match your search or
        selected filters. Adjust your filters or try a different search term to
        explore your memos.
      </template>
    </base-hero>
  </section>

  <!-- All or filtered memos -->
  <section
    v-else
    class="max-w-7xl mx-auto min-h-screen flex gap-6 flex-col p-6"
  >
    <article>
      <MemoFilter v-model:filters="filters" />
    </article>
    <article>
      <ul class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="memo in filteredMemos" :key="memo.id">
          <MemoItem
            :id="memo.id"
            :name="memo.name"
            :startDate="memo.startDate"
            :frequency="memo.frequency"
            :color="memo.color"
          />
        </li>
      </ul>
    </article>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useMemoStore, useToastStore } from '@/store';
import MemoFilter from '@/components/memos/MemoFilter.vue';
import MemoItem from '@/components/memos/MemoItem.vue';

//Store
const memosStore = useMemoStore();
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

const filteredMemos = computed(() => {
  return memosStore.allMemosReversed.filter((memo) => {
    const matchesSearch = memo.name
      .toLowerCase()
      .includes(filters.value.searchQuery.toLowerCase());
    const matchesFrequency =
      filters.value.selectedFrequency === 'all' ||
      memo.frequency === filters.value.selectedFrequency;

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
