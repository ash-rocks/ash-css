<template>
  <div>
    <nav-navbar></nav-navbar>
    <main>
      <slot/>
    </main>
  </div>
</template>

<style lang="less">
  .lni {
    line-height: inherit;
    vertical-align: initial;
  }
</style>

<script>
  import NavNavbar from '../components/site/NavNavbar'

  export default {
    components: {NavNavbar}
  }
</script>
