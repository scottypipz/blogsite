<template>
  <div class="form-group"
    :class="[
      state === true ? 'valid' : '',
      state === false ? 'error' : ''
    ]"
  >
    <slot></slot>
    <i class="valid-icon fas fa-check-circle"></i>
    <i class="error-icon fas fa-exclamation-circle"></i>
    <small class="error">{{ state === false ? invalidFeedback() : '' }}</small>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    state: {
      type: Boolean,
      default: undefined,
    },
    invalidFeedback: {
      type: Function,
      default: () => '',
    },
  },
});
</script>

<style lang="scss">
.form-group {
  margin: 0 0 .5rem 0;
  position: relative;
  &.valid {
    input {
      border-color: $green;
    }
    i.valid-icon {
      color: $green;
      visibility: visible;
    }
  }
  &.error {
    input {
      border-color: $red;
    }
    i.error-icon {
      color: $red;
      visibility: visible;
    }
    small.error {
      color: $red;
      visibility: visible;
    }
  }
  label {
    &.hidden {
      visibility: hidden;
      position: absolute;
    }
  }
  input, text-area {
    border: 1px solid rgba(0, 0, 0, 0.10);
    border-radius: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    font-size: 1rem;
    padding: 0.5rem 1rem;
    width: 100%;
    display: block;
  }
  i.valid-icon,
  i.error-icon {
    position: absolute;
    right: 1rem;
    top: 0.6rem;
    visibility: hidden;
  }
  small.error {
    display: block;
    padding: 0.25rem 0 0.25rem 1rem;
    visibility: hidden;
  }
  button {
    border: none !important;
    border-radius: 1rem !important;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15) !important;
    font-size: 1rem !important;
    padding: 0.5rem 1rem !important;
    width: 100%;
    &[type="submit"] {
      background-color: $teal;
      color: $font-white-primary;
    }
    &.btn-teal {
      background-color: $teal;
      color: $font-white-primary;
    }
    &.btn-red {
      background-color: $red;
      color: $font-white-primary;
    }
  }
}
</style>
