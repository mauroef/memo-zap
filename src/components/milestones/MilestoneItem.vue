<template>
  <div class="card shadow-xl" :class="cardStyles.bg">
    <div class="card-body" :class="cardStyles.text">
      <h2 class="card-title">
        {{ props.name }}
      </h2>
      <milestone-description
        :startDate="props.startDate"
        :frequency="props.frequency"
      />
      <div class="card-actions justify-end">
        <router-link
          class="btn"
          :class="cardStyles.button"
          :to="milestoneDetailsLink"
        >
          See Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { CARD } from '@/constants';
import MilestoneDescription from '@/components/milestones/MilestoneDescription.vue';

const props = defineProps({
  id: String,
  name: String,
  startDate: String,
  frequency: String,
  color: String,
});

const cardStyles = computed(() => {
  const color = props.color;
  return {
    bg: CARD[color].bg,
    text: CARD[color].text,
    button: `${CARD[color]['button-bg']} ${CARD[color]['button-bg-hover']} ${CARD[color]['button-text']} ${CARD[color]['button-border']} ${CARD[color]['button-border-hover']}`,
  };
});

const milestoneDetailsLink = computed(() => {
  return `/milestones/${props.id}`;
});
</script>
