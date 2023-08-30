<script setup></script>
<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-8">
        <i class="bi bi-list" style="margin-right: 10px"></i
        ><i class="bi bi-grid-3x3-gap-fill" style="margin-right: 10px"></i>
        <label for="customRange1" class="form-label"><b>IMDb Rating</b></label>
        <input type="range" class="form-range" id="customRange1" />
      </div>

      <div class="col-4">
        <div class="input-group">
          <input
            type="search"
            class="form-control border-0 rounded-0 border-bottom"
            aria-label="Search"
            aria-describedby="search-addon"
            style="background: #f3f3f3;"
          />
          <span
            class="input-group-text bg-transparent border-0"
            id="search-addon"
          >
            <i class="bi bi-search"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.nav {
  color: black !important;
}
.nav-item {
  margin-right: 40px;
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
