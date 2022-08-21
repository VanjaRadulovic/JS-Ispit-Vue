<template>
  <div>
       <VideoList />
  </div>

</template>

<script>
  import VideoList from '@/components/VideoList.vue';
  import { mapActions, mapState } from 'vuex';

  export default {
    name: "Video",

    components: {
      VideoList
    },

    data() {
        return {
        }
    },


    mounted() {

      this.fetchVideos();


    },

    computed: {
    },

    methods: {
      ...mapActions([
          'fetchVideos'
      ])
    }


  }
</script>


<style scoped>


</style>