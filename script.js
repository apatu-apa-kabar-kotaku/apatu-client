
var app = new Vue({
  el: '#app',
  data: {
    'modalLoginActive': '',
    'modalSignupActive': '',
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
    }
  },
})
