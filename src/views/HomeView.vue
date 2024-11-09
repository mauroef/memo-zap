<script setup>
import { useMilestoneStore } from '../store';
import { SITE_NAME } from '@/constants';

const milestonesStore = useMilestoneStore();
</script>

<template>
  <section class="p-6">
    <article class="hero bg-base-200 min-h-screen rounded-lg">
      <div class="hero-content text-center">
        <div class="max-w-xl">
          <h1 class="text-5xl font-bold">Welcome to <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-extrabold">{{ SITE_NAME }}</span>!</h1>
          <p class="py-6">
            Track and celebrate every special milestone in your life. Start by
            logging in to create your first milestone and never miss a moment to
            remember!
          </p>
          <router-link to="/login" class="btn btn-primary">Log In to Get Started</router-link>
        </div>
      </div>
    </article>
  </section>

  <section class="p-6">
    <article class="bg-base-200 p-8 rounded-lg">
      <div class="container mx-auto text-center mb-10 rounded-lg">
        <h2 class="text-4xl font-bold">Get Started with Your Milestones</h2>
        <p class="mt-4 text-lg">
          Follow these simple steps to create and track your milestones with
          ease.
        </p>
      </div>
      <div class="flex flex-col lg:flex-row justify-around items-center gap-6">
        <!-- Step 1 Card -->
        <div class="card w-full lg:w-1/4 bg-base-100 shadow-md md:min-h-[300px]">
          <div class="card-body items-center text-center">
            <v-icon scale="3" class="text-primary" name="bi-person-circle" />
            <h3 class="card-title mt-4 text-2xl">Login</h3>
            <p class="mt-2">
              Sign in to get started and access all your milestones in one
              place.
            </p>
          </div>
        </div>

        <!-- Step 2 Card -->
        <div class="card w-full lg:w-1/4 bg-base-100 shadow-md md:min-h-[300px]">
          <div class="card-body items-center text-center">
            <v-icon scale="3" class="text-primary" name="bi-plus-circle" />
            <h3 class="card-title mt-4 text-2xl">Create Your Milestone</h3>
            <p class="mt-2">
              Easily add new milestones to track anniversaries, events, and
              more.
            </p>
          </div>
        </div>

        <!-- Step 3 Card -->
        <div class="card w-full lg:w-1/4 bg-base-100 shadow-md md:min-h-[300px]">
          <div class="card-body items-center text-center">
            <v-icon scale="3" class="text-primary" name="bi-search" />
            <h3 class="card-title mt-4 text-2xl">Search & View</h3>
            <p class="mt-2">
              Quickly search and view your milestones whenever you need to check
              them.
            </p>
          </div>
        </div>
      </div>
    </article>
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
