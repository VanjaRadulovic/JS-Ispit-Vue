<template>
 <div>

    <b-table
      id="image-table"
      hover
      fixed
      :items="kanals"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="kanals.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: "KanalList",

    data() {
      return {
        fields: ['name', 'subs'],
        items: [],
        currentPage: 1,
        perPage: 10
      }
    },

    mounted() {
    },

    computed: {
      ...mapState([
        'kanals'
      ])
    },

    methods: {

      ...mapActions([

        // 'fetchKomentari'
      ]),
      rowClicked(record, index) {
        this.$router.push({ name: 'SingleKanal', params: { id: record.id} });
      }

    }


  }
</script>


<style scoped>


</style>