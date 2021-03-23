<template>
  <nav>
    <div class="brand --padding-left-2 --padding-y-0">
      <img alt="ASH" src="/logo.svg" id="logo-light" height="50">
      <img alt="ASH" src="/logo-dark.svg" id="logo-dark" height="50">
      <span class="chip -outline --margin-left-2">v0.2.2</span>
    </div>
    <div class="group">
      <a href="https://github.com/ash-rocks/ash-css" target="_blank" rel="noreferrer" class="--color-orange --size-2xl" title="GitHub" aria-label="GitHub"><i class="lni lni-github-original"></i></a>
      <a href="https://twitter.com/ash_css" target="_blank" rel="noreferrer" class="--color-orange --size-2xl" title="Twitter" aria-label="Twitter"><i class="lni lni-twitter-original"></i></a>
      <a href="https://discord.gg/zJpX85f" target="_blank" rel="noreferrer" class="--color-orange --size-2xl" title="Discord" aria-label="Discord"><i class="lni lni-discord"></i></a>
    </div>
  </nav>
</template>

<style lang="less">
  #logo-dark {
    display: none;
  }

  html.dark {
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
