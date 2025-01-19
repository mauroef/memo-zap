<template>
  <!-- Toast -->
  <base-toast />
  <section class="p-6">
    <div class="hero bg-base-200 min-h-70dvh rounded-lg">
      <div
        class="hero-content flex-col lg:flex-row-reverse gap-6 lg:gap-8 max-w-[1024px]"
      >
        <!-- Headline -->
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Access Your Memos!</h1>
          <p class="py-6">
            Sign in or create an account to start tracking and celebrating your
            special moments. Your journey starts here!
          </p>
        </div>

        <!-- Form Card -->
        <AuthForm />
      </div>
    </div>
  </section>
</template>

<script setup>
import AuthForm from '@/components/auth/AuthForm.vue';
</script>
