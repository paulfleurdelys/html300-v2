<template>
 <!-- Carousel component with 3 images, tooltips on the images -->

          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="../assets/bar-984527_960_720.jpg" alt="bar"  data-toggle="tooltip" data-placement="top" title="Our Bar">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="../assets/wine-bottles-3623697_960_720.jpg" alt="Wine rack" data-toggle="tooltip" data-placement="top" title="Our Wine Room">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="../assets/coffee-918926_960_720.jpg" alt="Pour over coffee" data-toggle="tooltip" data-placement="top" title="Our Coffeeshop">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {}
}
</script>