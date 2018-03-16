Vue.component('post', {
  template:`
    <div class="card">
      <div class="card-image">
        <figure>
          <img  class=" fit-image image-post" :src="post.image" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h4>{{post.title}}</h4>
          <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
        <button class="button is-outlined">
            <span class="icon">
                <i class="fas fa-arrow-alt-circle-up fa-lg"></i>
            </span>
        </button>
        <button class="button is-outlined">
            <span class="icon">
                <i class="fas fa-arrow-alt-circle-down fa-lg"></i>
            </span>
        </button>
        <button class="button is-outlined">
            <span class="icon">
                <i class="fas fa-comment-alt fa-lg"></i>
            </span>
        </button>
        <button class="button is-outlined">
            <span class="icon">
                <i class="fas fa-share-alt-square fa-lg"></i>
            </span>
        </button>
      </div>
    </div>
  `,
  props:['post'],
  data: function() {
    return {

    }
  },
  methods:{

  },
});
