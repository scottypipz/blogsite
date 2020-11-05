<template>
  <nav>
    <div class="container no-select">
      <router-link to="/">Home</router-link>

      <!-- ============ Guest Routes ============ -->
      <router-link to="/writer">Be a Writer</router-link>

      <!-- ============ Private Routes ============ -->
      <router-link to="/profile" class="profile">
        <div class="name web-only">
          John Doe
        </div>
        <div class="profile-pic"></div>
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
nav {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;

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
      background-color: $google-light-secondary;
    }
  }
}
</style>
