<template>
  <button :disabled="state.loading">
    <slot v-if="!state.loading"></slot>
    <span
      v-if="state.loading"
      class="fas fa-circle-notch fa-spin"
      :class="[state.loading ? 'loading' : '']"
      ></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      loading: false,
    });

    const setLoading = (bool: boolean) => {
      setTimeout(() => {
        state.loading = bool;
      }, 0);
    };

    return {
      state,
      setLoading,
    };
  },
});
</script>

<style lang="scss" scoped>
span {
  opacity: 0;
  transition: opacity 500ms ease-in-out;
  &.loading {
    opacity: 1;
  }
}
</style>
