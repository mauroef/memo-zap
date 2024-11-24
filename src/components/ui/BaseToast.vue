<template>
  <teleport to="body">
    <transition name="toast-fade">
      <div
        v-if="toastStore.isVisible"
        class="toast toast-top toast-center top-[90px]"
      >
        <div class="alert p-2.5 gap-2" :class="alertClass">
          <v-icon
            v-if="toastStore.type === 'success'"
            scale="1.5"
            name="bi-check-circle"
          />
          <v-icon
            v-else-if="toastStore.type === 'warning'"
            scale="1.5"
            name="bi-exclamation-circle"
          />
          <v-icon
            v-else-if="toastStore.type === 'error'"
            scale="1.5"
            name="bi-x-circle"
          />
          <v-icon v-else scale="1.5" name="bi-info-circle" />
          <span>
            {{ toastStore.message }}
          </span>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { computed } from 'vue';
import { useToastStore } from '@/store';
import { TOAST } from '@/constants';

const toastStore = useToastStore();

const alertClass = computed(() => {
  return {
    'alert-success': toastStore.type === TOAST.TYPE.SUCCESS,
    'alert-warning': toastStore.type === TOAST.TYPE.WARNING,
    'alert-error': toastStore.type === TOAST.TYPE.ERROR,
    'alert-info': toastStore.type === TOAST.TYPE.INFO,
  };
});
</script>

<style scoped>
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.toast-fade-enter,
.toast-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
}
</style>
