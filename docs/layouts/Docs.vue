<template>
  <div>
    <div class="off-canvas show">

      <input type="checkbox" id="canvas-toggle" class="canvas-toggle" />
      <label for="canvas-toggle"><i class="icon fas fa-bars"></i></label>

      <nav-navbar></nav-navbar>

      <aside-sidebar></aside-sidebar>

      <div class="content">
        <div class="container">
          <main>
            <slot/>
          </main>
        </div>
      </div>

      <label class="overlay" for="canvas-toggle"></label>
    </div>
  </div>
</template>
<style lang="less">
  .router-link-exact-active {
    color: #0074D9 !important;
  }

  code.hljs {
    background-color: transparent;
  }
</style>
<script>
  import NavNavbar from '../components/docs/NavNavbar'
  import AsideSidebar from '../components/docs/AsideSidebar'

  export default {
    components: {NavNavbar, AsideSidebar},
    updated() {
      this.$nextTick(() => {
        if(this.$route.hash) {
          const el = document.querySelector(this.$route.hash)
          el && el.scrollIntoView()
        }
      })
    }
  }
</script>
