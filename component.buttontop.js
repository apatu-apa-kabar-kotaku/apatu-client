Vue.component('button-top', {
  template: `
    <button class="goTop animated fadeIn" @click="backToTop">
        <i class="fa fa-angle-up"></i>
    </button>
  `,
  props:['isVisible'],
  data: function() {
    return {

    }
  },
  methods: {
    backToTop: function(){
      this.$emit('backtotop');
    }
  }
})
