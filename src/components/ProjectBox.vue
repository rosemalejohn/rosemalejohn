<template>
  <div>
    <a class="portfolio-box" :href="link" target="_blank">
      <img class="img-fluid" :src="cover" :alt="title">
      <div class="portfolio-box-caption">
        <div class="portfolio-box-caption-content">
          <div class="project-category text-faded">
            {{ category }}
          </div>
          <div class="project-name">
            {{ title }}
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      category: {
        type: String
      },
      link: {
        type: String
      },
      cover: {
        type: String
      }
    }
  }
</script>
