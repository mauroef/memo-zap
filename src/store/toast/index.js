import { defineStore } from 'pinia';
import { useToastState } from './state';
import { useToastActions } from './actions';

export default defineStore('toast', () => {
  const state = useToastState();
  const actions = useToastActions(state);

  return {
    ...state,
    ...actions,
  };
});
