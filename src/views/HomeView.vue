<script setup>
import { useMilestoneStore } from '../store';
import {SITE_NAME} from '@/constants';

const milestonesStore = useMilestoneStore();
</script>

<template>
  <section class="p-6">
    <div class="hero bg-base-200 min-h-screen rounded-lg">
    <div class="hero-content text-center">
      <div class="max-w-lg">
        <h1 class="text-5xl font-bold">Welcome to {{SITE_NAME}}!</h1>
        <p class="py-6 max-w-lg">
          Track and celebrate every special milestone in your life. Start by
          logging in to create your first milestone and never miss a moment to
          remember!
        </p>
        <a href="/login" class="btn btn-primary">Log In to Get Started</a>
      </div>
    </div>
  </div>
  </section>

  <ul>
    <li v-for="milestone in milestonesStore.allMilestones" :key="milestone.id">
      <p>
        {{ milestone.name }} - {{ milestone.startDate }} -
        {{ milestone.frequency }}
      </p>
    </li>
  </ul>
</template>
