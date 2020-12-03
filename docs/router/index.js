import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'site'},
    component: require('../views/Home.vue').default
  },
  {
    path: '/docs',
    name: 'introduction',
    component: () => import(/* webpackChunkName: "introduction" */ '../views/docs/Intro.vue')
  },
  {
    path: '/docs/color',
    name: 'color',
    component: () => import(/* webpackChunkName: "color" */ '../views/docs/Color.vue')
  },
  {
    path: '/docs/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: "grid" */ '../views/docs/Grid.vue')
  },

  // ELEMENTS
  {
    path: '/docs/elements/aside',
    name: 'elements.aside',
    component: () => import(/* webpackChunkName: "aside" */ '../views/docs/elements/Aside.vue')
  },
  {
    path: '/docs/elements/button',
    name: 'elements.button',
    component: () => import(/* webpackChunkName: "button" */ '../views/docs/elements/Button.vue')
  },
  {
    path: '/docs/elements/detail',
    name: 'elements.detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/docs/elements/Detail.vue')
  },
  {
    path: '/docs/elements/figure',
    name: 'elements.figure',
    component: () => import(/* webpackChunkName: "figure" */ '../views/docs/elements/Figure.vue')
  },
  {
    path: '/docs/elements/form',
    name: 'elements.form',
    component: () => import(/* webpackChunkName: "form" */ '../views/docs/elements/Form.vue')
  },
  {
    path: '/docs/elements/list',
    name: 'elements.list',
    component: () => import(/* webpackChunkName: "list" */ '../views/docs/elements/List.vue')
  },
  {
    path: '/docs/elements/nav',
    name: 'elements.nav',
    component: () => import(/* webpackChunkName: "navbar" */ '../views/docs/elements/Nav.vue')
  },
  {
    path: '/docs/elements/progress',
    name: 'elements.progress',
    component: () => import(/* webpackChunkName: "progress" */ '../views/docs/elements/Progress.vue')
  },
  {
    path: '/docs/elements/table',
    name: 'elements.table',
    component: () => import(/* webpackChunkName: "table" */ '../views/docs/elements/Table.vue')
  },

  // COMPONENTS
  {
    path: '/docs/components/alert',
    name: 'components.alert',
    component: () => import(/* webpackChunkName: "alert" */ '../views/docs/components/Alert.vue')
  },
  {
    path: '/docs/components/avatar',
    name: 'components.avatar',
    component: () => import(/* webpackChunkName: "avatar" */ '../views/docs/components/Avatar.vue')
  },
  {
    path: '/docs/components/badge',
    name: 'components.badge',
    component: () => import(/* webpackChunkName: "badge" */ '../views/docs/components/Badge.vue')
  },
  {
    path: '/docs/components/chip',
    name: 'components.chip',
    component: () => import(/* webpackChunkName: "chip" */ '../views/docs/components/Chip.vue')
  },
  {
    path: '/docs/components/dropdown',
    name: 'components.dropdown',
    component: () => import(/* webpackChunkName: "dropdown" */ '../views/docs/components/Dropdown.vue')
  },
  {
    path: '/docs/components/menu',
    name: 'components.menu',
    component: () => import(/* webpackChunkName: "menu" */ '../views/docs/components/Menu.vue')
  },
  {
    path: '/docs/components/modal',
    name: 'components.modal',
    component: () => import(/* webpackChunkName: "modal" */ '../views/docs/components/Modal.vue')
  },
  {
    path: '/docs/components/off-canvas',
    name: 'components.off-canvas',
    component: () => import(/* webpackChunkName: "off-canvas" */ '../views/docs/components/Off-Canvas.vue')
  },
  {
    path: '/docs/components/pagination',
    name: 'components.pagination',
    component: () => import(/* webpackChunkName: "pagination" */ '../views/docs/components/Pagination.vue')
  },
  {
    path: '/docs/components/tab',
    name: 'components.tab',
    component: () => import(/* webpackChunkName: "tab" */ '../views/docs/components/Tab.vue')
  },
  {
    path: '/docs/components/tooltip',
    name: 'components.tooltip',
    component: () => import(/* webpackChunkName: "tooltip" */ '../views/docs/components/Tooltip.vue')
  },

  // UTILITIES
  {
    path: '/docs/utilities/background',
    name: 'utilities.background',
    component: () => import(/* webpackChunkName: "background" */ '../views/docs/utilities/Background.vue')
  },
  {
    path: '/docs/utilities/border',
    name: 'utilities.border',
    component: () => import(/* webpackChunkName: "border" */ '../views/docs/utilities/Border.vue')
  },
  {
    path: '/docs/utilities/box-shadow',
    name: 'utilities.box-shadow',
    component: () => import(/* webpackChunkName: "box-shadow" */ '../views/docs/utilities/BoxShadow.vue')
  },
  {
    path: '/docs/utilities/cursor',
    name: 'utilities.cursor',
    component: () => import(/* webpackChunkName: "cursor" */ '../views/docs/utilities/Cursor.vue')
  },
  {
    path: '/docs/utilities/display',
    name: 'utilities.display',
    component: () => import(/* webpackChunkName: "display" */ '../views/docs/utilities/Display.vue')
  },
  {
    path: '/docs/utilities/height',
    name: 'utilities.height',
    component: () => import(/* webpackChunkName: "height" */ '../views/docs/utilities/Height.vue')
  },
  {
    path: '/docs/utilities/margin',
    name: 'utilities.margin',
    component: () => import(/* webpackChunkName: "margin" */ '../views/docs/utilities/Margin.vue')
  },
  {
    path: '/docs/utilities/opacity',
    name: 'utilities.opacity',
    component: () => import(/* webpackChunkName: "opacity" */ '../views/docs/utilities/Opacity.vue')
  },
  {
    path: '/docs/utilities/overflow',
    name: 'utilities.overflow',
    component: () => import(/* webpackChunkName: "overflow" */ '../views/docs/utilities/Overflow.vue')
  },
  {
    path: '/docs/utilities/padding',
    name: 'utilities.padding',
    component: () => import(/* webpackChunkName: "padding" */ '../views/docs/utilities/Padding.vue')
  },
  {
    path: '/docs/utilities/select',
    name: 'utilities.select',
    component: () => import(/* webpackChunkName: "select" */ '../views/docs/utilities/Select.vue')
  },
  {
    path: '/docs/utilities/typography',
    name: 'utilities.typography',
    component: () => import(/* webpackChunkName: "typography" */ '../views/docs/utilities/Typography.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
