import { defineStore } from 'pinia';

import getters from './getters';
import actions from './actions';
import state from './state';

export default defineStore('auth', {
  state,
  getters,
  actions,
})
