<template>
  <div id="app"  v-if="this.token">
    <Header subtitle="Update Video"/>

    <b-form @submit="onSubmit">

      <b-form-group label="Video name:" label-for="videoname">
        <b-form-input id="videoname"  v-model="form.name" :state="nameState"  placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-form-group label="Relesedate:" label-for="relesedate">
        <b-form-input id="relesedate" v-model="form.relesedate" placeholder="Enter relesedate" required></b-form-input>
      </b-form-group>

      <br>
      <b-button type="submit" variant="primary">Update</b-button>
    </b-form>
  </div>
  <p v-else>You must be signed in to update your video</p>
</template>

<script>

import Header from '@/components/Header.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UpdateVideo',

  components: {
    Header
  },

  props: {
    userObj: Object
  },

  data() {
    return {
      form: {
        id: '',
        name: '',
        relesedate: '',
        kanalId: '',
        userId: ''
      }
    }
  },


  computed: {
    ...mapState([
      'token',
      'videoInfo',
      'loggedUserId'
    ]),
    nameState() {
      return (this.form.name.length >= 4 && this.form.name.length <=15)
    },

  },

  mounted() {
    this.form.id = this.videoInfo.id.toString(),
    this.form.name = this.videoInfo.name,
    this.form.relesedate= this.videoInfo.relesedate,
    this.form.kanalId= this.videoInfo.kanalId.toString(),
    this.form.userId= this.videoInfo.userId.toString()

  },

  methods: {
    ...mapActions([
      'updateVideo'
    ]),

    onSubmit(e) {
      e.preventDefault();
      if (this.nameState){
        // this.form.kanalId = this.$route.params.id.toString()
        // this.form.userId = this.loggedUserId.toString()
        // this.updateVideo(this.form);
        console.log(this.form)
        this.$socket.emit('updateVideo', { body: this.form, token: this.token });
        this.$router.back();
      }
      else
        this.showDismissibleAlert = true
    }
  }
}
</script>

<style scoped>

</style>
