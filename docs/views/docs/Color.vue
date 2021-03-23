<template>
  <div>

    <div class="row">
      <div class="column -12">
        <h1>Color</h1>
        <p>ASH uses a simple coloring palette for use in your projects and contains 92 colors in total. Most colors includes 7 steps which goes from darkest to lightest. The main color starts in the middle and is either lightened or darkened 10% each step.</p>
        <div class="alert -primary" role="alert">
          <div class="content">
            ASH strives to follow accessibility standards, but it is up to you to keep your project compliant. Click on the name of a color to see matching WCAG AA, 4.5 contrast ratio, or better combinations. Some colors have insufficient contrast and should only be used for non-text elements.
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
        <label class="tooltip --color-white --cursor-pointer" for="modal-accessibility" data-tooltip="for non-text elements only" v-on:click="renderModal"><i class="lni lni-star-half"></i> <u>cyan-darken</u></label>
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
        <label class="tooltip --color-white --cursor-pointer" for="modal-accessibility" data-tooltip="for non-text elements only" v-on:click="renderModal"><i class="lni lni-star-half"></i> <u>red</u></label>
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
        <label class="tooltip --color-white --cursor-pointer" for="modal-accessibility" data-tooltip="for non-text elements only" v-on:click="renderModal"><i class="lni lni-star-half"></i> <u>magenta</u></label>
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
        <label class="tooltip --color-white --cursor-pointer" for="modal-accessibility" data-tooltip="for non-text elements only" v-on:click="renderModal"><i class="lni lni-star-half"></i> <u>gray-darken</u></label>
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
        <label class="tooltip --color-white --cursor-pointer" for="modal-accessibility" data-tooltip="for non-text elements only" v-on:click="renderModal"><i class="lni lni-star-half"></i> <u>steel-darken</u></label>
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
      <div class="dialog -medium">
        <label class="close" for="modal-accessibility"><i class="lni lni-close"></i></label>
        <header v-if="palette">{{ palette.name }} - {{ palette.hex }}</header>
        <div class="content --padding-0" id="modal-content" v-if="palette">
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
          'cyan-darkest': '#093131',
          'cyan-darker': '#115c5c',
          'cyan-darken': '#188888',
          'cyan': '#20b3b3',
          'cyan-lighten': '#2dd9d9',
          'cyan-lighter': '#58e1e1',
          'cyan-lightest': '#83e9e9',

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
          'red-darkest': '#5f0f0b',
          'red-darker': '#8d1710',
          'red-darken': '#bb1e15',
          'red': '#e6281d',
          'red-lighten': '#eb544b',
          'red-lighter': '#f07f79',
          'red-lightest': '#f5aba7',

          // PINK
          'pink-darkest': '#520f26',
          'pink-darker': '#7d1739',
          'pink-darken': '#a81f4d',
          'pink': '#d32761',
          'pink-lighten': '#de4f7f',
          'pink-lighter': '#e67a9e',
          'pink-lightest': '#eea5be',

          // MAGENTA
          'magenta-darkest': '#4d023c',
          'magenta-darker': '#7f0363',
          'magenta-darken': '#b1048a',
          'magenta': '#e305b1',
          'magenta-lighten': '#fa21c9',
          'magenta-lighter': '#fb53d5',
          'magenta-lightest': '#fc85e1',

          // PURPLE
          'purple-darkest': '#320439',
          'purple-darker': '#5d0769',
          'purple-darken': '#870a99',
          'purple': '#b10dc9',
          'purple-lighten': '#d519f0',
          'purple-lighter': '#dd49f3',
          'purple-lightest': '#e679f6',

          // BROWN
          'brown-darkest': '#17110e',
          'brown-darker': '#362722',
          'brown-darken': '#553e36',
          'brown': '#74554a',
          'brown-lighten': '#936c5e',
          'brown-lighter': '#aa877a',
          'brown-lightest': '#bea399',

          // GRAY
          'gray-darkest': '#484848',
          'gray-darker': '#616161',
          'gray-darken': '#7b7b7b',
          'gray': '#949494',
          'gray-lighten': '#aeaeae',
          'gray-lighter': '#c7c7c7',
          'gray-lightest': '#e1e1e1',

          // STEEL
          'steel-darkest': '#43475c',
          'steel-darker': '#585e7a',
          'steel-darken': '#6e7697',
          'steel': '#8c92ac',
          'steel-lighten': '#aaaec1',
          'steel-lighter': '#c7cad7',
          'steel-lightest': '#e5e6ec',

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
          let content = document.getElementById('modal-content')
          if (content) {
            content.scrollTop = 0
          }
        }
      }
    }
  }
</script>
