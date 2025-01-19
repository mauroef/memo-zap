<template>
  <article class="bg-base-200 p-4 rounded-lg flex gap-4 flex-col md:flex-row">
    <!-- Search -->
    <div class="flex-grow">
      <label class="input input-bordered flex items-center gap-2"
        ><input
          type="search"
          class="grow"
          placeholder="Search"
          v-model="localSearchQuery"
          :disabled="disabledFilters"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </label>
    </div>
    <!-- Radio buttons -->
    <div class="flex gap-2">
      <div
        class="form-control justify-center"
        v-for="freq in frequencies"
        :key="freq.value"
      >
        <label class="label cursor-pointer flex gap-2">
          <span class="label-text">{{ freq.label }}</span>
          <input
            type="radio"
            :value="freq.value"
            class="radio radio-primary"
            name="radio-filter"
            v-model="localFrequency"
            @change="updateFilters"
            :checked="freq.value === 'all' && !disabledFilters"
            :disabled="disabledFilters"
          />
        </label>
      </div>
    </div>
    <div class="divider divider-horizontal m-0 hidden md:flex"></div>
    <div>
      <router-link
        to="/memos/new"
        class="btn btn-accent text-white w-full md:w-auto"
      >
        <v-icon scale="1.5" name="bi-calendar-heart-fill" />
        New
      </router-link>
    </div>
  </article>
</template>

<script setup>
import { ref, watch } from 'vue';
import { FREQUENCY } from '@/constants';

const props = defineProps({
  filters: {
    type: Object,
    required: true,
  },
  disabledFilters: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['update:filters']);

const localSearchQuery = ref(props.filters.searchQuery);
const localFrequency = ref(props.filters.selectedFrequency);

const frequencies = [
  { label: 'All', value: 'all' },
  ...Object.entries(FREQUENCY).map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1).toLowerCase(),
    value,
  })),
];

let debounceTimeout = null;

const handleSearchInput = () => {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }

  debounceTimeout = setTimeout(() => {
    emit('update:filters', { ...props.filters, searchQuery: localSearchQuery.value });
  }, 300);
};

watch(localSearchQuery, () => {
  handleSearchInput();
});

watch(localFrequency, (newFrequency) => {
  emit('update:filters', { ...props.filters, selectedFrequency: newFrequency });
});
</script>
