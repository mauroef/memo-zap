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

    <div class="px-8">
      <button class="btn btn-block" @click="getUserData">Get User Data</button>
    </div>

    <div class="px-8 py-2">
      <button class="btn btn-block" @click="isAuthenticated">Is Auth?</button>
    </div>

    <div class="px-8 pb-8">
      <button class="btn btn-block" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useAuthStore, useToastStore } from '@/store';
import { AUTH_MODE, TOAST } from '@/constants';
import AuthTab from '@/components/auth/AuthTab.vue';
import AuthInput from '@/components/auth/AuthInput.vue';

// Store
const authStore = useAuthStore();
const toastStore = useToastStore();

const getUserData = () => {
  console.log({ user: authStore.getUser });
  console.log({ uid: authStore.getUid });
  console.log({ a: authStore.getEmail });
  console.log({ b: authStore.getDisplayName });
  console.log({ c: authStore.getPhotoURL });
  console.log({ d: authStore.getCreationTime });
  console.log({ e: authStore.getLastSignInTime });
};

const logout = () => {
  authStore.logout();
};

const isAuthenticated = () => {
  toastStore.showToast('isAuthenticated');
};

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
  mode.value === AUTH_MODE.LOGIN ? 'Login' : 'Sign Up'
);

// Set active mode and clear inputs/errors
const setActiveMode = (activeMode) => {
  mode.value = activeMode;
  clearFields();
};

// Form submission logic
const handleSubmit = async () => {
  clearErrors();
  let isValid = true;

  if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
    emailError.value = 'Please enter a valid email address.';
    isValid = false;
  }

  if (!password.value || password.value.length < 6) {
    passwordError.value = 'Password must be at least 6 characters long.';
    isValid = false;
  }

  if (isValid) {
    if (mode.value === AUTH_MODE.LOGIN) {
      await authStore.login(email.value, password.value);
    } else {
      await authStore.register(email.value, password.value);
    }

    if (authStore.error) {
      toastStore.showToast(authStore.error, TOAST.TYPE.ERROR);
    } else {
      clearFields();
    }
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
