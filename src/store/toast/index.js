import { defineStore } from 'pinia';
import { useToastState } from './state';
import { useToastActions } from './actions';
import { useToastGetters } from './getters';

export default defineStore('toast', () => {
  const state = useToastState();
  const actions = useToastActions(state);
  const getters = useToastGetters(state);

  return {
    ...state,
    ...actions,
    ...getters,
  };
});
