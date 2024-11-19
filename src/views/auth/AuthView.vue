<template>
  <section class="p-6">
    <div class="hero bg-base-200 min-h-70dvh rounded-lg">
      <div class="hero-content flex-col lg:flex-row-reverse gap-6 lg:gap-8 max-w-[1024px]">
        <!-- Headline -->
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Access Your Milestones!</h1>
          <p class="py-6">
            Sign in or create an account to start tracking and celebrating your
            special moments. Your journey starts here!
          </p>
        </div>
        <!-- Form Card -->
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form @submit.prevent="handleSubmit" class="card-body">
            <!-- Tabs -->
            <div role="tablist" class="tabs tabs-boxed mb-6">
              <AuthTab
                v-for="tab in tabs"
                :key="tab"
                :active="mode === tab.toLowerCase()"
                @click="setActiveMode(tab.toLowerCase())"
                :label="tab"
              />
            </div>
            <!-- Form Fields -->
            <AuthInput
              v-model="email"
              type="text"
              label="Email"
              :error="emailError"
              placeholder="Enter your email"
            />
            <AuthInput
              v-model="password"
              type="password"
              label="Password"
              :error="passwordError"
              placeholder="Enter your password"
            />
            <!-- Submit Button -->
            <div class="form-control mt-6">
              <button class="btn btn-primary" type="submit">
                {{ submitButtonText }}
              </button>
            </div>
          </form>
          <!-- Divider -->
          <div class="divider px-8 my-0">OR</div>
          <!-- Google Button -->
          <div class="p-8">
            <button class="btn btn-block">Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import AuthTab from '@/components/auth/AuthTab.vue';
import AuthInput from '@/components/auth/AuthInput.vue';

// Tabs
const tabs = ['Log In', 'Sign Up'];

// Reactive state
const mode = ref('log in');
const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

// Computed property for submit button text
const submitButtonText = computed(() =>
  mode.value === 'log in' ? 'Login' : 'Sign Up'
);

// Set active mode and clear inputs/errors
const setActiveMode = (activeMode) => {
  mode.value = activeMode;
  clearFields();
};

// Form submission logic
const handleSubmit = () => {
  clearErrors();
  let valid = true;

  if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
    emailError.value = 'Please enter a valid email address.';
    valid = false;
  }

  if (!password.value || password.value.length < 6) {
    passwordError.value = 'Password must be at least 6 characters long.';
    valid = false;
  }

  if (valid) {
    console.log({ mode: mode.value, email: email.value, password: password.value });
    clearFields();
  }
};

// Clear inputs and errors
const clearFields = () => {
  email.value = '';
  password.value = '';
  clearErrors();
};

const clearErrors = () => {
  emailError.value = '';
  passwordError.value = '';
};

// Watch inputs for dynamic error clearing
watch(email, () => (emailError.value = ''));
watch(password, () => (passwordError.value = ''));
</script>