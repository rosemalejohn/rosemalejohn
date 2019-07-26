<template>
  <section id="contact" class="bg-dark text-white">
    <div class="container text-center">
      <h2 class="mb-4">Start a project</h2>
      <p>Interested in working together? That's great! Drop me an email and I will get back to you as soon as possible!</p>
      <a @click="startProject" class="btn btn-light btn-xl sr-button" href="mailto:contact@rosemalejohn.me?Subject=Project proposal">Let's do it!</a>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {
  private startProject(): void {
    Vue.prototype.$ga.event({
      eventCategory: 'email',
      eventAction: 'click',
      eventLabel: 'Start a project',
    });
  }
}
</script>
