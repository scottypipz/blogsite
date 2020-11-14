import store from '@/store/modules/writer';
// eslint-disable-next-line object-curly-newline
import { computed, reactive, ref } from 'vue';

const initialForm = {
  email: '',
  password: '',
};
const form = reactive({ ...initialForm });
const modalLoading = ref();
const modalAlert = ref();

const resetForm = () => {
  Object.assign(form, initialForm);
};

// ============ Validations ============
const stateEmail = computed(() => {
  if (form.email === '') return undefined;

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(form.email);
});

const statePassword = computed(() => {
  if (form.password === '') return undefined;

  return form.password.length > 1;
});

const invalidFeedbackEmail = () => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(form.email)) {
    return 'Invalid email format';
  }

  return '';
};

// ============ Login ============
const btnLogin = ref();
const handleLogin = async () => {
  if (!stateEmail.value || !statePassword.value) return;

  modalLoading.value.setIsLoading(true);

  try {
    await store.dispatch('login', form);
  } catch (e) {
    modalLoading.value.setIsLoading(false);
    setTimeout(() => {
      modalAlert.value.showAlert('Error', e.message);
    }, 200);
  }
};

// ============ Register ============
const btnRegister = ref();
const handleRegister = async () => {
  if (!stateEmail.value || !statePassword.value) return;

  modalLoading.value.setIsLoading(true);

  try {
    await store.dispatch('register', form);
  } catch (e) {
    modalLoading.value.setIsLoading(false);
    setTimeout(() => {
      modalAlert.value.showAlert('Error', e.message);
    }, 200);
  }
};

export default {
  btnLogin,
  btnRegister,
  form,
  handleLogin,
  handleRegister,
  invalidFeedbackEmail,
  modalAlert,
  modalLoading,
  resetForm,
  stateEmail,
  statePassword,
};
