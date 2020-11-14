<template>
  <Teleport to="body">
    <CModal ref="refModal">
      <template #header>
        {{ state.header }}
      </template>
      <span>{{ state.message }}</span>
    </CModal>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import CModal from './CModal.vue';

export default defineComponent({
  components: {
    CModal,
  },
  setup() {
    const state = reactive({
      header: '',
      message: '',
    });
    const refModal = ref();

    const showAlert = (header: string, message: string) => {
      refModal.value.setIsMounted(true);
      state.header = header;
      state.message = message;
    };

    const closeAlert = () => {
      refModal.value.setIsMounted(false);
      setTimeout(() => {
        state.header = '';
        state.message = '';
      }, 400);
    };

    return {
      refModal,
      state,
      closeAlert,
      showAlert,
    };
  },
});
</script>
