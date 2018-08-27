<template>
  <section id="contact" class="bg-dark text-white">
    <div class="container text-center">
      <h2 class="mb-4">Start a project</h2>
      <p>Interested in working together? That's great! Drop me an email and I will get back to you as soon as possible!</p>
      <a @click="startProject" class="btn btn-light btn-xl sr-button" href="mailto:rosemalejohn@gmail.com?Subject=Project proposal">Let's do it!</a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'contact',

    methods: {
      startProject () {
        this.$ga.event({
          eventCategory: 'email',
          eventAction: 'click',
          eventLabel: 'Start a project'
        })
      }
    }
  }
</script>
