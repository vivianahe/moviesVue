<script setup></script>
<template>
  <div class="container mt-2 text-center">
    <ul class="nav d-flex justify-evenly  flex-wrap gap-3">
      <li class="nav-item">
        <a
          class="nav-link active text-dark active-option"
          aria-current="page"
          href="#"
          ><b>IN THEATERS</b></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="#"><b>COMING SOON</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="#"><b>CHARTS</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark"><b>TV SERIES</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark"><b>TRAILERS</b></a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-dark"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
        >
          <b>MORE</b>
        </a>
        <ul class="dropdown-menu"></ul>
      </li>
      <li class="nav-item mt-2">
        <button type="button" class="btn btn-warning" style="color: white">
          <i class="bi bi-star-fill"></i> <b>179</b>
        </button>
      </li>
    </ul>
  </div>
</template>
<style>
.nav {
  position: absolute;
  top: 80%;
  left: 9%;
  border-radius: 5px;
  background: #f3f3f3;
  color: black !important;
}
.nav-item {
  margin-right: 45px;
}
.active-option::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: #e6ba03;
  margin-top: 5px;
}
</style>
