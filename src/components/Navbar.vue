<template>
  <nav class="navbar navbar-expand-sm navbar-light w-100 fixed-top bg-white px-1 py-0 font-weight-bold " id="nav">
        <a class="navbar-brand " href="/">
          <img class="navbar-logo" :src="logo" />
          mini<span class="text-primary">projects</span>
        </a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="collapsibleNavId">
          <ul class="navbar-nav ml-auto px-5 mt-2 mt-lg-0">
            <li :class="' px-2 nav-item ' + get_state('/') ">
              <a class="nav-link" href="/">Home </a>
            </li>
            <li :class="'px-2 nav-item' + get_state('team')">
              <a class="nav-link" href="/team">Team</a>
            </li>
             <li :class="'px-2 nav-item' + get_state('about')">
              <a class="nav-link" href="/about">About</a>
            </li>
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">Action 1</a>
                <a class="dropdown-item" href="#">Action 2</a>
              </div>
            </li> -->
          </ul>
          <!-- <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> -->
        </div>
      </nav>
</template>

<script>
import $ from 'jquery'
import Logo from "../assets/logo_transparent.png"

export default {

    name: 'Navbar',
    data() {
      return {
        logo: Logo
      }
    },
    methods: {
      get_state(link)
      {
        var path = this.$route.path;
        path = path.split("/")
        console.log(path)
        
        if(path[1] == "" && link == '/') return " active "
        else if(path[1] == link) return " active "

      }
    },

    mounted(){

      $(document).ready(function() {
        var nav_ht = $('#nav').height();
        var scroll_top = 0
        $(this).scroll(function() {
          
          scroll_top = $(document).scrollTop();

          if(scroll_top > nav_ht)
          {
            $('#nav').addClass('shadow-sm')
          }
          else
          {
            $('#nav').removeClass('shadow-sm')
          }

        })
      })

    }

}
</script>

<style>

</style>