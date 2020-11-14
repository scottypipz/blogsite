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
  padding: 2em;
  background-color: $google-light-light;
  border-radius: 0.3em;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  font-size: 1em;
}

.c-header {
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
