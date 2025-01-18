<template>
  <section class="max-w-7xl mx-auto p-6 min-h-screen" v-if="selectedMilestone">
    <div class="card bg-base-200 w-96 mx-auto">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ selectedMilestone.name }}</h2>
        <p>{{ selectedMilestone.frequency }}</p>
        <p>{{ selectedMilestone.startDate }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-info" @click="editMilestone">Edit</button>
          <button class="btn btn-outline btn-error" @click="deleteMilestone">
            Delete
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="max-w-7xl mx-auto p-6 min-h-screen" v-else>
    <div class="card bg-base-200 w-96 mx-auto">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Milestone not found</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useMilestoneStore, useAuthStore } from '@/store';
import { useRouter } from 'vue-router';

const props = defineProps({
  id: {
    type: String,
  },
});

const authStore = useAuthStore();
const uid = authStore.user.uid;

const milestonesStore = useMilestoneStore();
const selectedMilestone = computed(() => {
  return milestonesStore.allMilestones.find(
    (milestone) => milestone.id === props.id
  );
});

const router = useRouter();

const editMilestone = () => {
  router.replace(`/milestones/${props.id}/edit`);
};

const deleteMilestone = () => {
  milestonesStore.deleteMilestone(uid, props.id);
  router.replace('/milestones');
};
</script>
