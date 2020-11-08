<template>
  <div class="container">
    <div class="title">What's your story?</div>

    <!-- ============ Email and Password ============ -->
    <form class="form" id="auth" @submit.prevent>
      <div class="form-error">{{ error.form }}</div>
      <CFormGroup
        :state="stateEmail"
        :invalidFeedback="invalidFeedbackEmail"
      >
        <CFormInput
          autocomplete="email"
          name="email"
          :hiddenLabel="true"
          id="email"
          label="Email"
          placeholder="Email address"
          type="email"
          v-model="form.email"
        />
      </CFormGroup>

      <CFormGroup
        :state="statePassword"
        :invalidFeedback="invalidFeedbackPassword"
      >
        <CFormInput
          autocomplete="password"
          name="password"
          :hiddenLabel="true"
          id="password"
          label="Password"
          placeholder="Password"
          type="password"
          v-model="form.password"
        />
      </CFormGroup>

      <CFormGroup>
        <CButton class="btn-teal" type="button" @click="handleLogin" ref="btnLogin">
          Login
        </CButton>
      </CFormGroup>
      <CFormGroup>
        <CButton class="btn-red" type="button" @click="handleRegister" ref="btnRegister">
          Sign up
        </CButton>
      </CFormGroup>
    </form>
    <!-- ============ EOF Email and Password ============ -->

    <!-- ============ Divider ============ -->
    <div class="spacer spacer-lg">OR</div>

    <!-- ============ Social Media ============ -->
    <div class="social-media">
      <p>Login in with your social accounts.</p>
      <div class="spacer"></div>
      <div class="list">
        <button class="btn-circle btn-google">
          <i class="fab fa-google"></i>
        </button>
        <button class="btn-circle btn-facebook">
          <i class="fab fa-facebook-f"></i>
        </button>
        <button class="btn-circle btn-twitter">
          <i class="fab fa-twitter"></i>
        </button>
      </div>
    </div>
    <!-- ============ EOF Social Media ============ -->
  </div>
</template>

<script lang="ts">
import store from '@/store/modules/writer';
import { defineComponent, onMounted, ref } from 'vue';
import CButton from '@/components/widgets/CButton.vue';
import CFormGroup from '@/components/widgets/CFormGroup.vue';
import CFormInput from '@/components/widgets/CFormInput.vue';
import AuthForm from './auth-form';

export default defineComponent({
  components: {
    CButton,
    CFormGroup,
    CFormInput,
  },
  setup() {
    const {
      error,
      form,
      invalidFeedbackEmail,
      invalidFeedbackPassword,
      resetForm,
      stateEmail,
      statePassword,
    } = AuthForm;

    onMounted(() => resetForm());

    // ============ Login ============
    const btnLogin = ref();
    const handleLogin = async () => {
      if (btnLogin.value.state.loading) return;
      if (!stateEmail.value || !statePassword.value) return;
      btnLogin.value.setLoading(true);

      try {
        await store.dispatch('login', form);
      } catch (e) {
        btnLogin.value.setLoading(false);
        error.form = e.message;
      }
    };

    // ============ Register ============
    const btnRegister = ref();
    const handleRegister = async () => {
      if (btnRegister.value.state.loading) return;
      if (!stateEmail.value || !statePassword.value) return;

      btnRegister.value.setLoading(true);

      try {
        await store.dispatch('register', form);
      } catch (e) {
        btnRegister.value.setLoading(false);
        error.form = e.message;
      }
    };

    return {
      error,
      form,
      btnLogin,
      btnRegister,
      handleLogin,
      handleRegister,
      invalidFeedbackEmail,
      invalidFeedbackPassword,
      stateEmail,
      statePassword,
    };
  },
});
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Cookie);
@import '@/assets/scss/form.scss';

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-family: 'Cookie';
  letter-spacing: 2px;
  font-size: 3rem;
  padding: 2rem;
}

p {
  font-weight: 300;
}

form {
  text-align: left;
  width: 100%;
  max-width: 20rem;
}

.social-media {
  .list {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
