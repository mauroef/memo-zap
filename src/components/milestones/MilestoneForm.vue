<template>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-col gap-4">
      <!-- name -->
      <label class="form-control w-full bg-base-300 p-3 rounded-md">
        <div class="label">
          <span class="label-text">What is your milestone name?</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
          :class="{ ['input-error']: !isNameValid && isSubmitted }"
          v-model.trim="milestone.name"
        />
        <div v-if="!isNameValid && isSubmitted" class="label">
          <span class="label-text-alt text-error">Name is required.</span>
        </div>
      </label>

      <!-- start date -->
      <label class="form-control w-full bg-base-300 p-3 rounded-md">
        <div class="label">
          <span class="label-text">Set your Start Date</span>
        </div>
        <input
          type="date"
          class="input input-bordered w-full"
          :class="{ ['input-error']: !isStartDateValid && isSubmitted }"
          :max="today"
          v-model.trim="milestone.startDate"
        />
        <div v-if="!isStartDateValid && isSubmitted" class="label">
          <span class="label-text-alt text-error"
            >Please enter a valid date.</span
          >
        </div>
      </label>

      <!-- frequency -->
      <div class="form-control bg-base-300 p-3 rounded-md flex">
        <div class="label"><span class="label-text">Frecuency</span></div>
        <div class="flex flex-col justify-between md:flex-row flex-wrap">
          <label
            v-for="freq in ['daily', 'monthly', 'annual']"
            :key="freq"
            class="label cursor-pointer flex gap-3"
          >
            <span class="label-text">{{
              freq.charAt(0).toUpperCase() + freq.slice(1)
            }}</span>
            <input
              type="radio"
              :value="freq"
              class="radio radio-primary"
              :class="{ ['radio-error']: !isFrequencyValid && isSubmitted }"
              v-model="milestone.frequency"
            />
          </label>
          <div v-if="!isFrequencyValid && isSubmitted" class="label w-full">
            <span class="label-text-alt text-error"
              >Please choose a frequency.</span
            >
          </div>
        </div>
      </div>

      <!-- card color -->
      <label class="form-control w-full bg-base-300 p-3 rounded-md">
        <div class="label">
          <span class="label-text">Pick a card color</span>
        </div>
        <select class="select select-bordered w-full" v-model="milestone.color">
          <option v-for="(_, name) in CARD" :key="name" :value="name">
            {{ name.charAt(0).toUpperCase() + name.slice(1) }}
          </option>
        </select>
      </label>

      <!-- submit button -->
      <button class="btn btn-primary">
        {{ isEditMode ? 'Update' : 'Create' }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMilestoneStore } from '@/store';
import { CARD } from '@/constants';

const today = new Date().toISOString().split('T')[0];

// props
const props = defineProps({
  initialMilestone: {
    type: Object,
    required: false,
  },
});

// state
const isEditMode = computed(
  () => props.initialMilestone && !!props.initialMilestone.id
);
const milestone = reactive({
  name: props.initialMilestone?.name || '',
  startDate: props.initialMilestone?.startDate || '',
  frequency: props.initialMilestone?.frequency || '',
  color: props.initialMilestone?.color || 'default',
});

const isSubmitted = ref(false);

// validations
const isNameValid = computed(() => milestone.name.trim() !== '');
const isStartDateValid = computed(() => {
  const date = new Date(milestone.startDate);
  return milestone.startDate && date <= new Date(today);
});
const isFrequencyValid = computed(() => milestone.frequency !== '');
const isFormValid = computed(
  () => isNameValid.value && isStartDateValid.value && isFrequencyValid.value
);

// store & router
const milestoneStore = useMilestoneStore();
const router = useRouter();

// submit logic
const onSubmit = () => {
  isSubmitted.value = true;

  if (!isFormValid.value) return;

  const formData = {
    id: isEditMode.value ? props.initialMilestone.id : Date.now().toString(),
    name: milestone.name,
    startDate: milestone.startDate,
    frequency: milestone.frequency,
    color: milestone.color,
  };

  if (isEditMode.value) {
    milestoneStore.updateMilestone(formData);
  } else {
    milestoneStore.addMilestone(formData);
  }

  router.replace('/milestones');
};
</script>
