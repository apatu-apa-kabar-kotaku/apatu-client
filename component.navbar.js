Vue.component('navbar', {
  template: `
    <nav v-if="isvisible" class="global-nav navbar is-info is-fixed-top animated fadeIn">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
              <img id="title-image" src="Assets/apatu-logo-white copy.png" alt="Apatu! Apa kabar kotaku!" width="80" >
            </a>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">

          </div>

          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                  Section
                </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item">
                    Traffic
                  </a>
                <a class="navbar-item">
                    Natural Disaster
                  </a>
                <a class="navbar-item">
                    Public Facilities
                  </a>
                <a class="navbar-item">
                    Criminalities
                  </a>

              </div>
            </div>

                <div class="navbar-item">
                  <div class="field is-grouped">
                <p class="control" v-if='userid==null'>
                  <a id="login-button" @click="loginButtonClick" class="bd-tw-button button is-info is-inverted">
                      <span>
                        Login
                      </span>
                    </a>
                </p>
                <p class="control"  v-if='userid==null'>
                  <a class="button is-link" @click="signupButtonClick">
                      <span>Sign Up</span>
                    </a>
                </p>
                <p class="control"  v-if='userid!=null'>
                  <a class="button is-link" @click="logOutButtonClick">
                      <span>Log Out</span>
                    </a>
                </p>
                <p class="control"  v-if='userid!=null'>
                  <a class="button is-link" @click="uploadButtonClick">
                      <span>Upload</span>
                    </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  props:['isvisible', 'userid'],
  data: function(){
    return {

    }
  },
  methods: {
    loginButtonClick: function() {
      this.$emit('loginbuttonclick');
    },
    signupButtonClick: function() {
      this.$emit('signupbuttonclick');
    },
    uploadButtonClick: function() {
      this.$emit('uploadbuttonclick');
    },
    logOutButtonClick : function(){
      this.$emit('logoutbuttonclick')
    }
  },
})
