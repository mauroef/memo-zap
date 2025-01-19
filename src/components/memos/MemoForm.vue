<template>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-col gap-4">
      <!-- name -->
      <label class="form-control w-full bg-base-300 p-3 rounded-md">
        <div class="label">
          <span class="label-text">What is your memo name?</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
          :class="{ ['input-error']: !isNameValid && isSubmitted }"
          v-model.trim="memo.name"
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
          v-model.trim="memo.startDate"
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
              v-model="memo.frequency"
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
        <select class="select select-bordered w-full" v-model="memo.color">
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
import { useMemoStore, useAuthStore } from '@/store';
import { CARD } from '@/constants';

const today = new Date().toISOString().split('T')[0];

// props
const props = defineProps({
  initialMemo: {
    type: Object,
    required: false,
  },
});

// state
const isEditMode = computed(
  () => props.initialMemo && !!props.initialMemo.id
);
const memo = reactive({
  name: props.initialMemo?.name || '',
  startDate: props.initialMemo?.startDate || '',
  frequency: props.initialMemo?.frequency || '',
  color: props.initialMemo?.color || 'default',
});

const isSubmitted = ref(false);

// validations
const isNameValid = computed(() => memo.name.trim() !== '');
const isStartDateValid = computed(() => {
  const date = new Date(memo.startDate);
  return memo.startDate && date <= new Date(today);
});
const isFrequencyValid = computed(() => memo.frequency !== '');
const isFormValid = computed(
  () => isNameValid.value && isStartDateValid.value && isFrequencyValid.value
);

// store & router
const memoStore = useMemoStore();
const authStore = useAuthStore();
const router = useRouter();

// submit logic
const onSubmit = () => {
  isSubmitted.value = true;

  if (!isFormValid.value) return;

  const uid = authStore.user?.uid;
  const formData = {
    name: memo.name,
    startDate: memo.startDate,
    frequency: memo.frequency,
    color: memo.color,
  };

  if (isEditMode.value) {
    const memoId = props.initialMemo.id;
    memoStore.updateMemo(uid, memoId, formData);
  } else {
    memoStore.addMemo(uid, formData);
  }

  router.replace('/memos');
};
</script>
