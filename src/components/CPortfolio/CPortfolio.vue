<template>
  <section class="p-0" id="portfolio">
    <div class="container-fluid">
      <div class="row no-gutter popup-gallery">
        <div class="col-lg-4 col-sm-6" v-for="img in images">
          <a class="portfolio-box" :href="'assets/img/portfolio/fullsize/' + img + '-fullsize.jpg'">
            <img class="img-fluid" :src="'assets/img/portfolio/thumbnails/' + img + '-thumbnail.jpg'">
            <div class="portfolio-box-caption">
              <div class="portfolio-box-caption-content">
                <div class="project-category text-faded">
                  Category
                </div>
                <div class="project-name">
                  Project Name
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    props: ['images']
  }
</script>