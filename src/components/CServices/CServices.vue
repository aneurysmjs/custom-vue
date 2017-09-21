<template>
  <section id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Services</h2>
          <hr class="primary">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 text-center" v-for="service in services">
          <div class="service-box">
            <i class="fa fa-4x fa-diamond text-primary sr-icons"></i>
            <h3>{{ service }}</h3>
            <!--<p class="text-muted">Amazing colors</p>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    props: ['services']
  }
</script>
<style scoped lang="scss">
  .cservices {

  }
</style>