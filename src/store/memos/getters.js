export default {
  allMemos: (state) => state.memos,

  allMemosReversed: (state) => {
    return [...state.allMemos].reverse();
  },

  memoById: (state) => (id) => state.memos.find((m) => m.id === id),
};
