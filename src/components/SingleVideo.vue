<template>
  <div class="d-flex justify-content-center">
    <div class="row text-center">
      <b-card
          :title="video.name"
          :img-src= 'getUrl()'
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 300rem;"
          class="mb-2"
      >
        <b-card-text>
          <p>relesedate: {{video.relesedate}}</p>
        </b-card-text>

        <div id="app"  v-if="this.loggedUserId == this.video.userId">
        <b-button v-on:click="goToEdit()" pill>Update your Video</b-button>
        </div> 
        <p v-else></p>
        
      </b-card>
    </div>
  </div>

</template>

<script>

import {mapActions, mapState, mapMutations} from "vuex";


export default {
  name: "SingleVideo",


  props: {
    video: Object
  },

  computed: {
    ...mapState([
      'videoInfo',
      'loggedUserId'
    ])
  },


  methods: {

     ...mapMutations([
        "setVideoInfo"
    ]),

    getUrl(){
      return `https://i.ytimg.com/an_webp/iyVbLkf2P7Q/mqdefault_6s.webp?du=3000&sqp=CPS1_5cG&rs=AOn4CLDKcs8XqoBCwNJ0suCIISA7n3wokg`
    },

    goToEdit(record, index) {
      
      // console.log(this.loggedUserId)
      //  console.log(this.video.userId)

      if (this.loggedUserId == this.video.userId){
        this.setVideoInfo({
          id: this.video.id,
          name: this.video.name,
          relesedate: this.video.relesedate,
          kanalId: this.video.kanalId,
          userId: this.video.userId,
        })
        this.$router.push({ name: 'UpdateVideo'});
      }
      else{
        alert("error")
      }
    }


  }

}

</script>

<style scoped>

</style>