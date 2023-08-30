<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Filters from "./components/Filters.vue";
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
</script>

<template>
  <Header />
  <Nav/>
  <Filters />
  <main class="container">
    <RouterView />
  </main>
  <Footer />
</template>
