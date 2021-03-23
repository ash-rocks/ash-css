<template>
  <div>
    <div class="off-canvas show">

      <input type="checkbox" id="canvas-toggle" class="canvas-toggle" />
      <label for="canvas-toggle"><i class="icon lni lni-menu"></i></label>

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
    color: #0074d9 !important;
  }
  .code-toolbar {
    position: relative;
  }
  .code-toolbar pre {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .code-toolbar .toolbar {
    position: absolute;
    top: 0;
    right: 0.25rem;
  }
  .toolbar-item button {
    font-size: 0.875rem;
    padding: 0 0.5rem;
  }
  html.dark .router-link-exact-active{
    color: #40a6ff !important;
  }
  @media (min-width: 1200px) {
    .toc {
      position: sticky !important;
      top: 4rem;
    }
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
