<template>
  <div id="portfolio">
    <section class="bg-primary">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading text-white">I've worked on amazing projects!</h2>
            <hr class="light my-4">
            <p class="text-faded mb-4">Being a web/software developer is exciting. Working with modern and new tools!</p>
            <a class="btn btn-light btn-xl js-scroll-trigger" href="/files/RESUME.pdf" target="_blank">View my resume</a>
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
            class="col-lg-4 col-sm-12"
          />
          <project-box
            link="https://f45training.com"
            description="Team-based, functional training facility"
            title="F45"
            category="Fitness"
            cover="/img/portfolio/f45.png"
            class="col-lg-4 col-sm-12"
          />
          <project-box
            link=""
            title="Parkiee"
            description="Allows users to rent or lease parking space"
            category="Online marketplace"
            cover="/img/portfolio/parkiee.jpg"
            class="col-lg-4 col-sm-12"
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
    }
  }
</script>
