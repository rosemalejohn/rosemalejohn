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

  head: {
    title: {
      inner: 'Rosemale-John'
    },
    meta: [
      { name: 'description', content: 'Web developer at Peoplewave, an HR Software as a Service company.' },
      { property: 'og:image', content: '/img/me.png' }
    ]
  },

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
