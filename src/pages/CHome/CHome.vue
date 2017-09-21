<template>
  <section class="home p-0">

    <c-header></c-header>

    <c-about-us></c-about-us>

    <c-call-to-action title="What you waiting for ?"></c-call-to-action>

    <c-services :services="services"></c-services>

    <c-portfolio :images="images"></c-portfolio>

   <c-footer></c-footer>

  </section>
</template>
<script>
  import CHeader from 'components/CHeader';
  import CFooter from 'components/CFooter';
  import CAboutUs from 'components/CAboutUs';
  import CPortfolio from 'components/CPortfolio';
  import CServices from 'components/CServices';
  import CCallToAction from 'components/CCallToAction';

  export default {

    data () {
      return {
        images: [1, 2, 3, 4, 5, 6],
        services: [
          'CNC',
          'Anodizing',
          'Milling',
          'Emergency Repairs'
        ]
      }
    },

    components: {
      CHeader,
      CFooter,
      CAboutUs,
      CPortfolio,
      CServices,
      CCallToAction
    }

  }
</script>
<style scoped lang="scss">
  .home {

  }
</style>