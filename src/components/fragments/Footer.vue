<template>
  <footer v-if="$route.meta.withFooter !== false">
    <div class="container">
      <div class="item">
        <label for="about-us">About Us</label>
      </div>
      <div class="item">
        <label for="fresh-articles">Fresh Articles</label>
      </div>
      <div class="item">
        <label for="contact">Contact</label>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
footer {
  padding: 2rem 0;
  background-color: #77777733;
  .container {
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    justify-content: flex-end;
    .item {
      margin: 0 2rem;
    }
  }
}
</style>
