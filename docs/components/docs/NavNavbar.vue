<template>
  <nav>
    <div class="brand --padding-left-2 --padding-y-0">
      <img alt="ASH" src="/logo.svg" id="logo-light" height="50">
      <img alt="ASH" src="/logo-dark.svg" id="logo-dark" height="50">
    </div>
    <div class="group">
      <a href="https://github.com/ash-rocks/ash-css" target="_blank" rel="noreferrer" class="--color-orange --size-2xl" title="GitHub" aria-label="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://twitter.com/ash_css" target="_blank" rel="noreferrer" class="--color-orange --size-2xl" title="Twitter" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
      <a href="https://discord.gg/zJpX85f" target="_blank" rel="noreferrer" class="--color-orange --size-2xl" title="Discord" aria-label="Discord"><i class="fab fa-discord"></i></a>
    </div>
  </nav>
</template>

<style lang="less">
  #logo-dark {
    display: none;
  }

  body.dark {
    #logo-light {
      display: none;
    }

    #logo-dark {
      display: block;
    }
  }
</style>

<script>
  export default {
    name: 'NavNavbar',
  }
</script>
