<template>
  <div>
    <nav-navbar></nav-navbar>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
  import NavNavbar from '../components/site/NavNavbar'

  export default {
    components: {NavNavbar}
  }
</script>
