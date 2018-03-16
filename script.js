// $(document).ready(function(){
//  var scrollTop = 0;
//  $(window).scroll(function(){
//   scrollTop = $(window).scrollTop();
//
//   if (scrollTop >= 100) {
//    $('#global-nav').show();
//
//   } else if (scrollTop < 100) {
//    $('#global-nav').hide();
//   }
//
//  });
//
// });

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
    },
    posts:[],
    formData: new FormData(),
    file: null,
    navbarIsVisible: false,
  },
  created:function(){
    axios.get('http://localhost:3000/api/posts')
      .then(response => {
        this.posts = response.data.data.map(val => val);
      })
    .catch(err => {
      console.log("Error : " + err);
    })
  },
  methods: {
    fileSelectHandler: function(event){
      console.log(`ini event: ${JSON.stringify(event)}`);
      console.log(`ini file: ${event.target.files[0]}`);
      this.fileDragHover(event);
      this.file = event.target.files[0] || event.dataTransfer.files[0];
      console.log(this.file);
    },
    fileDragHover: function() {
      event.stopPropagation();
      event.preventDefault();
      console.log('drag hover')
      event.target.className = (event.type == "dragover" ? "hover" : "");
    },
    upload: function() {
     this.formData.set('avatar', this.file)
     axios.post('/upload-gcs', this.formData)
      .then()
      .catch()
    },
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
    uploadButtonClick: function(){
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
    },
    initToTopButton: function() {
      $(document).bind('scroll', function() {
        var backToTopButton = $('.goTop');
        if ($(document).scrollTop() > 250) {
          backToTopButton.addClass('isVisible');
        } else {
          backToTopButton.removeClass('isVisible');
        }
      }.bind(this));
    },
    backToTop: function() {
      $('html,body').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
    },
    initNavbarScrolled: function() {
      $(document).bind('scroll', function() {
        var navbar = $('.global-nav');
        if ($(document).scrollTop() > 100) {
          this.navbarIsVisible = true;
        } else {
          this.navbarIsVisible = false;
        }
      }.bind(this));
    },
  },
  mounted: function() {
    this.$nextTick(function() {
      this.initToTopButton();
      this.initNavbarScrolled();
    });

    document.addEventListener('drop', (e) => {
      e.preventDefault()
      console.log('ada drop')
    })
  }
})
