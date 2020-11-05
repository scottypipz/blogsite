<template>
  <div class="c-card">
    <div class="c-header">
      <slot name="header"/>
    </div>
    <div class="c-body">
      <slot/>
    </div>
    <div class="c-footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-card {
  background-color: $google-light-light;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .c-body {
    padding: 1rem;
  }
}
</style>
