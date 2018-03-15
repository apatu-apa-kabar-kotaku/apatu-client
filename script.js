var app = new Vue({
  el: '#app',
  data: {
    'modalLoginActive': '',
    'modalSignupActive': '',
    jwtToken : localStorage.getItem('token'),
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
    // checkToken: function(){
    //   alert(this.jwtToken)
    // },
    // checkJwt : function(){
    //   axios.get('http://localhost:3000/api/users/testjwt', {
    //     headers:{
    //       token:this.jwtToken
    //     }
    //   })
    //   .then(function (resJwt) {
    //     console.log("resJwt",JSON.stringify(resJwt));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // }
  },
})
