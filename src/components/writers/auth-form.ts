import { computed, reactive } from 'vue';

const initialForm = {
  email: '',
  password: '',
};
const form = reactive({ ...initialForm });

const initialError = {
  form: '',
};
const error = reactive({ ...initialError });

const resetForm = () => {
  Object.assign(form, initialForm);
  Object.assign(error, initialError);
};

// ============ Validations ============
const stateEmail = computed(() => {
  if (form.email === '') return undefined;

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(form.email);
});
const statePassword = computed(() => {
  if (form.password === '') return undefined;

  if (form.password.length < 8) {
    return false;
  }

  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  return re.test(form.password);
});
const invalidFeedbackEmail = () => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(form.email)) {
    return 'Invalid email format';
  }

  return '';
};
const invalidFeedbackPassword = () => {
  if (form.password.length < 8) {
    return 'Password should be at least 8 characters';
  }

  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!re.test(form.password)) {
    return 'Password should contain at least one capital letter, one small letter and at one number';
  }

  return '';
};

export default {
  error,
  form,
  invalidFeedbackEmail,
  invalidFeedbackPassword,
  resetForm,
  stateEmail,
  statePassword,
};
