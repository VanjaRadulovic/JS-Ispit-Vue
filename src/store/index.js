import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    kanals: [],
    kanal: null,
    komentari: [],
    komentar: null,
    videos: [],
    video: null,
    videoInfo: {
      id: '',
      name: '',
      relesedate: '',
      kanalId: '',
      userId: ''

    },
    loggedUserId: ''

  },

  mutations: {


    setVideoInfo(state, video){
      state.videoInfo.id= video.id,
      state.videoInfo.name= video.name,
      state.videoInfo.relesedate= video.relesedate,
      state.videoInfo.kanalId= video.kanalId,
      state.videoInfo.userId= video.userId

      
    },


    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    setLoggedUserId(state, userId){
      state.loggedUserId = userId;
    },

    addVideo(state, video) {
      state.video = video;
    },


    setKanals(state, kanals) {
      state.kanals = kanals;
    },


    setVideos(state, videos) {
      state.videos = videos;
    },


    setKanalById(state, kanal) {
      state.kanal = kanal;
    },

    setKomentari(state, komentari) {
      state.komentari = komentari;
    },

    setVideoById(state, video) { 
      state.video = video;
    
    },

    setVideoByKanalId(state, kanId) {
      state.video = ''
      state.videos.forEach(video => {
        if (video.kanalId === kanId){
          state.video = video;
        }
      });
     
    },

    addComment(state, obj) {
      const video = state.items.filter( item => item.objectID == obj.videoId )[0];
      if (video) {
        video.comments.push(obj.comment);
      }
    },

    setSelectedVideo(state, video){
      state.video = video;
    }


  },

  actions: {
    register({ commit }, obj) {
      console.log(obj)
      fetch('/api_register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => { 
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              // console.log(tkn.token)
              commit('setToken', tkn.token)
              commit('setLoggedUserId', tkn.userId)
            }
          });
    },

    login({ commit }, obj) {
      fetch('/api_login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => { 
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              // console.log(tkn.token)
              // console.log(tkn.userId)
              commit('setToken', tkn.token)
              commit('setLoggedUserId', tkn.userId)
            }
          });
    },

    deleteVideo({ commit }, id){

      fetch(`/admin/video/${id}`,{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'DELETE'
      })

    },


    fetchKanals({ commit }, obj){
      fetch('/admin/kanal/all',{
        headers: {
            'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
    })
        .then( obj => obj.json() )
        .then( res => commit('setKanals', res));
    },


    fetchVideos({ commit }, obj){
      fetch('/admin/video/all',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setVideos', res));
    },

    fetchVideoByID({ commit }, id){

      fetch(`/admin/video/${id}`,{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setVideoById', res) );
    },

    fetchKanalByID({ commit }, id){

      fetch(`/admin/kanal/${id}`,{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setKanalById', res) );
    },
    fetchVideoByKanalId({ commit }, kanId){
      fetch('/admin/video/all',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setVideos', res));

      commit('setVideoByKanalId', kanId);
    },

    fetchKomentari({ commit }, obj){
      fetch('/admin/komentar/all',{
        headers: {
            'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
    })
        .then( obj => obj.json() )
        .then( res => commit('setKomentari', res));
    },

    addVideo({ commit }, obj){
      fetch('/admin/video/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' ,
          'authorization': `Bearer ${localStorage.token}`
        },
        
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( el => {
            if (el.msg) {
              alert(el.msg, 'error');
            } else {
              //  console.log(tkn.token)
              commit('addVideo', el.token)
            }
          });
  },

  updateVideo({ commit }, obj){
    fetch(`/admin/video/${obj.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' ,
        'authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(obj)
    }).then( res => res.json() )
        .then( el => {
          if (el.msg) {
            alert(el.msg, 'error');
          }
        });
  },

  socket_comment({ commit }, msg) {
    const comment = JSON.parse(msg);
    commit('addComment', { videoId: comment.videoId, comment: comment });
  },

  socket_updateVideo({ commit }, video) {
    const videoNew = JSON.parse(video);
    console.log("radi bre")
    commit('setSelectedVideo', videoNew);
  }

    
  }

})
