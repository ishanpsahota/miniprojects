<template>
  <div class="home row w-100 m-0 p-0">
    <!-- hero container -->
    <div class="row w-100 m-0 py-5 px-2 d-flex flex-column-reverse flex-md-row full-view">
      <div class="col-md-6 col-12 p-5  text-center text-md-left my-auto">
        <h1 class="display-1 d-none d-md-block font-weight-bold">find your next <br> <span class="text-primary">miniproject</span> here</h1>
        <h1 class="display-4 d-md-none font-weight-bold">find your <br> <span class="text-primary">project</span> here</h1>
        <a href="/#search">
          <button class="btn badge-pill btn-primary font-weight-bold btn-lg px-5 my-3" type="button" > Get Started </button>
        </a>
      </div>
      <div class="col-md-6 col-12 d-flex my-auto landing_page_logo">
        <kinesis-container class="m-auto">              
          <kinesis-element :strength="10">
            <img :src="logo" class="m-auto" />
          </kinesis-element>                      
        </kinesis-container>        
      </div>
    </div>
    <!-- hero container end -->
    <!-- about -->
    <div class="row w-100 m-0 p-0 py-5 about_container full-view" id="about">
      <div class="col-12 m-auto text-center">
        <h1 class="mx-auto display-1 font-weight-bold"> who are we? </h1>
        <p class="h1"> A bunch of programmers &amp; developers trying their best to help ease your search ;) </p>
        <div class="illus_about">
          <img :src="illustrations.about" class="" />
        </div>
      </div>
    </div>
    <!-- about -->
    <!-- search -->
    <div class="row w-100 m-0 search_container p-0 full-view" id="search">
      <div class=" col-12 text-center py-5 m-auto">
        <h1 class="display-1 d-none d-md-block ">what do we provide?</h1>
        <h1 class="display-4 font-weight-bold d-md-none ">what do we provide?</h1>
        <p class=" h2"> some mini projects for the enthusiast in you. <br> <span class="font-weight-bold"> We got you. </span> </p>
        <div class="col-md-8 col-11 mx-auto my-5">
          <form @submit.prevent="get_items()">            
            <div class="form-group">              
              <div class="input-group">
                <input class="form-control form-control-lg" v-model="search" type="text" placeholder="Enter Search Term">
                <div class="input-group-append">
                  <button class="btn input-group-text " @click="clear_results()"> <i class="bi bi-x-circle-fill"></i> </button>
                </div>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-lg btn-primary mx-1" v-for="(type, i) in search_types" :key="i" @click="search_type = type.type"> {{type.label}} <span v-html="type.icon"> </span> </button>
            </div>
          </form>
        </div>
        <div class="col-md-8 col-md-10 mx-auto">
          <div class="col-md-8 col-10 text-md-left text-center animate__animated animate__fadeIn" v-if="search && search_type">
              <p class="h4"> Showing results for <kbd> {{search_type}}</kbd> "{{search}}" </p>
          </div>
          <div v-if="loading" class="spinner-border text-primary"> </div>
          <div v-if="results !== null || results !== ''" class="row w-100 m-0 p-1">            
            <div v-if="search_type == 'user'" class="card shadow-sm">
              <UserCard :results=results />
            </div>
            <div v-if="search_type == 'repos'" class="row w-100 justify-content-center">                            
              <div v-if="results.items.length < 1" class="col-12 text-center">              
                <h3> It seems empty here. Try searching with a different term. </h3>
              </div>  
              <div v-for="(item, i) in results.items" :key="i" class="card col-md-5 col-10 shadow-sm m-1">
                <RepoCard :item=item />
              </div>
            </div>
          </div>           
          <div class="alert alert-danger" v-if="error" role="alert">
            <strong>Error!</strong> Error finding results
          </div>
        </div>
      </div> 
    </div>
    <!-- search end -->    
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/assets/logo_transparent.png'
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import api from '../api/index'
import AboutIllustration from '../assets/illus/company.png'

import UserCard from '../components/UserCard'
import RepoCard from '../components/RepoCard'


export default {
  name: "Home",
  components: {
    KinesisContainer, 
    KinesisElement,
    UserCard,
    RepoCard
  },
  data() {
    return {
      logo: Logo,
      illustrations: {
        about: AboutIllustration
      },
      loading: null,
      search: null,
      search_type: null,
      search_types: [
        {
          type: 'user',
          icon: '<i class="bi bi-person"></i>',
          label: 'User'
        },
        {
          type: 'repos',
          icon: '<i class="bi bi-file-plus"></i>',
          label: 'Repository'
        }
      ],
      results: [],
      error: null
    }
  },
  methods: {

    clear_results()
    {
      this.search = null
      this.results = null
    },

    get_items() {

      if(!this.search || this.search == '') return
      else
      { 
        this.loading = true           
        api.get_items(this.search, this.search_type)
        .then(res => {
          this.loading = false
          if(res.data) {
            console.log(res.data)
            this.results = res.data
          }
          else
          {
            this.results = null
            this.error = null
          }
          // console.log(res)
        }).catch(err => {
          this.loading = false
          this.error = err 
          this.results = null         
          // console.log(err)
        })
      }

    }

  }
};
</script>
