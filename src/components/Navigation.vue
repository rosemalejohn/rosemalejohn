<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <span @click="navigateTop" class="navbar-brand js-scroll-trigger">RJ</span>
      <button class="navbar-toggler navbar-toggler-right" type="button" @click="toggleMobileNavigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse" :class="{collapse: !this.showMobileMenu}">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="https://github.com/rosemalejohn" target="_blank">Github</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="https://linkedin.com/in/rosemalejohn" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        showMobileMenu: false
      }
    },
    mounted () {
      window.addEventListener('scroll', this.collapseNavbar)

      // close mobile nav menu when link is clicked
      document.querySelectorAll('.nav-item > .nav-link').forEach((menu) => {
        menu.addEventListener('click', this.toggleMobileNavigation)
      })
    },
    methods: {
      /**
       * Navigate page to top
       */
      navigateTop () {
        window.scrollTo(0, 0)
      },
      /**
       * Collapse now if page is not at top
       */
      collapseNavbar () {
        const navbar = document.getElementById('mainNav')

        if (window.pageYOffset > 100) {
          navbar.classList.add("navbar-shrink")
        } else {
          navbar.classList.remove("navbar-shrink")
        }
      },

      /**
       * Toggle hide/show mobile navigation
       */
      toggleMobileNavigation () {
        this.showMobileMenu = !this.showMobileMenu
      }
    }
  }
</script>

<style scoped>
  .navbar-brand {
    cursor: pointer;
  }
</style>
