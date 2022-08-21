<template>
  <div>
    <SingleKanal v-if="kanal" :kanal="kanal" />
    <p></p>
    <h2>Videos on this channel</h2>
    <VideoListByKanal />

 
 
    <div id="app"  v-if="token">
        <b-button v-on:click="goToAddVideo()">Add Video</b-button>
    </div> 
    <p v-else>You must be signed in to add Video</p>
    
    <!-- <Comments /> -->
   </div>   
    
  

 
</template>

<script>
import {mapActions, mapState} from "vuex";
import SingleKanal from "@/components/SingleKanal";
import VideoList from "@/components/VideoList";
import VideoListByKanal from "@/components/VideoListByKanal";
import Comments from "@/components/Comments";


export default {
  name: "SingleKanalView",
  components: {
    SingleKanal,
    VideoList,
    VideoListByKanal,
    Comments
},

  computed: {
    ...mapState([
      'kanal',
      'videos',
      'token'
    ]),
    video: function () {
      if (this.videos){
        return this.videos.filter(a => a.kanalId === this.$route.params.id);
      }
    }
  },
  methods: {
    ...mapActions([
      'fetchKanalByID',
       'fetchVideoByKanalId',
      // 'fetchVideos',

    ]),

      goToAddVideo(){
      this.$router.push({ name: 'AddVideo', params: { id: this.$route.params.id} });
      }

  },

  mounted() {



    this.fetchKanalByID(this.$route.params.id);
    this.fetchVideoByKanalId(this.$route.params.id);
    // this.fetchVideos();
  }
}
</script>

<style scoped>

</style>