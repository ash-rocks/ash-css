<template>
  <div>

    <vue-headful
      title="ASH CSS - Semantic CSS-only framework"
      description="Modern CSS only semantic framework with a built-in dark mode. No JavaScript required!"
    />

    <section class="--padding-y-16" id="hero">
      <div class="container">
        <div class="row">
          <div class="column -md-6 --margin-bottom-8">
            <h1 class="--size-4xl">ASH CSS</h1>
            <h2>Modern CSS-only semantic framework with a built-in dark mode. No JavaScript required!</h2>
            <p>ASH is a responsive flex-based framework using only CSS. ASH combines classless semantic elements with classed components to build awesome front-ends. ASH requires no JavaScript and weighs in at ~20kb gzipped!</p>
            <router-link :to="{ name: 'introduction'}" class="button -primary">Get Started</router-link>
            <a href="https://github.com/ash-rocks/ash-css/releases" target="_blank" rel="noreferrer" class="button -dark">Download</a>

            <label class="switch -dark">
              <input type="checkbox" id="dark" @click="toggleDark">
              <span class="toggle"></span> Dark Mode
            </label>
          </div>
          <div class="column -md-6">
            <img alt="Camp" src="/images/camp-light.svg" id="camp-light">
            <img alt="Camp" src="/images/camp-dark.svg" id="camp-dark">
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
            <h3 class="--size-2xl --uppercase --spacing-widest --color-pink">Modern</h3>
            <p>The latest widely supported HTML and CSS are used for modern browsers and elements are classless. As the web evolves so will ASH!</p>
          </div>
          <div class="column -md-4 --align-center">
            <h3 class="--size-2xl --uppercase --spacing-widest --color-pink">Hackable</h3>
            <p>Easily change variables, exclude components, or use our extensive list of utilities to make ASH yours. Hack away you awesome beast.</p>
          </div>
          <div class="column -md-4 --align-center">
            <h3 class="--size-2xl --uppercase --spacing-widest --color-pink">Open</h3>
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
            <a href="https://github.com/ash-rocks/ash-css" target="_blank" rel="noreferrer" class="button -light"><i class="fab fa-github"></i> Contribute</a>
            <a href="https://github.com/sponsors/skuIIs" target="_blank" rel="noreferrer" class="button -light"><span class="--color-pink"><i class="far fa-heart"></i></span> Sponsor</a>
          </div>
        </div>
      </div>
    </section>

    <footer class="--background-black-light --color-white">
      <div class="container">
        <div class="row --margin-0">
          <div class="column -6">
            <div class="--padding-y-4">@{{ copyright }} ASH Rocks Authors</div>
          </div>
          <div class="column -6 --padding-y-2 --align-right">
            <a href="https://github.com/ash-rocks/ash-css" target="_blank" rel="noreferrer" class="--color-white --size-2xl" title="GitHub" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="https://twitter.com/ash_css" target="_blank" rel="noreferrer" class="--color-white --size-2xl --margin-left-6" title="Twitter" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://discord.gg/zJpX85f" target="_blank" rel="noreferrer" class="--color-white --size-2xl --margin-left-6" title="Discord" aria-label="Discord"><i class="fab fa-discord"></i></a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<style lang="less">
  #hero {
    background-color: #e1e1e1;
  }

  #camp-dark {
    display: none;
  }

  body.dark {
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
        document.body.classList.toggle('dark')

        if (dark.checked) {
          localStorage.setItem('dark', true)
        } else {
          localStorage.removeItem('dark')
        }
      }
    }
  }
</script>
