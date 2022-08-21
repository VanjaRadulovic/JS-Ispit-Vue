<template>
  <div>
       <KanalList />
  </div>

</template>

<script>
  import KanalList from '@/components/KanalList.vue';
  import { mapActions, mapState } from 'vuex';

  export default {
    name: "Kanal",

    components: {
      KanalList
    },

    data() {
        return {
        }
    },
    

    mounted() {
      this.fetchKanals();

    },

    computed: {

    },

    methods: {
      ...mapActions([
          'fetchKanals'
      ])
    }


  }
</script>


<style scoped>


</style>