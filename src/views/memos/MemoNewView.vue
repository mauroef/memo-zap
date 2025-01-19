<template>
  <section class="max-w-7xl mx-auto p-6 min-h-screen">
    <article class="bg-base-200 p-6 rounded-lg max-w-lg mx-auto">
      <h1 class="text-3xl">New Memo</h1>
      <div class="w-full">
        <div class="divider"></div>
      </div>
      <memo-form></memo-form>
    </article>
  </section>
</template>

<script setup>
import MemoForm from '@/components/memos/MemoForm.vue';
</script>
