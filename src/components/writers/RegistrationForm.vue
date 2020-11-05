<template>
  <div class="container">
    <div class="title">What's your story?</div>

    <!-- ============ Email and Password ============ -->
    <form id="writer-register">
      <div class="form-group">
        <label for="email" class="hidden">Email:</label>
        <input type="email"
          name="email"
          autocomplete="email"
          required
          placeholder="Email"
        />
      </div>

      <div class="form-group">
        <label for="password" class="hidden">Password:</label>
        <input pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          type="password"
          id="password"
          name="password"
          required
          autocomplete="password"
          placeholder="Password">
      </div>
      <div class="form-group">
        <button type="submit">
          Sign up
        </button>
        <div class="color-teal text-right spacer spacer-sm">
          <router-link :to="{ name: 'WriterLogin' }">
            Already have an account?
          </router-link>
        </div>
      </div>
    </form>
    <!-- ============ EOF Email and Password ============ -->

    <!-- ============ Divider ============ -->
    <div class="spacer spacer-lg">OR</div>

    <!-- ============ Social Media ============ -->
    <div class="flex-item">
      <p>Sign up with your social accounts.</p>
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
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Cookie);
@import '@/assets/scss/form.scss';

// .container {
//   height: 100%;
//   display: grid;
//   place-items: center;
//   grid-template-rows:
//     0.5fr
//     0.5fr
//     1fr
//     0.1fr
//     0.7fr
//     0.5fr;
// }

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
