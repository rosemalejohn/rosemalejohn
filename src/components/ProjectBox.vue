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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProjectBox extends Vue {
  @Prop() private title!: string;
  @Prop() private description!: string;
  @Prop() private category!: string;
  @Prop() private link!: string;
  @Prop() private cover!: string;
  @Prop() private logo!: string;
}
</script>

<style scoped>
  .logo {
    width: 70px;
  }
</style>
