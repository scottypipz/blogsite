<template>
  <div class="container">
    <div class="title">What's your story?</div>

    <!-- ============ email_and_password ============ -->
    <form class="form" id="auth" @submit.prevent>
      <div class="input-group mb-3">
        <CFormInput
          autocomplete="email"
          :autofocus="true"
          name="email"
          :hiddenLabel="true"
          id="email"
          label="Email"
          placeholder="Email"
          :state="stateEmail"
          :invalidFeedback="invalidFeedbackEmail"
          type="email"
          v-model="form.email"
        />
        <CFormInput
          autocomplete="password"
          name="password"
          :hiddenLabel="true"
          id="password"
          label="Password"
          placeholder="Password"
          :state="statePassword"
          type="password"
          v-model="form.password"
        />
      </div>

      <CButton
        class="btn-teal form-control mb-2"
        :disabled="!stateEmail || !statePassword"
        ref="btnLogin"
        type="submit"
        @click="handleLogin"
      >
        Login
      </CButton>
      <CButton
        class="btn-red form-control"
        :disabled="!stateEmail || !statePassword"
        ref="btnRegister"
        type="button"
        @click="handleRegister"
      >
        Sign Up
      </CButton>
    </form>
    <!-- ============ EOF email_and_password ============ -->

    <!-- ============ divider ============ -->
    <div class="spacer spacer-lg">OR</div>

    <!-- ============ social_media ============ -->
    <div class="social-media">
      <p>Login in with your social accounts.</p>
      <div class="spacer"></div>
      <div class="list">
        <button class="btn-circle btn-google" @click="handleGoogleLogin">
          <i class="fab fa-google"></i>
        </button>
        <button class="btn-circle btn-facebook" @click="handleFacebookLogin">
          <i class="fab fa-facebook-f"></i>
        </button>
        <button class="btn-circle btn-github" @click="handleGithubLogin">
          <i class="fab fa-github"></i>
        </button>
      </div>
    </div>
    <!-- ============ EOF social_media ============ -->

    <!-- ============ Modals ============ -->
    <Teleport to="body"><CModalLoading ref="modalLoading"></CModalLoading></Teleport>
    <Teleport to="body"><CModalAlert ref="modalAlert"></CModalAlert></Teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import CButton from '@/components/widgets/CButton.vue';
import CFormInput from '@/components/widgets/CFormInput.vue';
import CModalAlert from '@/components/widgets/CModalAlert.vue';
import CModalLoading from '@/components/widgets/CModalLoading.vue';
import useEmailAndPasswordForm from './compositions/useEmailAndPasswordForm';
import useOAuth from './compositions/useOAuth';

export default defineComponent({
  components: {
    CButton,
    CFormInput,
    CModalAlert,
    CModalLoading,
  },
  setup() {
    onMounted(() => useEmailAndPasswordForm.resetForm());

    return {
      ...useOAuth,
      ...useEmailAndPasswordForm,
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
