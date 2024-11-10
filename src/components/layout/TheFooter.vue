<template>
  <footer
    class="footer footer-center bg-base-200 text-base-content p-10"
  >
    <nav class="grid grid-flow-col gap-4">
      <router-link to="/" class="link link-hover">Home</router-link>
      <router-link to="/login" class="link link-hover">Login</router-link>
      <router-link to="/milestones" class="link link-hover">Milestones</router-link>
    </nav>
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a
        class=" hover:text-primary"
          rel="noopener"
          target="_blank"
          href="https://github.com/mauroef/memo-zap"
        >
          <v-icon scale="2" hover animation="wrench" speed="fast" name="bi-github" />
        </a>
      </div>
    </nav>
    <aside>
      <p>{{ SITE_NAME }} – Keeping memories alive since 2024</p>
      <p>
        Developed by
        <a
          rel="noopener"
          target="_blank"
          href="https://mauroef.dev"
          class="link link-hover link-info"
          >mauroef</a
        >.
      </p>
    </aside>
  </footer>
</template>

<script setup>
import {SITE_NAME} from '@/constants';
</script>