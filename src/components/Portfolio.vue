<template>
  <section class="p-0" id="portfolio">
    <div class="container-fluid p-0">
      <div class="row no-gutters popup-gallery">
        <project-box
          link="https://peoplewave.co"
          title="Peoplewave"
          category="HR SaaS"
          cover="/img/portfolio/peoplewave.png"
          class="col-lg-4 col-sm-12"
        />
        <project-box
          link="https://f45training.com"
          title="F45"
          category="Fitness"
          cover="/img/portfolio/f45.png"
          class="col-lg-4 col-sm-12"
        />
        <project-box
          link=""
          title="Parkiee"
          category="Online marketplace"
          cover="/img/portfolio/parkiee.jpg"
          class="col-lg-4 col-sm-12"
        />
      </div>
    </div>
  </section>
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
