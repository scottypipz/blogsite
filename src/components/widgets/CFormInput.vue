<template>
  <label :for="id" :class="[hiddenLabel ? 'hidden' : '']">{{ label }}</label>
  <input
    :autocomplete="autocomplete"
    :id="id"
    :name="type"
    :placeholder="placeholder"
    :type="type"
    v-model="value"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useModelWrapper from '@/utils/model-wrapper';

export default defineComponent({
  props: {
    autocomplete: String,
    name: String,
    hiddenLabel: Boolean,
    id: String,
    label: String,
    modelValue: String,
    placeholder: String,
    type: String,
  },
  setup(props, { emit }) {
    return {
      value: useModelWrapper(props, emit, 'modelValue'),
    };
  },
});
</script>
