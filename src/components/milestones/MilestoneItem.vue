<template>
  <div class="card bg-base-200 shadow-xl" :class="cardStyles.bg">
    <div class="card-body">
      <h2 class="card-title" :class="cardStyles.text">
        {{ props.name }} - {{ props.frequency }}
      </h2>
      <p :class="cardStyles.text">{{ props.startDate }}</p>
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
