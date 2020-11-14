<template>
  <nav>
    <div class="container no-select">
      <router-link to="/">Blogsite</router-link>

      <!-- ============ Guest Routes ============ -->
      <template v-if="!isLoggedIn">
        <router-link :to="{ name: 'WriterAuth' }">Be a Writer</router-link>
      </template>

      <!-- ============ Private Routes ============ -->
      <template v-if="isLoggedIn">
        <router-link :to="{ name: 'WriterHome' }">Home</router-link>
        <div class="profile">
          <div class="name web-only">
            John Doe
          </div>
          <div class="profile-pic" @click="logout"></div>
        </div>
      </template>
    </div>
  </nav>
</template>

<script lang="ts">
import store from '@/store/modules/writer';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const isLoggedIn = computed(() => store.state.isLoggedIn);

    const logout = () => store.dispatch('logout');

    return {
      isLoggedIn,
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
nav {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  font-size: 1rem;

  .container {
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: flex-end;
  }

  a {
    padding: 0 1rem;
  }

  .profile {
    display: flex;
    -ms-flex-align: center;
    align-items: center;

    .name {
      margin-right: 1rem;
    }

    .profile-pic {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: $google-light-primary;
    }
  }
}
</style>
