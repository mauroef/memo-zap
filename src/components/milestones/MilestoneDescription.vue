<template>
  <p v-if="props.frequency === FREQUENCY.DAILY">
    You achieved this milestone
    <span class="font-bold">{{ formattedMilestoneTime }}</span>
    ago.
  </p>
  <p v-else-if="props.frequency === FREQUENCY.MONTHLY">
    Only <span class="font-bold">{{ remainingDays }} days</span> left until your
    <span class="font-bold">{{ formattedMilestoneTime }}</span> milestone.
  </p>
  <p v-else-if="props.frequency === FREQUENCY.ANNUAL">
    <span class="font-bold">{{ remainingDays }}</span> days to go until your
    <span class="font-bold">{{ formattedMilestoneTime }}</span> milestone
    anniversary!
  </p>
</template>

<script setup>
import { FREQUENCY } from '@/constants';
import {
  calculateDaysToNextMonthiversary,
  calculateNextMonthiversaryNumber,
  calculateNextAnniversaryNumber,
  calculateDiffBetween,
  formatDaysToYearsMonthsAndDays,
  withNumberSuffix,
} from '@/utils';

const props = defineProps({
  startDate: String,
  frequency: String,
});

let remainingDays;
let formattedMilestoneTime;

switch (props.frequency) {
  case FREQUENCY.DAILY: {
    remainingDays = calculateDiffBetween('day', props.startDate);
    formattedMilestoneTime = formatDaysToYearsMonthsAndDays(remainingDays);
    break;
  }

  case FREQUENCY.MONTHLY: {
    remainingDays = calculateDaysToNextMonthiversary(props.startDate);
    const monthiversaryNumber = calculateNextMonthiversaryNumber(
      props.startDate
    );
    formattedMilestoneTime = withNumberSuffix(monthiversaryNumber);
    break;
  }

  case FREQUENCY.ANNUAL: {
    const days = calculateDiffBetween('day', props.startDate);
    const years = Math.floor(days / 365);
    remainingDays = days - (years * 365);
    const anniversaryNumber = calculateNextAnniversaryNumber(props.startDate);
    formattedMilestoneTime = withNumberSuffix(anniversaryNumber);
    break;
  }

  default:
    break;
}
</script>
