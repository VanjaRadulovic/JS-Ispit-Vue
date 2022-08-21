import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Kanal from '@/views/Kanal.vue';
import Video from '@/views/Video.vue';
import SingleKanalView from "@/views/SingleKanalView";
import AddVideo from "@/views/AddVideo";
import SingleVideoView from "@/views/SingleVideoView";
import UpdateVideo from "@/views/UpdateVideo";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/kanals',
    name: 'Kanal',
    component: Kanal
  },

  {
    path: '/videos',
    name: 'Video',
    component: Video
  },

  {
    path: '/kanal/:id',
    name: 'SingleKanal',
    component: SingleKanalView
  },

  {
    path: '/addVideo/:id', 
    name: 'AddVideo',
    component: AddVideo
  },

  {
    path: '/video/:id',
    name: 'SingleVideo',
    component: SingleVideoView
  },
  
  {
    path: '/updatevideo',
    name: 'UpdateVideo',
    component: UpdateVideo
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
