
<template>
  <div class="container-fluid p-0 m-0 bg-white">
    <div id="app" class="row w-100 m-0 p-0">
      <Navbar />      
      <router-view /> 
      <Footer />
    </div>
  </div>
</template>

<script>

import "./assets/style.css";
import "aos/dist/aos.css";
import Aos from "aos";
Aos.init();

import Footer from './components/Footer'
import Navbar from "./components/Navbar"

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">

</style>
