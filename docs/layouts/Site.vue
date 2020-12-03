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
    components: {NavNavbar},
    updated() {
      this.$nextTick(() => {
        if(this.$route.hash) {
          const el = document.querySelector(this.$route.hash);
          el && el.scrollIntoView();
        }
      })
    }
  }
</script>
