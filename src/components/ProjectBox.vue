<template>
  <div>
    <a class="portfolio-box" :href="link" target="_blank">
      <img class="img-fluid" :src="cover" :alt="title">
      <div class="portfolio-box-caption">
        <div class="portfolio-box-caption-content">
          <div class="project-category text-faded">
            {{ category }}
          </div>
          <div class="project-name font-weight-bold">
            <img class="logo" v-if="logo" :src="logo" />
            <div v-else>{{ title }}</div>
          </div>
          <div class="project-description">
            {{ description }}
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
      description: {
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
      },
      logo: {
        type: String
      }
    }
  }
</script>

<style scoped>
  .logo {
    width: 70px;
  }
</style>
