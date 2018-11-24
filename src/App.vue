<template>
  <div id="app">
    <navigation />
    <app-header />
    <portfolio />
    <contact />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import AppHeader from '@/components/Header.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact.vue';

@Component({
  name: 'app',
  components: {
    Navigation,
    AppHeader,
    Portfolio,
    Contact,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  @import "assets/sass/creative";
  @import "assets/sass/bootstrap";
</style>
