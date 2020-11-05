<template>
  <div class="container">
    <CCard>
      <div class="card-container">
        <!-- ============ O auth ============ -->
        <div class="flex-item">
          <h4>Sign up with your social accounts.</h4>
          <md-button class="md-icon-button md-raised">
            <i class="fab fa-google fa-2x"></i>
          </md-button>
        </div>

        <!-- ============ Divider ============ -->
        <div class="divider">OR</div>

        <!-- ============ Email and Password ============ -->
        <div class="flex-item">
          <h4>Sign up with your email and password.</h4>
          <!-- ============ Form ============ -->
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
          </form>
        </div>
      </div>
    </CCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CCard from '@/components/widgets/CCard.vue';
import { MdButton } from 'vue-material/dist/components';

export default defineComponent({
  components: {
    CCard,
  },
});
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;

  .card-container {
    display: grid;
    grid-auto-flow: column;
    column-gap: 1rem;
    .divider {
      margin: auto;
    }
  }
}

#writer-register {
  text-align: left;
}
</style>
