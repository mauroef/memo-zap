<template>
  <button @click="goBack" class="btn btn-outline text-base">
    Back
    <v-icon scale="1.5" hover name="bi-arrow-left-circle" />
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>
