<template>
 <div>

    <b-table
      id="image-table"
      hover
      fixed
      :items="videos"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="videos.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

 </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: "VideoList",

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
      ])
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