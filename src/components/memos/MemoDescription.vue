<template>
  <p v-if="memoMessage">
    {{ memoMessage }}
  </p>
</template>

<script setup>
import { computed } from 'vue';
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

const remainingDays = computed(() => {
  switch (props.frequency) {
    case FREQUENCY.DAILY:
      return calculateDiffBetween('day', props.startDate);
    case FREQUENCY.MONTHLY:
      return calculateDaysToNextMonthiversary(props.startDate);
    case FREQUENCY.ANNUAL:
      return calculateAnnualMemo(props.startDate).remainingDays;
    default:
      return null;
  }
});

const formattedMemoTime = computed(() => {
  switch (props.frequency) {
    case FREQUENCY.DAILY:
      return formatDaysToYearsMonthsAndDays(remainingDays.value);
    case FREQUENCY.MONTHLY:
      return withNumberSuffix(calculateNextMonthiversaryNumber(props.startDate));
    case FREQUENCY.ANNUAL:
      return calculateAnnualMemo(props.startDate).formattedMemoTime;
    default:
      return '';
  }
});

const memoMessage = computed(() => {
  if (props.frequency === FREQUENCY.DAILY) {
    return remainingDays.value === 0
      ? 'Memo was created today.'
      : `You achieved this memo ${formattedMemoTime.value} ago.`;
  }

  if (props.frequency === FREQUENCY.MONTHLY) {
    return remainingDays.value === 0
      ? `Today is the big day! 🎉 Time to celebrate your ${formattedMemoTime.value} monthly memo!`
      : `Only ${remainingDays.value} days left until your ${formattedMemoTime.value} memo.`;
  }

  if (props.frequency === FREQUENCY.ANNUAL) {
    return remainingDays.value === 0
      ? `Big day alert! 🚀 Your ${formattedMemoTime.value} memo anniversary is happening today!`
      : `${remainingDays.value} days to go until your ${formattedMemoTime.value} memo anniversary!`;
  }

  return '';
});
</script>
