<template>
  <Navbar/>
  <main>
    <router-view/>
  </main>
  <Footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/fragments/Footer.vue';
import Navbar from '@/components/fragments/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Footer,
    Navbar,
  },
});
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Nunito);
@import './assets/scss/_variables.scss';
#app {
  font-family: 'Nunito', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  background-color: $google-light-light;
  flex: 1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a, u {
  text-decoration: none;
}

.no-select {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

.web-only {
  display: none;
}

/** Web */
@media screen and (min-width: 1000px) {
  .web-only {
    display: block;
  }
}
</style>
