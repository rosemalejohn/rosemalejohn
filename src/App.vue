<template>
  <div id="app">
    <navigation />
    <app-header />
    <portfolio />
    <contact />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import AppHeader from '@/components/Header'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

export default {
  name: 'app',

  components: {
    Navigation,
    AppHeader,
    Portfolio,
    Contact
  },

  mounted () {
    this.$ga.page({
      page: '/',
      title: 'Home Page',
      location: window.location.href
    })
  }
}
</script>

<style lang="scss">
  @import "assets/sass/creative";
  @import "assets/sass/bootstrap";
</style>
