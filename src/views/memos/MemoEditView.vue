<template>
  <section class="max-w-7xl mx-auto p-6 min-h-screen">
    <article class="bg-base-200 p-6 rounded-lg max-w-lg mx-auto">
      <h1 class="text-3xl">Edit Memo</h1>
      <div class="w-full">
        <div class="divider"></div>
      </div>
      <memo-form :initialMemo="selectedMemo"></memo-form>
    </article>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useMemoStore } from '@/store';
import MemoForm from '@/components/memos/MemoForm.vue';

const route = useRoute();
const memoStore = useMemoStore();

const memoId = route.params.id;
const selectedMemo = memoStore.memoById(memoId);

</script>