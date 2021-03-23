<template>
  <div>

    <vue-headful
      title="ASH CSS - Accessible CSS-only framework"
      description="Accessible CSS only semantic framework with a built-in dark mode. No JavaScript required!"
    />

    <section id="hero" class="">
      <div class="container">
        <div class="row">
          <div class="column -md-6 -offset-md-3 --align-center">
            <h1 class="--size-6xl --margin-0"><span class="--color-orange">A</span><span class="">SH</span> <span class="--weight-thin">CSS</span></h1>
            <h2>Accessible CSS-only semantic framework with a built-in dark mode and a plethera of utilities. No JavaScript required!</h2>
            <router-link :to="{ name: 'introduction'}" class="button -primary -medium --rounded-full --padding-x-10">Get Started</router-link>
            <div class="--weight-medium">
              <span class="--padding-right-3">Light</span>
              <label class="switch -light --margin-right-0">
                <input type="checkbox" id="dark" @click="toggleDark">
                <span class="toggle"></span> Dark
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="--padding-y-16">
      <div class="container --padding-y-16">
        <div class="row">
          <div class="column -12">
            <h2 class="--align-center">ASH is built on top of a simple <router-link :to="{ name: 'grid'}"><u>flex-based layout</u></router-link> system with a <router-link :to="{ name: 'color'}"><u>colorful and accessible pallete</u></router-link></h2>
          </div>
        </div>
        <div class="row">
          <div class="column -md-4 --align-center">
            <h3 class="--size-2xl --uppercase --spacing-widest --color-orange">Modern</h3>
            <p>The latest widely supported HTML and CSS are used for modern browsers along with classless elements. As the web evolves so will ASH!</p>
          </div>
          <div class="column -md-4 --align-center">
            <h3 class="--size-2xl --uppercase --spacing-widest --color-orange">Accessible</h3>
            <p>ASH is fully WCAG AA compliant for colors and contrast. We believe the web should be accessible to everyone. Easy on the eyes!</p>
          </div>
          <div class="column -md-4 --align-center">
            <h3 class="--size-2xl --uppercase --spacing-widest --color-orange">Open</h3>
            <p>ASH is open-source and will always be! Come join our community on GitHub and help us improve and evolve. Open-source is life.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="--padding-y-16 --background-blue-lighten">
      <div class="container --padding-y-16">
        <div class="row">
          <div class="column -12 --color-white">
            <h2 class="--align-center --uppercase --size-4xl">ASH CSS needs <u class="--color-black-lighten">YOUR</u> help!</h2>
            <h3 class="--align-center --size-2xl">Contribute or sponsor us on GitHub</h3>
          </div>
        </div>
        <div class="row">
          <div class="column -12 --align-center">
            <a href="https://github.com/ash-rocks/ash-css" target="_blank" rel="noreferrer" class="button -light"><i class="lni lni-github-original"></i> Contribute</a>
            <a href="https://github.com/sponsors/skuIIs" target="_blank" rel="noreferrer" class="button -light"><span class="--color-pink"><i class="lni lni-heart"></i></span> Sponsor</a>
          </div>
        </div>
      </div>
    </section>

    <footer class="--background-black-light --color-white">
      <div class="container">
        <div class="row --margin-0">
          <div class="column -6">
            <div class="--padding-y-4">@{{ copyright }} ASH Rocks Authors. Artwork by pikisuperstar/Freepik</div>
          </div>
          <div class="column -6 --padding-y-2 --align-right">
            <a href="https://github.com/ash-rocks/ash-css" target="_blank" rel="noreferrer" class="--color-white --size-2xl" title="GitHub" aria-label="GitHub"><i class="lni lni-github-original"></i></a>
            <a href="https://twitter.com/ash_css" target="_blank" rel="noreferrer" class="--color-white --size-2xl --margin-left-6" title="Twitter" aria-label="Twitter"><i class="lni lni-twitter-original"></i></a>
            <a href="https://discord.gg/zJpX85f" target="_blank" rel="noreferrer" class="--color-white --size-2xl --margin-left-6" title="Discord" aria-label="Discord"><i class="lni lni-discord"></i></a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<style lang="less">
  #hero {
    background: #e1e1e1 url('/images/camp.svg') no-repeat;
    background-size: cover;
    background-position: bottom;
    height: 100vh;
  }

  #camp-dark {
    display: none;
  }
  html.dark {
    #hero {
      background-color: #1e1e1e;
    }

    #camp-light {
      display: none;
    }

    #camp-dark {
      display: block;
    }
  }
</style>

<script>

  export default {
    data() {
      return {
        copyright: new Date().getFullYear()
      }
    },
    mounted() {
      if (localStorage.getItem('dark')) {
        document.getElementById('dark').click()
      }
    },
    methods: {
      toggleDark: function () {
        var dark = document.getElementById('dark')
        document.documentElement.classList.toggle('dark')

        if (dark.checked) {
          localStorage.setItem('dark', true)
        } else {
          localStorage.removeItem('dark')
        }
      }
    }
  }
</script>
