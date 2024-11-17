<template>
  <BaseHero cta cta-text="Log In to Get Started" cta-link="/login" with-bg>
    <template #title
      >Welcome to
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-extrabold"
        >{{ SITE_NAME }}</span
      >!</template
    >
    <template #description
      >Track and celebrate every special milestone in your life. Start by
      logging in to create your first milestone and never miss a moment to
      remember!</template
    >
  </BaseHero>

  <div class="px-6 w-full">
    <div class="divider divider-primary m-0"></div>
  </div>

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
        <div
          class="card w-full lg:w-1/4 bg-base-100 shadow-md md:min-h-[300px]"
        >
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
        <div
          class="card w-full lg:w-1/4 bg-base-100 shadow-md md:min-h-[300px]"
        >
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
        <div
          class="card w-full lg:w-1/4 bg-base-100 shadow-md md:min-h-[300px]"
        >
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
</template>

<script setup>
import { SITE_NAME } from '@/constants';
</script>
