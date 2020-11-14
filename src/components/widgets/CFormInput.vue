<template>
  <div class="form-input"
    :class="[
      state === true ? 'valid' : '',
      state === false ? 'error' : ''
    ]"
  >
    <label :for="id" :class="[hiddenLabel ? 'hidden' : '']">{{ label }}</label>
    <input
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :id="id"
      :name="type"
      :placeholder="placeholder"
      :type="type"
      v-model="value"
    />
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
import useModelWrapper from '@/utils/model-wrapper';

export default defineComponent({
  props: {
    autocomplete: String,
    autofocus: Boolean,
    name: String,
    hiddenLabel: Boolean,
    id: String,
    invalidFeedback: {
      type: Function,
      default: () => '',
    },
    label: String,
    modelValue: String,
    placeholder: String,
    state: {
      type: Boolean,
      default: undefined,
    },
    type: String,
  },
  setup(props, { emit }) {
    return {
      value: useModelWrapper(props, emit, 'modelValue'),
    };
  },
});
</script>

<style lang="scss" scoped>
label {
  &.hidden {
    visibility: hidden;
    position: absolute;
  }
}
.input-group {
  .form-input {
    &:first-of-type {
      input {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }
    }
    &:last-of-type {
      input {
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
      }
    }
  }
}

.form-input {
  position: relative;
  input {
    border: 1px solid rgba(0, 0, 0, 0.10);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    font-size: 1rem;
    width: 100%;
    display: block;
    transition: all 200ms ease-in-out;
    overflow: hidden;
    padding: 0.5rem 2rem 0.5rem 1rem;
    &:focus {
      border: 1px solid $sky;
      box-shadow: 0 0 5px $sky;
    }
  }

  /** ============ valid_and_error_icons ============ */
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
  &.valid {
    input {
      border-color: $green;
      box-shadow: 0 0 3px $green;
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
  /** ============ EOF valid_and_error_icons ============ */

}
</style>
