<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <the-header></the-header>
      <!-- Content -->
      <main><RouterView /></main>
      <the-footer></the-footer>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <li><router-link to="/milestones">My Milestones</router-link></li>
        <li><router-link to="/auth">Login</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
</script>
