<template>
  <div>

    <SingleVideo v-if="video" :video="video" />
    <p></p>
    
    <!-- <SingleVideo/> -->
    
    <div id="app"  v-if="this.loggedUserId == this.video.userId">
        <b-button v-on:click="goToDeleteVideo()">Delete Video</b-button>
    </div> 
    <p v-else></p>


    <h2>Comments</h2>
    <Comments v-if="video" :video="video"/>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import SingleVideo from "@/components/SingleVideo";
import Comments from "@/components/Comments";


export default {
  name: "SingleVideoView",
  components: {
    SingleVideo,
    Comments,

},

  computed: {
    ...mapState([
      'video',
      'loggedUserId',
      'token'
      // 'komentari'
    ]),

  },
  methods: {
    ...mapActions([
    'fetchVideoByID',
    'deleteVideo'
    ]),
  
    goToDeleteVideo(){

      console.log(this.video.userId)
      this.deleteVideo(this.$route.params.id)
      // this.$router.push({ name: 'DeleteVideo', params: { id: this.$route.params.id} });
      this.$router.back();
      }

  },

  mounted() {
    this.fetchVideoByID(this.$route.params.id);

  }
}
</script>

<style scoped>

</style>