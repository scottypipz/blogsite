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
</style>
