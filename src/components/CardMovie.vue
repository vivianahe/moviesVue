<script setup>
defineProps({
  movies: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card zoom-effect mt-2" data-bs-toggle='modal' data-bs-target='#exampleModal' @click="$emit('open-modal', movies.id)">
    <div class="overflow-hidden">
      <img
        :src="'https://image.tmdb.org/t/p/w500' + movies.poster_path"
        class="card-img-top"
        alt="Movie Poster"
      />
    </div>

    <div class="card-body">
      <h5 class="card-title title_size">
        <b>{{ movies.title.toUpperCase() }}</b>
      </h5>
      <p class="d-inline-block text-truncate-custom text_description">
        <b>{{ movies.overview }}</b>
      </p>
      <p class="d-inline-block text-truncate-custom">
        <i class="bi bi-heart-fill iconHeart"> &nbsp;</i>
        <b>{{ movies.vote_average }}</b>
      </p>
    </div>

    <div class="go-corner" href="#">
      <div class="go-arrow">
        <b><i class="bi bi-plus"></i></b>
      </div>
    </div>
  </div>
</template>

<style>
.text-truncate-custom {
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text_description {
  color: #e6ba03;
}
.title_size {
  font-size: 18px;
}
.no-border-radius {
  border-radius: 0 !important; /* Aplica un borde sin redondear */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.go-corner {
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 50px 0 0; /* Altura, Ancho, Bordes inferiores transparentes, Bordes izquierdos transparentes */
  border-color: #e6ba03 transparent transparent transparent; /* Color, Bordes inferiores transparentes, Bordes izquierdos transparentes */
  transform-origin: bottom right; /* Establecer el punto de origen para la rotación */
  transform: rotate(180deg); /* Rotar el triángulo */
  background-color: transparent; /* Fondo transparente */
}

.go-arrow {
  margin-top: -42px;
  margin-left: 5px;
  color: white;
  font-family: courier, sans;
  font-size: 18px;
}
.card {
  /* Otras propiedades de estilo para la tarjeta */
  border-radius: 0 !important; /* Quitalo o establece su valor a 0 */
}
.zoom-effect {
  /* Definir las transformaciones iniciales */
  transform: scale(1);
  /* Escala inicial */
  transition: transform 0.1s ease;
  /* Agregar una transición para suavizar la animación */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Agregar transformaciones en respuesta al hover */
.zoom-effect:hover {
  transform: scale(1.05);
  /* Escala en hover */
}
.card.zoom-effect img {
  border-radius: 0; /* Quitar el border-radius */
}
.iconHeart {
  color: #e7714b; /* Cambia el color aquí */
}
</style>
