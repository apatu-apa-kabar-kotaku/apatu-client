Vue.component('hero', {
  template:`
  <section class="hero is-primary">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar is-info">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="Assets/apatu-logo-white copy.png" alt="Apatu! Apa kabar kotaku!" >
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    Section
                  </a>
                <div id='dropdown-hero' class="navbar-dropdown is-boxed">
                  <a id='dropdown-item-hero' class="navbar-item">
                      Traffic
                    </a>
                  <a id='dropdown-item-hero' class="navbar-item">
                      Natural Disaster
                    </a>
                  <a id='dropdown-item-hero' class="navbar-item">
                      Public Facilities
                    </a>
                  <a id='dropdown-item-hero' class="navbar-item">
                      Criminalities
                    </a>

                </div>
              </div>
              <div class="navbar-item">
                <div class="field is-grouped">

              <p class="control" v-if="userid==null">
                <a id="login-button" @click="loginButtonClick" class="bd-tw-button button is-info is-inverted">
                    <span>
                      Login
                    </span>
                  </a>
              </p>
              <p class="control" v-if="userid==null">
                <a class="button is-link" @click="signupButtonClick">
                    <span>Sign Up</span>
                  </a>
              </p>
              <p class="control"  v-if='userid!=null'>
                  <a class="button is-link" @click="logOutButtonClick">
                      <span>Log Out</span>
                    </a>
                </p>
              <p class="control" v-if="userid!=null">
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
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-mobile is-centered">
          <div class="column is-half is-narrow">
            <div class="title">
              <p>Apa Kabar Kotaku?</p>
            </div>
            <div class="subtitle">
              <p>Share Report About Your City</p>
            </div>
            <div class="field has-addons">
              <div class="control is-expanded">
                <input class="input" type="text" placeholder="Find a repository">
              </div>
              <div class="control">
                <a class="button is-info">
                  Search
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
     <nav class="tabs is-boxed is-fullwidth">
       <div class="container">
         <ul>
           <li class="is-active">
             <a>Hot</a>
           </li>
           <li>
             <a>Trending</a>
           </li>
           <li>
             <a>Fresh</a>
           </li>

         </ul>
       </div>
     </nav>
    </div>
    </section>
  `,
  props:['userid'],
  data: function() {
    return {

    }
  },
  methods:{
    uploadButtonClick: function(){
      this.$emit('uploadbuttonclick');
    },
    signupButtonClick:function(){
      this.$emit('signupbuttonclick');
    },
    loginButtonClick: function(){
      this.$emit('loginbuttonclick');
    },
    logOutButtonClick : function(){
      this.$emit('logoutbuttonclick')
    }
  }
})
