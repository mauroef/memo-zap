<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <the-header></the-header>
      <!-- Content -->
      <main class="min-h-screen"><RouterView /></main>
      <the-footer></the-footer>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul v-if="isAuthenticated" class="menu bg-base-200 min-h-full w-80 p-4">
        <li>
          <router-link to="/memos" @click="closeDrawer">My Memos</router-link>
        </li>
        <li><button @click="logout">Logout</button></li>
      </ul>
      <ul v-else class="menu bg-base-200 min-h-full w-80 p-4">
        <li><router-link to="/auth" @click="closeDrawer">Login</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterView } from 'vue-router';
import { useAuthStore } from '@/store';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';

const authStore = useAuthStore();

const isAuthenticated = computed(() => authStore.isAuthenticated);

// Function to close the drawer
const closeDrawer = () => {
  document.getElementById('my-drawer').checked = false;
};

// Logout function that also closes the drawer
const logout = () => {
  authStore.logout();
  closeDrawer();
};
</script>
