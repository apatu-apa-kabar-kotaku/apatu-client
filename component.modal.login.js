Vue.component('login', {
  template: `
    <div id="modal-login" class="modal animated fadeIn" :class="modalloginactive">
      <div class="modal-background"></div>

      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
          <button class="delete" aria-label="close" @click="closeLoginModal"></button>
        </header>
        <section class="modal-card-body">
          <p>Connect with your social media</p><br>
          <p class="control">
            <div class="fb-login-button" data-max-rows="1" data-size="medium" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false" scope="public_profile,email" onlogin="checkLoginState()"></div>
          </p>
          <hr>

          <p>Login with your email address</p><br>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="text" placeholder="Your email address.." v-model="userlogin.username_email">
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="Your Password" v-model="userlogin.password">
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button @click="loginUser()" class="button">Login</button>

          <button @click="closeLoginModal" class="button">Cancel</button>
        </footer>


      </div>
    </div>
  `,
  props:['userlogin', 'modalloginactive'],
  data: function() {
    return {

    }
  },
  methods: {
    closeLoginModal: function() {
      this.$emit('closeloginmodal');
    },
    loginUser: function() {
      this.$emit('loginuser');
    },
  }
})
