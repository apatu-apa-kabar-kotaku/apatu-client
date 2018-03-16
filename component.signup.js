Vue.component ('signup',{
  template : `
  <div id="modal-signup" class="modal animated fadeIn" :class="modalsignupactive">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Sign Up</p>
          <button class="delete" aria-label="close" @click="closeSignupModal"></button>
        </header>
        <section class="modal-card-body">
          <p>Connect with your social media</p><br>
          <p class="control">
            <a class="button is-link" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
                <span>Facebook</span>
              </a>
          </p>
          <hr>

          <p>Create New Account with your email address</p><br>
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input class="input" type="text" placeholder="Your username.." name="username" v-model="objuser.username">
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="text" placeholder="Your email address.." name="email" v-model="objuser.email">
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="Your Password" name="password" v-model="objuser.password">
            </div>
          </div>

          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Your name.." name="name" v-model="objuser.name">
            </div>
          </div>
    
          <div class="field">
            <label class="label">Gender</label>
            <div class="control">
              <div class="select">
                <select v-model="objuser.gender">
                  <option disabled value="">Please select one</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
    
          <div class="field">
            <label class="label">Phone Number</label>
            <div class="control">
              <input class="input" type="text" placeholder="Your phone number.." name="phone_number" v-model="objuser.phone_number">
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button @click="createUser" class="button">Sign Up</button>

          <button @click="closeSignupModal" class="button">Cancel</button>
        </footer>

      </div>
    </div>
  `,
  props:['objuser','userid','jwttoken','modalsignupactive'],
  methods:{
    closeSignupModal : function(){
      this.$emit('closesignupmodal')
    },
    createUser : function (){
      this.$emit('createuser')
    },
    closeSignupModal : function(){
      this.$emit('closesignupmodal')
    }
  }
})