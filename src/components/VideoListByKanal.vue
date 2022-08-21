<template>
 <div>

    <b-table
      id="image-table"
      hover
      fixed
      :items="filteredVideos"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="filteredVideos.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

 </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: "VideoListByKanal",

    data() {
      return {
        fields: ['name', 'relesedate'],
        items: [],
        currentPage: 1,
        perPage: 10,

      }
    },

    mounted() {
    },

    computed: {
      ...mapState([
        'videos'
      ]),
        filteredVideos: function () {
        let sb = []

        return this.videos.filter(video =>video.kanalId == this.$route.params.id);
      }
    },

    methods: {
 

      rowClicked(record, index) {
        this.$router.push({ name: 'SingleVideo', params: { id: record.id} });
      }
    }


  }
</script>


<style scoped>


</style>