<script setup></script>

<template>
  <header class="header">
    <div class="row">
      <div class="col-2 mt-3 text-center">
        <RouterLink :to="{ name: 'inicio' }" class="navbar-brand">
          <img src="/img/logo.png" alt="" class="" width="50" height="50" />
        </RouterLink>
      </div>
      <div class="col-md-8 mt-3 text-center">
        <RouterLink
          :to="{ name: 'inicio' }"
          class="navbar-brand text-uppercase font-weight-bold mx-3"
          style="color: #e6ba03"
        >
          MOVIES
        </RouterLink>
        <RouterLink
          :to="{ name: 'inicio' }"
          class="navbar-brand text-uppercase font-weight-bold text-white mx-3"
        >
          CELEBS & PHOTOS
        </RouterLink>
        <RouterLink
          :to="{ name: 'inicio' }"
          class="navbar-brand text-uppercase font-weight-bold text-white mx-3"
        >
          COMMUNITY
        </RouterLink>
        <RouterLink
          :to="{ name: 'inicio' }"
          class="navbar-brand text-uppercase font-weight-bold text-white mx-3"
        >
          NEWS
        </RouterLink>
      </div>
      <div class="col-2 mt-3 text-center">
        <RouterLink :to="{ name: 'inicio' }" class="navbar-brand">
          <img
            src="/img/user.jpg"
            alt=""
            class=""
            width="40"
            height="40"
            style="border-radius: 50px"
          />
        </RouterLink>
      </div>
    </div>

    <div class="row" style="margin-top: 10%">
      <div
        class="col-2 text-center text-white"
        style="margin-top: 40px; font-size: 25px"
      >
        <i class="bi bi-three-dots-vertical"></i>
      </div>
      <div class="col-8 text-right text-white">
        <h1><b>THE MARTHIAN</b></h1>
        <p style="word-spacing: 15px">ADVENTURE SCI-FI THRILLER</p>
        <button
          type="button"
          class="btn btn-warning mt-2"
          style="border-radius: 50px"
        >
          Watch Trailer <i class="bi bi-play-circle"></i>
        </button>
        <p class="mt-5">In Theaters</p>
        <p style="color: #e6ba03">15 Oct, 2015 (USA)</p>
      </div>
      <div
        class="col-2 text-center text-white"
        style="margin-top: 40px; font-size: 22px"
      >
        <div class="row">
          <i class="bi bi-arrow-up-circle"></i>
        </div>
        <div class="row">
          <i class="bi bi-arrow-down-circle"></i>
        </div>
      </div>
    </div>
  </header>
</template>
<style>
.header {
  background-image: url("/img/bg2.png");
  background-size: cover;
  background-position: center center; /* Ajusta según sea necesario */
  background-repeat: no-repeat;
  height: 85vh;
  width: 100%;
  overflow-x: hidden;
}
#app{
  background: #f3f3f3;
}
</style>
