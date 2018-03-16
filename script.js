
var app = new Vue({
  el: '#app',
  data: {
    'modalLoginActive': '',
    'modalSignupActive': '',
    jwtToken : localStorage.getItem('token'),
    userId : localStorage.getItem('userId'),
    'modalUploadActive': '',
    objUser:{
      username :'',
      email : '',
      password: '',
      phone_number: '',
      name : '',
      gender : '',
      picture:'',
    },
    userLogin : {
      username_email:'',
      password : '',
    }
  },
  methods: {
    loginButtonClick: function(){
      this.modalLoginActive = 'is-active';
    },
    closeLoginModal: function(){
      this.modalLoginActive = '';
    },
    signupButtonClick: function(){
      this.modalSignupActive = 'is-active';
    },
    closeSignupModal: function(){
      this.modalSignupActive = '';
    },
    uploadButtonClik: function(){
      this.modalUploadActive = 'is-active';
    },
    closeUploadModal: function(){
      this.modalUploadActive = '';
    },
    createUser : function(){
      console.log("ini form input===",this.objUser)
      // alert(this.objUser)
      axios({
        method : 'post',
        url : 'http://localhost:3000/api/users/signup',
        data:this.objUser
      })
      .then(function (resSignUp) {
        console.log("resLogin",JSON.stringify(resSignUp));
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    loginUser : function(){
      console.log("login user===",this.userLogin)
      axios({
        method : 'post',
        url : 'http://localhost:3000/api/users/signin',
        data:this.userLogin
      })
      .then(function (resSignIn) {
        console.log("resLogin",JSON.stringify(resSignIn));
        localStorage.setItem('token',resSignIn.data.data.token)
        localStorage.setItem('userId',resSignIn.data.data.id)
        
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
})
