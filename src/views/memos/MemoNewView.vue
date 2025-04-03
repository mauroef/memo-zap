<template>
  <section class="max-w-7xl mx-auto p-6 min-h-screen">
    <article class="bg-base-200 p-6 rounded-lg max-w-lg mx-auto">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl">New Memo</h1>
        <BaseBackButton />
      </div>
      <div class="w-full">
        <div class="divider"></div>
      </div>
      <memo-form></memo-form>
    </article>
  </section>
</template>

<script setup>
import MemoForm from '@/components/memos/MemoForm.vue';
import BaseBackButton from '@/components/ui/BaseBackButton.vue';
</script>
