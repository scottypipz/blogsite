<template>
  <div class="container">
    <div></div>
    <div class="title">What's your story?</div>

    <!-- ============ Social Media ============ -->
    <div class="flex-item">
      <p>Sign up with your social accounts.</p>
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

    <!-- ============ Divider ============ -->
    <div class="divider">OR</div>

    <!-- ============ Email and Password ============ -->
    <div class="flex-item">
      <p>Sign up with your email and password.</p>
      <form id="writer-register">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email"
            name="email"
            autocomplete="email"
          />
        </div>

        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password"
            name="password"
            autocomplete="password"
          />
        </div>
        <button type="submit"
          class="btn-teal"
        >
          Sign up
        </button>
      </form>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Cookie);

.container {
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-rows: 0.5fr 0.5fr 1fr 0.1fr 1fr 0.5fr;
}

.title {
  font-family: 'Cookie';
  font-size: 3rem;
  padding: 2rem;
}

p {
  padding: 1rem 0;
}

form {
  text-align: left;
}
</style>
