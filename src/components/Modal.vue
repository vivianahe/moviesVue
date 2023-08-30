<script setup>
defineProps({
  idMovie: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="row">
          <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
            <img
              :src="'https://image.tmdb.org/t/p/w500' + idMovie.poster_path"
              class="card-img-top"
              alt="Movie Poster"
            />
          </div>
          <div
            class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 d-flex justify-content-end flex-column"
          >
            <div class="card card_content standout-card">
              <div>
                <h5 class="card-title text-uppercase">{{ idMovie.title }}</h5>
              </div>
              <div
                class="d-flex justify-content-between aligns-items-center pt-3"
              >
                <p
                  v-if="idMovie.genres && Array.isArray(idMovie.genres)"
                  class="genres"
                ><b>{{ idMovie.genres.map((genre) => genre.name).join(", ") }}</b>
                  
                </p>
                <p class="time_grey">PG-13</p>
                <p class="time_grey">2h 3m</p>
              </div>
              <hr class="line" />
              <div class="d-flex justify-content-evenly aligns-items-center">
                <div>
                  <span class="d-block"
                    ><i class="bi bi-suit-heart-fill heart"></i> &nbsp;
                    6.8</span
                  >
                  <span class="text_span">Routing</span>
                </div>
                <div>
                  <span class="d-block"
                    ><i class="bi bi-hand-thumbs-down-fill thumbs"></i> &nbsp;
                    64
                  </span>
                  <span class="text_span">Score</span>
                </div>
                <div>
                  <span class="d-block text_span"
                    ><i class="bi bi-trophy-fill trophy"></i> &nbsp; 12</span
                  >
                  <span class="text_span">Awdes</span>
                </div>
              </div>
            </div>
            <div class="py-5 px-3">
              <p class="d-inline-block text-truncate-custom">
                {{ idMovie.overview }}
              </p>
              <p class="move_profile">
                Full move profile &nbsp;<i class="bi bi-arrow-right"></i>
              </p>
            </div>
            <div>
              <button class="btn btn_yellow py-4 col-6 text-white">
                <b>Watch Trailer</b> &nbsp; <i class="bi bi-play-fill"></i>
              </button>
              <button class="btn btn_black py-4 col-6" style="color: #e5bc00">
                <b>To Watchlist </b>&nbsp; <i class="bi bi-star-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.text_span {
  font-weight: 500;
}

.line {
  background-color: #00000017 !important;
}

.thumbs {
  color: #6baace !important;
}

.heart {
  color: red !important;
}

.trophy {
  color: #e0c042 !important;
}

.time_grey {
  padding: 0px 10px;
  border-radius: 15px;
  background-color: #f4f4f4;
  font-weight: 500;
}

.card {
  border: transparent !important;
}

.card_content {
  z-index: 100;
}

.row > * {
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.row {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.col-5,
col-7,
col-6 {
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.move_profile {
  color: #afddf7;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
}

.genres {
  color: #afddf7;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
}

.btn_yellow {
  background-color: #e5bc00 !important;
  border-radius: 0 !important;
}

.btn_black {
  background-color: #3f4042 !important;
  border-radius: 0 !important;
}

.standout-card {
  background-color: #fffdff;
  /* Color de fondo de la tarjeta sobresaliente */
  transform: translateY(-20px);
  /* Desplazar hacia arriba para que sobresalga */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Sombra para resaltar */
  z-index: 1;
  /* Asegura que esté por encima de otras tarjetas */
  position: relative;
  /* Establece posición relativa para que el desplazamiento funcione */
}

.text-truncate-custom {
  /* Estilos personalizados para el texto truncado si es necesario */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card_content {
  padding: 10px;
  margin: 0px 38px -10px -38px;
}
/* Agregar esta regla CSS para animar la imagen */
.card-img-top {
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: right center;
    transform: scaleX(0.2);
    opacity: 0.5;
  }
  
  /* Agregar esta regla CSS para aplicar la transformación al abrir el modal */
  .modal.show .modal-dialog.modal-lg .card-img-top {
    transform: scaleX(1);
    opacity: 1;
  }
  
  
  

@media (max-width: 992px) {
  .card_content {
    margin: 0 auto;
  }
}
</style>
