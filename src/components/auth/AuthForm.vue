<template>
  <!-- <base-toast type="warning">hola desde toast</base-toast> -->
  <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <form @submit.prevent="handleSubmit" class="card-body">
      <!-- Tabs -->
      <div role="tablist" class="tabs tabs-boxed mb-6">
        <AuthTab
          v-for="(value, key) in tabs"
          :key="key"
          :active="mode === key"
          @click="setActiveMode(key)"
          :label="value"
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
        <button
          class="btn btn-primary"
          type="submit"
          :disabled="isButtonDisabled"
        >
          <span v-if="isButtonDisabled" class="loading loading-spinner"></span
          >{{ buttonText }}
        </button>
      </div>
    </form>

    <!-- Divider -->
    <div class="divider px-8 my-0">OR</div>

    <!-- Google Button -->
    <div class="p-8">
      <button class="btn btn-block btn-secondary btn-outline">
        Continue with Google
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore, useToastStore } from '@/store';
import { AUTH_MODE, TOAST } from '@/constants';
import AuthTab from '@/components/auth/AuthTab.vue';
import AuthInput from '@/components/auth/AuthInput.vue';

// Router
const router = useRouter();

// Store
const authStore = useAuthStore();
const toastStore = useToastStore();

// Tabs
const tabs = {
  login: 'Log In',
  signup: 'Sign Up',
};

// Reactive state
const mode = ref(AUTH_MODE.LOGIN);
const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

// Computed property for submit button text
const submitButtonText = computed(() =>
  mode.value === AUTH_MODE.LOGIN ? 'Login' : 'Signup'
);
const buttonText = computed(() =>
  authStore.loading ? 'Submitting...' : submitButtonText
);
const isButtonDisabled = computed(() => authStore.loading);

// Set active mode and clear inputs/errors
const setActiveMode = (activeMode) => {
  mode.value = activeMode;
  clearFields();
};

// Form submission logic
const validateEmail = (email) => {
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    emailError.value = 'Please enter a valid email address.';
    return false;
  }
  return true;
};

const validatePassword = (password) => {
  if (!password || password.length < 6) {
    passwordError.value = 'Password must be at least 6 characters long.';
    return false;
  }
  return true;
};

const handleAuthentication = async () => {
  const isLoginMode = mode.value === AUTH_MODE.LOGIN;
  await (isLoginMode
    ? authStore.login(email.value, password.value)
    : authStore.register(email.value, password.value));

  if (authStore.error) {
    toastStore.showToast(authStore.error, TOAST.TYPE.ERROR);
    return false;
  }

  toastStore.showToast(
    isLoginMode ? 'Logged in successfully!' : 'Account created successfully!',
    TOAST.TYPE.SUCCESS
  );
  clearFields();
  router.replace('/milestones');
  return true;
};

const handleSubmit = async () => {
  clearErrors();

  const isValid = validateEmail(email.value) & validatePassword(password.value);

  if (!isValid) return;

  await handleAuthentication();
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
