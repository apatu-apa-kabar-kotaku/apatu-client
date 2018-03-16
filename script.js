window.onload = function () {
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
      posted:{
        filename: '',
        caption: ''
      },
      posts:[],
      formData: new FormData(),
      file: null,
      navbarIsVisible: false,
    },
    created:function(){
      // localStorage.setItem('userId','5aab6aa2d94dc58a37203172')
      axios.get('http://server.purge-works.com/api/posts')
        .then(response => {
          this.posts = response.data.data.map(val => val).reverse();
          console.log('ini user id :'+this.userId)
        })
      .catch(err => {
        console.log("Error : " + err);
      })
    },
    methods: {
      searchTitle:function(payload){
        axios({
          method: 'post',
          url: 'http://server.purge-works.com/api/posts/search',
          data: {
            keyword: payload
          }
        })
          .then(response => {
            alert(JSON.stringify(response))
            this.posts = response.data.data.map(val => val).reverse();
            console.log('ini user id :'+this.userId)
          })
        .catch(err => {
          console.log("Error : " + err);
        })
      },
      fileSelectHandler: function(event){
        // console.log(`ini file: ${event.target.files[0]}`);
        this.fileDragHover(event);
        this.file =  event.target.files || event.dataTransfer.files;
        console.log(`ini event: ${(this.file[0])} - ${(this.formData)}`);
        console.log(this.file);
        console.log(this.formData);


        this.posted.filename = this.file[0].name;
      },
      fileDragHover: function() {
        event.stopPropagation();
        event.preventDefault();
        event.target.className = (event.type == "dragover" ? "hover" : "");
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
          url : 'http://server.purge-works.com/api/users/signup',
          data:this.objUser
        })
        .then(function (resSignUp) {
          console.log("resLogin",JSON.stringify(resSignUp));
          // this.closeSignupModal();
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      loginUser : function(){
        console.log("login user===",this.userLogin)
        axios({
          method : 'post',
          url : 'http://server.purge-works.com/api/users/signin',
          data:this.userLogin
        })
        .then(function (resSignIn) {
          console.log("resLogin",JSON.stringify(resSignIn));
          localStorage.setItem('token',resSignIn.data.data.token)
          localStorage.setItem('userId',resSignIn.data.data.id)
          location.reload();

        })
        .catch(function (error) {
          console.log(error);
        });
      },
      logOutButtonClick : function (){
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        location.reload();

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
      upload: function() {
        this.formData.set('post', this.file[0])
        this.formData.set('title', this.posted.caption);
        this.formData.set('user_id', this.userId)
        axios({
            method: 'post',
            url: 'http://server.purge-works.com/api/posts/upload',
            data: this.formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
            .then(function (response) {
              // window.location.href="index.html"
              // this.modalUploadActive = ''
              location.reload();
              console.log("masuk")
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });


      },
    },
    mounted: function() {
      this.$nextTick(function() {
        this.initToTopButton();
        this.initNavbarScrolled();
      });

      document.addEventListener('drop', (e) => {
        e.preventDefault();
        this.fileSelectHandler(e);
        console.log('ada drop')
      })
    }
  })
}
