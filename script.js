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
    'modalUploadActive': '',
    posts:[],
    formData: new FormData(),
    file: null,
    isVisible: false,
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
    getFile: function(){
      this.file = event.target.files[0]
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
    },
    initToTopButton: function() {
      $(document).bind('scroll', function() {
        var backToTopButton = $('.goTop');
        if ($(document).scrollTop() > 250) {
          backToTopButton.addClass('isVisible');
          this.isVisible = true;
        } else {
          backToTopButton.removeClass('isVisible');
          this.isVisible = false;
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
  }
})
