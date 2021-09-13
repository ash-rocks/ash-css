<template>
  <div>

    <div class="row">
      <div class="column -12">
        <h1>Color</h1>
        <p>ASH uses a simple coloring palette for use in your projects and contains 99 colors in total. Most colors includes 7 steps which goes from darkest to lightest. The main color starts in the middle and is either lightened or darkened 10% each step.</p>
        <div class="alert -primary" role="alert">
          <div class="content">
            ASH strives to follow accessibility standards, but it is up to you to keep your project compliant. Click on the name of a color to see matching WCAG AA, 4.5 contrast ratio, or better combinations. All colors have at least one valid combination for white or black text.
          </div>
        </div>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-blue-darkest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">blue-darkest</label>
      </div>
      <div class="column -md --background-blue-darker --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">blue-darker</label>
      </div>
      <div class="column -md --background-blue-darken --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">blue-darken</label>
      </div>
      <div class="column -md --background-blue --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">blue</label>
      </div>
      <div class="column -md --background-blue-lighten --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">blue-lighten</label>
      </div>
      <div class="column -md --background-blue-lighter --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">blue-lighter</label>
      </div>
      <div class="column -md --background-blue-lightest --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">blue-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-cyan-darkest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">cyan-darkest</label>
      </div>
      <div class="column -md --background-cyan-darker --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">cyan-darker</label>
      </div>
      <div class="column -md --background-cyan-darken --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">cyan-darken</label>
      </div>
      <div class="column -md --background-cyan --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">cyan</label>
      </div>
      <div class="column -md --background-cyan-lighten --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">cyan-lighten</label>
      </div>
      <div class="column -md --background-cyan-lighter --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">cyan-lighter</label>
      </div>
      <div class="column -md --background-cyan-lightest --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">cyan-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-green-darkest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">green-darkest</label>
      </div>
      <div class="column -md --background-green-darker --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">green-darker</label>
      </div>
      <div class="column -md --background-green-darken --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">green-darken</label>
      </div>
      <div class="column -md --background-green --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">green</label>
      </div>
      <div class="column -md --background-green-lighten --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">green-lighten</label>
      </div>
      <div class="column -md --background-green-lighter --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">green-lighter</label>
      </div>
      <div class="column -md --background-green-lightest --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">green-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-yellow-darkest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">yellow-darkest</label>
      </div>
      <div class="column -md --background-yellow-darker --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">yellow-darker</label>
      </div>
      <div class="column -md --background-yellow-darken --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">yellow-darken</label>
      </div>
      <div class="column -md --background-yellow --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">yellow</label>
      </div>
      <div class="column -md --background-yellow-lighten --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">yellow-lighten</label>
      </div>
      <div class="column -md --background-yellow-lighter --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">yellow-lighter</label>
      </div>
      <div class="column -md --background-yellow-lightest --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">yellow-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-orange-darkest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">orange-darkest</label>
      </div>
      <div class="column -md --background-orange-darker --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">orange-darker</label>
      </div>
      <div class="column -md --background-orange-darken --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">orange-darken</label>
      </div>
      <div class="column -md --background-orange --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">orange</label>
      </div>
      <div class="column -md --background-orange-lighten --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">orange-lighten</label>
      </div>
      <div class="column -md --background-orange-lighter --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">orange-lighter</label>
      </div>
      <div class="column -md --background-orange-lightest --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">orange-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-red-darkest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">red-darkest</label>
      </div>
      <div class="column -md --background-red-darker --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">red-darker</label>
      </div>
      <div class="column -md --background-red-darken --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">red-darken</label>
      </div>
      <div class="column -md --background-red --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">red</label>
      </div>
      <div class="column -md --background-red-lighten --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">red-lighten</label>
      </div>
      <div class="column -md --background-red-lighter --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">red-lighter</label>
      </div>
      <div class="column -md --background-red-lightest --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">red-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-pink-darkest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">pink-darkest</label>
      </div>
      <div class="column -md --background-pink-darker --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">pink-darker</label>
      </div>
      <div class="column -md --background-pink-darken --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">pink-darken</label>
      </div>
      <div class="column -md --background-pink --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">pink</label>
      </div>
      <div class="column -md --background-pink-lighten --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">pink-lighten</label>
      </div>
      <div class="column -md --background-pink-lighter --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">pink-lighter</label>
      </div>
      <div class="column -md --background-pink-lightest --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">pink-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-magenta-darkest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">magenta-darkest</label>
      </div>
      <div class="column -md --background-magenta-darker --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">magenta-darker</label>
      </div>
      <div class="column -md --background-magenta-darken --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">magenta-darken</label>
      </div>
      <div class="column -md --background-magenta --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">magenta</label>
      </div>
      <div class="column -md --background-magenta-lighten --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">magenta-lighten</label>
      </div>
      <div class="column -md --background-magenta-lighter --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">magenta-lighter</label>
      </div>
      <div class="column -md --background-magenta-lightest --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">magenta-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-purple-darkest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">purple-darkest</label>
      </div>
      <div class="column -md --background-purple-darker --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">purple-darker</label>
      </div>
      <div class="column -md --background-purple-darken --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">purple-darken</label>
      </div>
      <div class="column -md --background-purple --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">purple</label>
      </div>
      <div class="column -md --background-purple-lighten --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">purple-lighten</label>
      </div>
      <div class="column -md --background-purple-lighter --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">purple-lighter</label>
      </div>
      <div class="column -md --background-purple-lightest --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">purple-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-indigo-darkest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">indigo-darkest</label>
      </div>
      <div class="column -md --background-indigo-darker --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">indigo-darker</label>
      </div>
      <div class="column -md --background-indigo-darken --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">indigo-darken</label>
      </div>
      <div class="column -md --background-indigo --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">indigo</label>
      </div>
      <div class="column -md --background-indigo-lighten --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">indigo-lighten</label>
      </div>
      <div class="column -md --background-indigo-lighter --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">indigo-lighter</label>
      </div>
      <div class="column -md --background-indigo-lightest --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">indigo-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-brown-darkest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">brown-darkest</label>
      </div>
      <div class="column -md --background-brown-darker --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">brown-darker</label>
      </div>
      <div class="column -md --background-brown-darken --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">brown-darken</label>
      </div>
      <div class="column -md --background-brown --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">brown</label>
      </div>
      <div class="column -md --background-brown-lighten --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">brown-lighten</label>
      </div>
      <div class="column -md --background-brown-lighter --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">brown-lighter</label>
      </div>
      <div class="column -md --background-brown-lightest --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">brown-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-gray-darkest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">gray-darkest</label>
      </div>
      <div class="column -md --background-gray-darker --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">gray-darker</label>
      </div>
      <div class="column -md --background-gray-darken --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">gray-darken</label>
      </div>
      <div class="column -md --background-gray --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">gray</label>
      </div>
      <div class="column -md --background-gray-lighten --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">gray-lighten</label>
      </div>
      <div class="column -md --background-gray-lighter --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">gray-lighter</label>
      </div>
      <div class="column -md --background-gray-lightest --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">gray-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-steel-darkest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">steel-darkest</label>
      </div>
      <div class="column -md --background-steel-darker --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">steel-darker</label>
      </div>
      <div class="column -md --background-steel-darken --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">steel-darken</label>
      </div>
      <div class="column -md --background-steel --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">steel</label>
      </div>
      <div class="column -md --background-steel-lighten --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">steel-lighten</label>
      </div>
      <div class="column -md --background-steel-lighter --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">steel-lighter</label>
      </div>
      <div class="column -md --background-steel-lightest --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">steel-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-black --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">black</label>
      </div>
      <div class="column -md --background-black-light --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">black-light</label>
      </div>
      <div class="column -md --background-black-lighten --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">black-lighten</label>
      </div>
      <div class="column -md --background-black-lighter --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">black-lighter</label>
      </div>
      <div class="column -md --background-black-lightest --padding-4">
        <label class="--color-white --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">black-lightest</label>
      </div>
    </div>

    <div class="row --align-center --margin-y-8">
      <div class="column -md --background-white-dark --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">white-dark</label>
      </div>
      <div class="column -md --background-white --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">white</label>
      </div>
      <div class="column -md --background-transparent --padding-4">
        <label class="--color-black --cursor-pointer" for="modal-accessibility" v-on:click="renderModal">transparent</label>
      </div>
    </div>

    <input class="modal-toggle" id="modal-accessibility" type="checkbox" />
    <div class="modal">
      <label class="overlay" for="modal-accessibility"></label>
      <div class="dialog -medium" id="modal-dialog">
        <label class="close" for="modal-accessibility"><i class="lni lni-close"></i></label>
        <header v-if="palette">{{ palette.name }} - {{ palette.hex }}</header>
        <div id="modal-content" class="content --padding-0" v-if="palette">
          <div :class="['--padding-4 --background-' + palette.name]" v-if="palette.combinations.length > 0">
            <div class="--margin-bottom-16" v-for="combination in palette.combinations" :key="combination.name">
              <h3 :class="['--color-' + combination.name]">{{ combination.name }} - {{ combination.hex }}</h3>
              <h4 :class="['--color-' + combination.name]">Contrast {{ combination.contrast.toFixed(2) }}</h4>
              <p :class="['--color-' + combination.name]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div class="--padding-4" v-else>
            This color has no accessibility matches!
          </div>
        </div>
        <div class="content --padding-4" v-else>
          This color has no accessibility matches!
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  var colorable = require('colorable')

  export default {
    data() {
      return {
        palettes: false,
        palette: false,
        colors: {
          // BLUE
          'blue-darkest': '#002240',
          'blue-darker': '#003d73',
          'blue-darken': '#0059a6',
          'blue': '#0074d9',
          'blue-lighten': '#0d8eff',
          'blue-lighter': '#40a6ff',
          'blue-lightest': '#73beff',

          // CYAN
          'cyan-darkest': '#145252',
          'cyan-darker': '#1f7a7a',
          'cyan-darken': '#29a3a3',
          'cyan': '#33cccc',
          'cyan-lighten': '#5cd6d6',
          'cyan-lighter': '#85e0e0',
          'cyan-lightest': '#adebeb',

          // GREEN
          'green-darkest': '#062218',
          'green-darker': '#0d4e36',
          'green-darken': '#147a54',
          'green': '#1ba672',
          'green-lighten': '#22d290',
          'green-lighter': '#46e1a7',
          'green-lightest': '#72e8bc',

          // YELLOW
          'yellow-darkest': '#4d3c00',
          'yellow-darker': '#806400',
          'yellow-darken': '#b38b00',
          'yellow': '#e6b300',
          'yellow-lighten': '#ffcc1a',
          'yellow-lighter': '#ffd84d',
          'yellow-lightest': '#ffe380',

          // ORANGE
          'orange-darkest': '#4f2700',
          'orange-darker': '#824000',
          'orange-darken': '#b55900',
          'orange': '#e87200',
          'orange-lighten': '#ff8c1c',
          'orange-lighter': '#ffa54f',
          'orange-lightest': '#ffbf82',

          // RED
          'red-darkest': '#66121a',
          'red-darker': '#921925',
          'red-darken': '#bd2130',
          'red': '#dc3545',
          'red-lighten': '#e4606d',
          'red-lighter': '#eb8c95',
          'red-lightest': '#f3b7bd',

          // PINK
          'pink-darkest': '#5d1338',
          'pink-darker': '#881b51',
          'pink-darken': '#b2246b',
          'pink': '#d63384',
          'pink-lighten': '#df5d9e',
          'pink-lighter': '#e788b7',
          'pink-lightest': '#f0b2d1',

          // MAGENTA
          'magenta-darkest': '#460136',
          'magenta-darker': '#78025d',
          'magenta-darken': '#aa0383',
          'magenta': '#dc04aa',
          'magenta-lighten': '#fb18c6',
          'magenta-lighter': '#fc4ad3',
          'magenta-lightest': '#fd7cdf',

          // PURPLE
          'purple-darkest': '#320439',
          'purple-darker': '#5d0769',
          'purple-darken': '#870a99',
          'purple': '#b10dc9',
          'purple-lighten': '#d519f0',
          'purple-lighter': '#dd49f3',
          'purple-lightest': '#e679f6',

          // INDIGO
          'indigo-darkest': '#290564',
          'indigo-darker': '#3d0894',
          'indigo-darken': '#510bc4',
          'indigo': '#6610f2',
          'indigo-lighten': '#8540f5',
          'indigo-lighter': '#a471f7',
          'indigo-lightest': '#c3a1fa',

          // BROWN
          'brown-darkest': '#17110e',
          'brown-darker': '#362722',
          'brown-darken': '#553e36',
          'brown': '#74554a',
          'brown-lighten': '#936c5e',
          'brown-lighter': '#aa877a',
          'brown-lightest': '#bea399',

          // GRAY
          'gray-darkest': '#434343',
          'gray-darker': '#5c5c5c',
          'gray-darken': '#767676',
          'gray': '#8f8f8f',
          'gray-lighten': '#a9a9a9',
          'gray-lighter': '#c2c2c2',
          'gray-lightest': '#dcdcdc',

          // STEEL
          'steel-darkest': '#414758',
          'steel-darker': '#565e76',
          'steel-darken': '#6c7693',
          'steel': '#8991a9',
          'steel-lighten': '#a6acbf',
          'steel-lighter': '#c4c8d4',
          'steel-lightest': '#e2e3e9',

          // WHITE
          'white': '#ffffff',
          'white-dark': '#f7f7f7',

          // BLACK
          'black': '#111111',
          'black-light': '#1e1e1e',
          'black-lighten': '#2b2b2b',
          'black-lighter': '#444444',
          'black-lightest': '#5e5e5e',
        }
      }
    },
    mounted() {
      this.palettes = colorable(this.colors, {
        compact: false,
        threshold: 4.5,
        uniq: false
      })
    },
    methods: {
      renderModal: function (event) {
        this.palette = false
        var name = event.target.innerText
        if (this.palettes) {
          let palette = this.palettes.find(o => o.name === name)
          this.palette = (typeof palette !== 'undefined') ? palette : false
          document.getElementById('modal-content').scrollTop = 0
        }
      }
    }
  }
</script>
