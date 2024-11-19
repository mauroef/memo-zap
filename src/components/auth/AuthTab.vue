<template>
  <a
    role="tab"
    class="tab"
    :class="{ 'tab-active': active }"
    @click="handleClick"
  >
    {{ label }}
  </a>
</template>

<script setup>
defineProps({
  label: String,
  active: Boolean,
});

const emit = defineEmits(['click']);

const handleClick = () => emit('click');
</script>