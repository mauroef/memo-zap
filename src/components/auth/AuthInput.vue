<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      :value="modelValue"
      @input="updateValue($event.target.value)"
      :type="type"
      :placeholder="placeholder"
      class="input input-bordered"
      :class="{ 'input-error': error }"
    />
    <div v-if="error" class="label">
      <span class="label-text-alt text-red-500">{{ error }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  modelValue: [String, Number],
  type: String,
  label: String,
  placeholder: String,
  error: String,
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (value) => {
  emit('update:modelValue', value);
};
</script>