<template>
  <div id="app">
    <navigation />
    <app-header />
    <about />
    <portfolio />
    <resume />
    <contact />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import AppHeader from '@/components/Header'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

export default {
  name: 'app',

  components: {
    Navigation,
    AppHeader,
    About,
    Portfolio,
    Resume,
    Contact
  }
}
</script>

<style lang="scss">
  @import "assets/sass/bootstrap";
  @import "assets/sass/creative";
</style>
