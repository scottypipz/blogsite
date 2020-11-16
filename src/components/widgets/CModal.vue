<template>
  <Teleport to="body">
    <transition name="fade">
      <div class="modal-wrapper" v-if="state.isMounted" @click="setIsMounted(false)"></div>
    </transition>
    <transition name="pop">
      <div class="modal no-select" v-if="state.isMounted">
        <h3 class="modal-header">
          <slot name="header"></slot>
        </h3>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </transition>
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
