<template>
  <PageHeader/>
  <PageContent/>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageContent from './components/PageContent.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageContent
  }
}
</script>

<style>
#app {
  margin: 0;
  font-family: Poppins, Helvetica, "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  color: #181C32;
  line-height: 1.6;
  font-size: 14px;
}

.container {
  display: block;
  max-width: 100% !important;
}

/* Mobile */
@media only screen and (max-width: 767px) {
  .container {
    width: auto !important;
    margin-left: 1em !important;
    margin-right: 1em !important;
  }
}

/* Tablet */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .container {
    width: 723px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}

/* Small Monitor */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .container {
    width: 933px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}

/* Large Monitor */
@media only screen and (min-width: 1200px) {
  .container {
    width: 1127px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
</style>
