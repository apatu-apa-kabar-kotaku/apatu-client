
var app = new Vue({
  el: '#app',
  data: {
    'modalLoginActive': '',
    'modalSignupActive': '',
    jwtToken : localStorage.getItem('token'),
    'modalUploadActive': '',

  },
  methods: {
    loginButtonClick: function(){
      this.modalLoginActive = 'is-active';
    },
    closeLoginModal: function(){
      this.modalLoginActive = '';
    },
    signupButtonClick: function(){
      this.modalLoginActive = 'is-active';
    },
    closeSignupModal: function(){
      this.modalLoginActive = '';
    },
    uploadButtonClik: function(){
      this.modalUploadActive = 'is-active';
    },
    closeUploadModal: function(){
      this.modalUploadActive = '';
    }
  },
})
