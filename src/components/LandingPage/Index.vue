<script>
  export default {
    data() {
      return {
        data_images: [
          {
            id: 1,
            logo_name: "AC MILLAN",
            logo_file: "bola.jpg",
            palyed: 8,
            scores: 4,
            lose: 0,
            rating: 5,
          },
          {
            id: 2,
            logo_name: "AREMA",
            logo_file: "arema.png",
            palyed: 6,
            scores: 2,
            lose: 2,
            rating: 3,
          },
          {
            id: 3,
            logo_name: "REAL MADRID",
            logo_file: "real.png",
            palyed: 6,
            scores: 2,
            lose: 2,
            rating: 3,
          },
          {
            id: 4,
            logo_name: "BRAZIL",
            logo_file: "brazil.png",
            palyed: 6,
            scores: 2,
            lose: 2,
            rating: 3,
          },
          {
            id: 5,
            logo_name: "CELSEA",
            logo_file: "celsea.jpg",
            palyed: 6,
            scores: 2,
            lose: 2,
            rating: 3,
          },
          {
            id: 6,
            logo_name: "ARSENAL",
            logo_file: "arsenal.jpg",
            palyed: 6,
            scores: 2,
            lose: 2,
            rating: 3,
          },
         
        ],
      };
    },
  };
</script>
<template>
  <div>
    <div class="row row-cols-1 row-cols-md-5 g-4">
      <div v-for="data_images in data_images" class="col">
        <a class="btn btn-link btn-block">
          <router-link :to="'/detail/' + data_images.id">
            <div class="col">
              <div class="card h-100">
                <div class="card-body">
                  <img
                    :src="'/src/assets/logo_bola/' + data_images.logo_file"
                    class="card-img-top"
                    alt="404"
                  />
                </div>
                <h5 id="text__decotation" class="text-center">
                  {{ data_images.logo_name }}
                </h5>
              </div>
            </div>
          </router-link>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  img {
    width: 100px;
    height: 150px;
  }
</style>
