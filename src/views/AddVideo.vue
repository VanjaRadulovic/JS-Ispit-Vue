<template>
  <div id="app"  v-if="this.token">
    <Header subtitle="Add Video"/>

    <b-form @submit="onSubmit">

      <b-form-group label="Video name:" label-for="videoname">
        <b-form-input id="videoname" v-model="form.name" :state="nameState" placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-form-group label="Relesedate:" label-for="relesedate">
        <b-form-input id="relesedate" v-model="form.relesedate" type = "date" placeholder="Enter relesedate" required></b-form-input>
      </b-form-group>



      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        Please fill in all the fields correctly!
      </b-alert>

      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

  </div>

</template>

<script>

import Header from '@/components/Header.vue';
import {mapActions, mapState} from "vuex";


export default {
  name: 'AddVideo',

  components: {
    Header
  },

  props: {
    userObj: Object
  },

  data() {
    return {
      form: {
        name: '',
        relesedate: '',
        kanalId: '',
        userId: '',
      },
      showDismissibleAlert: false
    }
  },

  computed: {
    ...mapState([
      'token',
      'loggedUserId'
    ]),
    nameState() {
      return (this.form.name.length >= 4 && this.form.name.length <= 15)
    },

  },


  methods: {
    ...mapActions([
      'addVideo',
    ]),

    onSubmit(e) {
      console.log(this.loggedUserId)
      console.log(this.$route.params.id)
      e.preventDefault();
      if (this.nameState ){
        this.form.kanalId = this.$route.params.id.toString()
        this.form.userId = this.loggedUserId.toString()
        console.log("hello")

        this.addVideo(this.form);
        this.$router.back();
        // this.$router.push({ name: 'SingleKanalView', params: { id: this.$route.params.id} });
      }
      else
        this.showDismissibleAlert = true
    }
  }
}
</script>

<style scoped>

</style>
