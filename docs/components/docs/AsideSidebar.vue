<template>
  <aside class="--padding-4">

    <div class="dropdown">
      <input type="search" id="search" class="dropdown-toggle" tabindex="0" placeholder="Search" aria-label="Search" v-model="search" autocomplete="off">
      <div class="content">
        <ul class="menu" v-if="results.length == 0">
          <li>No Results</li>
        </ul>
        <ul class="menu" v-for="result in results" :key="result.page">
          <li class="divider">{{ result.page }}</li>
          <li v-for="link in result.links" :key="link.refIndex">
            <router-link :to="{ name: link.item.route.name, hash:link.item.route.hash}" v-on:click.native="clearSearch">{{ link.item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <label class="switch -dark -block">
      <input type="checkbox" id="dark" @click="toggleDark">
      <span class="toggle"></span> Dark Mode
    </label>

    <h5 class="--uppercase --margin-bottom-4">Getting Started</h5>
    <hr/>
    <router-link :to="{ name: 'introduction'}" v-on:click.native="toggleCanvas" class="link">Introduction</router-link>
    <router-link :to="{ name: 'download'}" v-on:click.native="toggleCanvas" class="link">Download</router-link>
    <router-link :to="{ name: 'customize'}" v-on:click.native="toggleCanvas" class="link">Customize</router-link>
    <router-link :to="{ name: 'color'}" v-on:click.native="toggleCanvas" class="link">Color</router-link>
    <router-link :to="{ name: 'grid'}" v-on:click.native="toggleCanvas" class="link">Grid</router-link>
    <router-link :to="{ name: 'typography'}" v-on:click.native="toggleCanvas" class="link">Typography</router-link>

    <h5 class="--uppercase --margin-bottom-4">Elements</h5>
    <hr/>
    <router-link :to="{ name: 'elements.aside'}" v-on:click.native="toggleCanvas" class="link">Aside</router-link>
    <router-link :to="{ name: 'elements.blockquote'}" v-on:click.native="toggleCanvas" class="link">Blockquote</router-link>
    <router-link :to="{ name: 'elements.button'}" v-on:click.native="toggleCanvas" class="link">Button</router-link>
    <router-link :to="{ name: 'elements.detail'}" v-on:click.native="toggleCanvas" class="link">Detail</router-link>
    <router-link :to="{ name: 'elements.figure'}" v-on:click.native="toggleCanvas" class="link">Figure</router-link>
    <router-link :to="{ name: 'elements.form'}" v-on:click.native="toggleCanvas" class="link">Form</router-link>
    <router-link :to="{ name: 'elements.hr'}" v-on:click.native="toggleCanvas" class="link">Horizontal Rule</router-link>
    <router-link :to="{ name: 'elements.list'}" v-on:click.native="toggleCanvas" class="link">List</router-link>
    <router-link :to="{ name: 'elements.meter'}" v-on:click.native="toggleCanvas" class="link">Meter</router-link>
    <router-link :to="{ name: 'elements.nav'}" v-on:click.native="toggleCanvas" class="link">Nav</router-link>
    <router-link :to="{ name: 'elements.progress'}" v-on:click.native="toggleCanvas" class="link">Progress</router-link>
    <router-link :to="{ name: 'elements.table'}" v-on:click.native="toggleCanvas" class="link">Table</router-link>

    <h5 class="--uppercase --margin-bottom-4">Components</h5>
    <hr/>
    <router-link :to="{ name: 'components.alert'}" v-on:click.native="toggleCanvas" class="link">Alert</router-link>
    <router-link :to="{ name: 'components.avatar'}" v-on:click.native="toggleCanvas" class="link">Avatar</router-link>
    <router-link :to="{ name: 'components.badge'}" v-on:click.native="toggleCanvas" class="link">Badge</router-link>
    <router-link :to="{ name: 'components.chip'}" v-on:click.native="toggleCanvas" class="link">Chip</router-link>
    <router-link :to="{ name: 'components.dropdown'}" v-on:click.native="toggleCanvas" class="link">Dropdown</router-link>
    <router-link :to="{ name: 'components.menu'}" v-on:click.native="toggleCanvas" class="link">Menu</router-link>
    <router-link :to="{ name: 'components.modal'}" v-on:click.native="toggleCanvas" class="link">Modal</router-link>
    <router-link :to="{ name: 'components.off-canvas'}" v-on:click.native="toggleCanvas" class="link">Off-Canvas</router-link>
    <router-link :to="{ name: 'components.pagination'}" v-on:click.native="toggleCanvas" class="link">Pagination</router-link>
    <router-link :to="{ name: 'components.tab'}" v-on:click.native="toggleCanvas" class="link">Tab</router-link>
    <router-link :to="{ name: 'components.tooltip'}" v-on:click.native="toggleCanvas" class="link">Tooltip</router-link>

    <h5 class="--uppercase --margin-bottom-4">Utilities</h5>
    <hr/>
    <router-link :to="{ name: 'utilities.background'}" v-on:click.native="toggleCanvas" class="link">Background</router-link>
    <router-link :to="{ name: 'utilities.border'}" v-on:click.native="toggleCanvas" class="link">Border</router-link>
    <router-link :to="{ name: 'utilities.box-shadow'}" v-on:click.native="toggleCanvas" class="link">Box Shadow</router-link>
    <router-link :to="{ name: 'utilities.cursor'}" v-on:click.native="toggleCanvas" class="link">Cursor</router-link>
    <router-link :to="{ name: 'utilities.display'}" v-on:click.native="toggleCanvas" class="link">Display</router-link>
    <router-link :to="{ name: 'utilities.flex'}" v-on:click.native="toggleCanvas" class="link">Flex</router-link>
    <router-link :to="{ name: 'utilities.margin'}" v-on:click.native="toggleCanvas" class="link">Margin</router-link>
    <router-link :to="{ name: 'utilities.opacity'}" v-on:click.native="toggleCanvas" class="link">Opacity</router-link>
    <router-link :to="{ name: 'utilities.overflow'}" v-on:click.native="toggleCanvas" class="link">Overflow</router-link>
    <router-link :to="{ name: 'utilities.padding'}" v-on:click.native="toggleCanvas" class="link">Padding</router-link>
    <router-link :to="{ name: 'utilities.select'}" v-on:click.native="toggleCanvas" class="link">Select</router-link>
    <router-link :to="{ name: 'utilities.typography'}" v-on:click.native="toggleCanvas" class="link">Typography</router-link>

  </aside>
</template>

<script>
  var _ = require('lodash')
  import Fuse from '../../../node_modules/fuse.js/dist/fuse.basic.min.js'
  import terms from '@/assets/search.json'

  export default {
    name: 'AsideSidebar',
    data() {
      return {
        fuse: null,
        search: '',
        results: []
      }
    },
    mounted() {
      this.checkDark()

      this.search = ''
      this.results = []

      this.fuse = new Fuse(terms, {
        minMatchCharLength: 3,
        threshold: 0.2,
        keys: ['title', 'tags']
      })
    },
    watch: {
      search(val) {
        if (val.length >= this.fuse.options.minMatchCharLength) {
          var results = _.chain(this.fuse.search(val))
            .groupBy('item.page')
            .map((value, key) => ({ page: key, links: value }))
            .value()
          this.results = results
        } else {
          this.results = []
        }
      }
    },
    methods: {
      checkDark: function () {
        if (localStorage.getItem('dark')) {
          if (!document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.toggle('dark')
          }
          document.getElementById('dark').checked = true
        }
      },
      toggleDark: function () {
        var dark = document.getElementById('dark')
        document.documentElement.classList.toggle('dark')

        if (dark.checked) {
          localStorage.setItem('dark', true)
        } else {
          localStorage.removeItem('dark')
        }
      },
      toggleCanvas: function () {
        var canvas = document.getElementById('canvas-toggle')

        if (canvas.checked) {
          canvas.checked = false
        }
      },
      clearSearch: function () {
        this.search = ''
        document.getElementById('search').blur()
      }
    }
  }
</script>
