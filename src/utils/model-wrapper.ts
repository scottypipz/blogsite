import { computed } from 'vue';

function useModelWrapper(props: never, emit: (event: string, ...args: never[]) => void, name = 'modelValue') {
  return computed({
    get: () => props[name],
    set: (value) => emit(`update:${name}`, value),
  });
}

export default useModelWrapper;
