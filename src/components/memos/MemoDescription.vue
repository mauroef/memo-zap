<template>
  <!-- daily -->
  <p v-if="props.frequency === FREQUENCY.DAILY">
    You achieved this memo
    <span class="font-bold">{{ formattedMemoTime }}</span>
    ago.
  </p>
  <!-- monthly -->
  <p v-else-if="props.frequency === FREQUENCY.MONTHLY && remainingDays === 0">
    Today is the big day! 🎉 Time to celebrate your
    <span class="font-bold">{{ formattedMemoTime }}</span> monthly memo!
  </p>
  <p v-else-if="props.frequency === FREQUENCY.MONTHLY">
    Only <span class="font-bold">{{ remainingDays }} days</span> left until your
    <span class="font-bold">{{ formattedMemoTime }}</span> memo.
  </p>
  <!-- annual -->
  <p v-else-if="props.frequency === FREQUENCY.ANNUAL && remainingDays === 0">
    Big day alert! 🚀 Your
    <span class="font-bold">{{ formattedMemoTime }}</span> memo anniversary is happening today!
  </p>
  <p v-else-if="props.frequency === FREQUENCY.ANNUAL">
    <span class="font-bold">{{ remainingDays }}</span> days to go until your
    <span class="font-bold">{{ formattedMemoTime }}</span> memo
    anniversary!
  </p>
</template>

<script setup>
import { FREQUENCY } from '@/constants';
import {
  calculateAnnualMemo,
  calculateDaysToNextMonthiversary,
  calculateNextMonthiversaryNumber,
  calculateDiffBetween,
  formatDaysToYearsMonthsAndDays,
  withNumberSuffix,
} from '@/utils';

const props = defineProps({
  startDate: String,
  frequency: String,
});

let remainingDays;
let formattedMemoTime;

switch (props.frequency) {
  case FREQUENCY.DAILY: {
    remainingDays = calculateDiffBetween('day', props.startDate);
    formattedMemoTime = formatDaysToYearsMonthsAndDays(remainingDays);
    break;
  }

  case FREQUENCY.MONTHLY: {
    remainingDays = calculateDaysToNextMonthiversary(props.startDate);
    const monthiversaryNumber = calculateNextMonthiversaryNumber(
      props.startDate
    );
    formattedMemoTime = withNumberSuffix(monthiversaryNumber);
    break;
  }

  case FREQUENCY.ANNUAL: {
    const result = calculateAnnualMemo(props.startDate);
    remainingDays = result.remainingDays;
    formattedMemoTime = result.formattedMemoTime;
    break;
  }

  default:
    break;
}
</script>
