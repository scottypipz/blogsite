<template>
  <div id="nav">
    <div class="container">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/writer">Writer</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;

  .container {
    width: 800px;
    margin: 0 auto;
    padding: 1rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: flex-end;
    align-items: flex-end;
    -ms-flex-pack: justify;
    justify-content: flex-end;
  }
  a {
    padding: 0 1rem;
  }
}
</style>
