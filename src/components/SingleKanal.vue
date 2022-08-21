<template>
  <div class="d-flex justify-content-center">
    <div class="row text-center">
      <b-card
          :title="kanal.name"
          :img-src= 'getUrl()'
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 300rem;"
          class="mb-2"
      >

        <b-card-text>
          <p>subs: {{kanal.subs}}</p>
        </b-card-text>
      </b-card>
    </div>
  </div>

</template>

<script>


export default {
  name: "SingleKanal",


  props: {
    kanal: Object
  },
  methods: {
    getUrl(){
      return 'https://cdn.sanity.io/images/7g6d2cj1/production/1999eaa4a8095bb8f2284e8710aefe97a978b223-1092x283.jpg?h=283&q=70&auto=format'
    }
  }

}

</script>

<style scoped>

</style>