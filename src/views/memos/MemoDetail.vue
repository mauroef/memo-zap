<template>
  <section class="max-w-7xl mx-auto p-6 min-h-screen" v-if="selectedMemo">
    <div class="card bg-base-200 w-96 mx-auto">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ selectedMemo.name }}</h2>
        <p>{{ selectedMemo.frequency }}</p>
        <p>{{ selectedMemo.startDate }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-info" @click="editMemo">Edit</button>
          <button class="btn btn-outline btn-error" @click="deleteMemo">
            Delete
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="max-w-7xl mx-auto p-6 min-h-screen" v-else>
    <div class="card bg-base-200 w-96 mx-auto">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Memo not found</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useMemoStore, useAuthStore } from '@/store';
import { useRouter } from 'vue-router';

const props = defineProps({
  id: {
    type: String,
  },
});

const authStore = useAuthStore();
const uid = authStore.user.uid;

const memosStore = useMemoStore();
const selectedMemo = computed(() => {
  return memosStore.allMemos.find(
    (memo) => memo.id === props.id
  );
});

const router = useRouter();

const editMemo = () => {
  router.replace(`/memos/${props.id}/edit`);
};

const deleteMemo = () => {
  memosStore.deleteMemo(uid, props.id);
  router.replace('/memos');
};
</script>
