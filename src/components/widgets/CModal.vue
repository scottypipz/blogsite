<template>
  <Teleport to="body">
    <div class="modal" v-if="state.isMounted">
      <div class="modal-wrapper"></div>
      <div class="modal-content" role="alert">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      isMounted: false,
    });

    const setIsMounted = (value: boolean) => {
      state.isMounted = value;
    };

    return {
      state,
      setIsMounted,
    };
  },
});
</script>
