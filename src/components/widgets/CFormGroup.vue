<template>
  <div class="form-group"
    :class="[
      state === true ? 'valid' : '',
      state === false ? 'error' : ''
    ]"
  >
    <slot></slot>
    <i class="valid-icon fas fa-check-circle"></i>
    <span
      class="error"
      :data-text="state === false ? invalidFeedback() : ''"
    >
      <i class="error-icon fas fa-exclamation-circle"></i>
    </span>
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
      box-shadow: 0 0 3px $red;
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
  i.valid-icon {
    position: absolute;
    right: 1rem;
    top: 0.6rem;
    visibility: hidden;
  }
  span.error {
    position: absolute;
    right: 1rem;
    top: 0.6rem;
    visibility: hidden;
    &:before {
      content: attr(data-text);
      position: absolute;
      right: 0;
      top: -6rem;

      padding: 0.5rem;
      background: $red;
      color:#fff;
      text-align: center;

      display: none; /* hide by default */
    }
    &:hover:before {
      display: block;
    }
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
