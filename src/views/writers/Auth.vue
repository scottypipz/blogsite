<template>
  <div class="container">
    <div class="background">
      <div class="overlay"></div>
    </div>
    <AuthForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthForm from '@/components/writers/AuthForm.vue';

export default defineComponent({
  components: {
    AuthForm,
  },
});
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
.background {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('../../assets/img/writers/registration-background.mobile.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  .overlay {
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.85);
  }

  /** Web */
  @media screen and (min-width: 1024px) {
    background-image: url('../../assets/img/writers/registration-background.jpg');
  }
}
</style>
