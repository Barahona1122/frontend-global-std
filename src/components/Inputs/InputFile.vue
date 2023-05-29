<template>
  <div
    class="dropzone-container p-3 border"
    @dragover="dragover"
    @dragleave="dragleave"
    @drop="drop"
  >
    <div class="bg-white color-white">
      <input
        type="file"
        multiple
        name="file"
        id="fileInput"
        class="hidden-input"
        @change="onChange"
        ref="file"
        accept=".pdf,.jpg,.jpeg,.png"
      />
    </div>
  </div> 
</template>
<script>
  export default {
    inheritAttrs: false,
    name: "base-input",
    props: {
      label: {
        type: String,
        description: "Input label"
      },
      value: {
        type: [String, Number],
        description: "Input value"
      },
      addonRightIcon: {
        type: String,
        description: "Input icon on the right"
      },
      addonLeftIcon: {
        type: String,
        description: "Input icon on the left"
      },
    },
    model: {
      prop: 'value',
      event: 'input'
    },
    data() {
      return {
        focused: false
      }
    },
    methods: {
      onChange() {
            this.files = [...this.$refs.file.files];
          },
      dragover(e) {
        e.preventDefault();
        this.isDragging = true;
      },
      dragleave() {
        this.isDragging = false;
      },
      drop(e) {
        e.preventDefault();
        this.$refs.file.files = e.dataTransfer.files;
        this.onChange();
        this.isDragging = false;
      },
    }
  }
</script>
<style>

</style>
