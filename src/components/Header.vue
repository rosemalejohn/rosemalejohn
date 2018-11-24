<template>
  <header class="masthead text-center text-white d-flex">
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <h1 class="text-uppercase">
            <strong>Hello, my name is <span class="text-primary">Rosemale-John</span></strong>
          </h1>
          <hr>
        </div>
        <div class="col-lg-8 mx-auto">
          <p class="text-faded mb-5">A passionate web developer from The Philippines | <a href="https://laravel.com" target="_blank" class="text-laravel font-weight-bold">Laravel</a> and <a href="https://vuejs.org" target="_blank" class="text-vue font-weight-bold">Vue</a> guru</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>

<style scoped>
  .text-laravel {
    color: #FB503B;
  }

  .text-vue {
    color: #4DBA87;
  }
</style>
