Vue.component('upload', {
  template: `
    <div id="modal-upload" class="modal animated fadeIn" :class="modaluploadactive">
      <div class="modal-background"></div>
      <div class="modal-card">

        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
          <button class="delete" aria-label="close" @click="closeUploadModal"></button>
        </header>

        <section class="modal-card-body">
          <div>
          <label for="fileselect">Files to upload:</label>
          <input @change="fileSelectHandler" type="file" id="fileselect" name="fileselect[]" multiple="multiple" />
          <div id="filedrag" @dragover="fileDragHover" @dragleave="fileDragHover" >or drop files here</div>
        </div>

        <!-- <div id="submitbutton">
          <button type="submit">Upload Files</button>
        </div> -->

        <div id="messages">
        <p>Status Messages</p>
        </div>


        </section>
        <footer class="modal-card-foot">
          <button @click="closeUploadModal" class="button is-info">Submit</button>

          <button @click="closeUploadModal" class="button is-danger">Cancel</button>
        </footer>

      </div>
    </div>
  `,
  props:['modaluploadactive'],
  methods:
  {
    closeUploadModal: function() {
      this.$emit('closeuploadmodal');
    },

  }
})
