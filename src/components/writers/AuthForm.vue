<template>
  <div class="container">
    <div class="title">What's your story?</div>

    <!-- ============ Email and Password ============ -->
    <form class="form" id="auth" @submit.prevent>
      <div class="form-group">
        <label for="email" class="hidden">Email:</label>
        <input v-model="form.email"
          type="email"
          name="email"
          autocomplete="email"
          required
          placeholder="Email"
        />
      </div>

      <div class="form-group">
        <label for="password" class="hidden">Password:</label>
        <input v-model="form.password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          type="password"
          id="password"
          name="password"
          required
          autocomplete="password"
          placeholder="Password">
      </div>
      <div class="form-group">
        <CButton class="btn-teal" type="button" @click="login" ref="loginBtn">
          Login
        </CButton>
      </div>
      <div class="form-group">
        <button class="btn-red" type="button" @click="register" ref="registerBtn">
          Sign up
        </button>
      </div>
    </form>
    <!-- ============ EOF Email and Password ============ -->

    <!-- ============ Divider ============ -->
    <div class="spacer spacer-lg">OR</div>

    <!-- ============ Social Media ============ -->
    <div class="flex-item">
      <p>Login in with your social accounts.</p>
      <div class="spacer"></div>
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
    <!-- ============ EOF Social Media ============ -->
  </div>
</template>

<script lang="ts">
import store from '@/store/modules/writer';
import { defineComponent, reactive, ref } from 'vue';
import CButton from '@/components/widgets/CButton.vue';

export default defineComponent({
  components: {
    CButton,
  },
  setup() {
    const form = reactive({
      email: '',
      password: '',
    });
    const loginBtn = ref();
    const registerBtn = ref();

    const login = async () => {
      if (loginBtn.value.state.loading) { return; }
      loginBtn.value.setLoading(true);

      try {
        await store.dispatch('login', form);
      } catch (e) {
        // TODO Handle
        loginBtn.value.setLoading(false);
      }
    };

    const register = async () => {
      if (registerBtn.value.state.loading) { return; }
      registerBtn.value.setLoading(true);

      try {
        await store.dispatch('register', form);
      } catch (e) {
        // TODO Handle
        registerBtn.value.setLoading(false);
      }
    };

    return {
      form,
      login,
      loginBtn,
      registerBtn,
      register,
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
</style>
