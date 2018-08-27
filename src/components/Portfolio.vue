<template>
  <div id="portfolio">
    <section class="bg-primary">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading text-white">I've worked on amazing projects!</h2>
            <hr class="light my-4">
            <p class="text-faded mb-4">Being a web/software developer is exciting. Working with modern and new tools!</p>
            <a @click="viewResume" class="btn btn-light btn-xl js-scroll-trigger" href="https://drive.google.com/file/d/0B85Zig_S7wy2c19Od0lvNHJWdGM/view?usp=sharing" target="_blank">View my resume</a>
          </div>
        </div>
      </div>
    </section>
    <section class="p-0">
      <div class="container-fluid p-0">
        <div class="row no-gutters popup-gallery">
          <project-box
            link="https://peoplewave.co"
            title="Peoplewave"
            category="HR SaaS"
            description="Peoplewave is a SaaS HR Software that offers company performance appraisal and onboarding tool"
            cover="/img/portfolio/peoplewave.png"
            logo="/img/portfolio/peoplewave-logo.png"
            class="col-lg-6 col-sm-12"
          />
          <project-box
            link="https://f45training.com"
            description="Team-based, functional training facility"
            title="F45"
            category="Fitness"
            cover="/img/portfolio/f45.png"
            logo="/img/portfolio/f45-logo.png"
            class="col-lg-6 col-sm-12"
          />
          <project-box
            link=""
            title="Parkiee"
            description="Allows users to rent or lease parking space"
            category="Online marketplace"
            cover="/img/portfolio/parkiee.jpg"
            logo="/img/portfolio/parkiee-logo.png"
            class="col-lg-6 col-sm-12"
          />
          <project-box
            link="https://archipelago.com.au"
            title="Archipelago"
            description="Australian architect landing page"
            category="Wordpress website"
            cover="/img/portfolio/archipelago.png"
            logo="/img/portfolio/archipelago-logo.png"
            class="col-lg-6 col-sm-12"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import ProjectBox from './ProjectBox'

  export default {
    name: 'portfolio',
    components: {
      ProjectBox
    },
    methods: {
      viewResume () {
        this.$ga.event({
          eventCategory: 'resume',
          eventAction: 'click',
          eventLabel: 'View my resume'
        })
      }
    }
  }
</script>
