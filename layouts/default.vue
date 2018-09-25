<template>
  <v-app light>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-toolbar color="grey lighten-4">
        <v-list>
          <v-list-tile>
            <img src="/img/logo.png" alt="" width="80%">
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider/>
      <v-list>
        <v-list-group
          v-for="(item, index) in items"
          :key="index"
          no-action
          prepend-icon="show_chart"
        >
          <v-list-tile slot="activator" @click="$vuetify.goTo(generateLink(item.name), options)">
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(subItem, i) in item.item"
            :key="i"
            @click="$vuetify.goTo(generateLink(subItem.name), options)"
          >
            <v-list-tile-title v-text="subItem.name"/>
            <!-- <v-list-tile-action>
              <v-icon>drafts</v-icon>
            </v-list-tile-action> -->
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"/>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn> -->
    </v-toolbar>
    <v-content>
      <v-container v-scroll="onScroll" fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      :right="right"
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <div v-if="offsetTop > 300" class="back-btn-wrapper">
        <v-btn fab="fab" dark="dark" color="primary" @click="$vuetify.goTo('#introduction' ,options)">
          <v-icon dark="dark">keyboard_arrow_up</v-icon>
        </v-btn>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import docs from "../docs.json"
import changeCase from "change-case"

export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "",
      offsetTop: 0
    }
  },
  computed: {
    options() {
      return {
        duration: 700,
        offset: -100,
        easing: "easeInOutCubic"
      }
    }
  },
  mounted() {
    this.title = docs.info.name
    this.items = docs.item
  },
  methods: {
    generateLink(text) {
      return "#" + changeCase.snakeCase(text)
    },
    generateTarget(text) {
      return changeCase.snakeCase(text)
    },
    onScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    }
  }
}
</script>
