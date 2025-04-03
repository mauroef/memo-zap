<template>
  <section class="max-w-7xl mx-auto p-6 min-h-screen" v-if="selectedMemo">
    <div class="card bg-base-200 w-96 mx-auto max-w-full">
      <div class="card-body items-center gap-4">
        <div class="flex items-center justify-between w-full">
          <h2 class="card-title text-3xl">{{ selectedMemo.name }}</h2>
          <BaseBackButton />
        </div>
        <div class="bg-base-300 p-3 rounded-md w-full flex flex-col gap-2">
          <p>Type: {{ selectedMemo.frequency }}</p>
          <p>Date: {{ selectedMemo.startDate }}</p>
        </div>
        <div class="card-actions flex w-full">
          <button class="btn btn-neutral w-1/2 flex-1" @click="editMemo">
            Edit
          </button>
          <button
            class="btn btn-outline btn-error w-1/2 flex-1"
            @click="deleteMemo"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="max-w-7xl mx-auto p-6 min-h-screen" v-else>
    <div class="card bg-base-200 w-96 mx-auto max-w-full">
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
import BaseBackButton from '@/components/ui/BaseBackButton.vue';

const props = defineProps({
  id: {
    type: String,
  },
});

const authStore = useAuthStore();
const uid = authStore.user.uid;

const memosStore = useMemoStore();
const selectedMemo = computed(() => {
  return memosStore.allMemos.find((memo) => memo.id === props.id);
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
