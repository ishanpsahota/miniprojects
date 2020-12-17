<template>  
    <div class="row w-100 team py-5 team_wrapper m-0" id="team">
        <div class="col-12">
            <div class="col-12 full-view d-flex flex-column text-center py-5" >
                <div class="sticky-top pt-5 m-auto" >
                    <h1 class="display-1 mt-3"> Team </h1>
                    <div class="typewriter d-none d-md-block" >
                        <h1 class=""> Meet the brains behind this website</h1>
                    </div>
                    <h1 class="d-md-none "> Meet the brains behind this website</h1>
                </div>
            </div>
            <div class="col-11 mx-auto text-center" data-aos="fade-up">
                <kinesis-container event="scroll" class="m-auto">                        
                    <kinesis-element 
                        tag="div"
                        :strength="10"
                        type="rotate"                        
                        axis="x">
                        <div class="card p-0 col-md-3 col-12 col-sm-6 m-auto shadow-lg">
                            <img :src="images.avatar_img" class="card-img" />
                            <div class="card-body text-center">
                                <!-- <avatar username="Ishan Prasad" class="mx-auto" size="100" :src="images.avatar_img" backgroundColor="#0f62fe" /> -->                    
                                <h1 class="font-weight-bold "> Ishan Prasad </h1>
                                <ul class="list-group justify-content-center list-group-flush list-group-horizontal">
                                    <li class="list-group-item border-0 h3 mx-1">
                                        <a href="https://instagram.com/ishanpsahota" class="social-icon">
                                            <i class="bi bi-instagram"> </i> 
                                        </a>                            
                                    </li>   
                                    <li class="list-group-item border-0 h3 mx-1 ">
                                        <a href="https://www.linkedin.com/in/ishan-prasad-b35a91181/" class="social-icon">
                                            <i class="bi bi-linkedin"> </i> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </kinesis-element>
                </kinesis-container>                
            </div>     
        </div>           
    </div>
</template>

<script>

// import Avatar from 'vue-avatar'
import avatar_img from '../assets/images/IMG20191216160031-04-01.jpeg'
import { KinesisContainer, KinesisElement} from 'vue-kinesis'

export default {
    name: 'Teams',
    components: {
        // Avatar
        KinesisContainer,
        KinesisElement
    },
    data() {
        return {
            images: {
                avatar_img: avatar_img
            }
        }
    }
}
</script>

<style>

</style>