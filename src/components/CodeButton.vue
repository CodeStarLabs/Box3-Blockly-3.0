<script setup>
import { ref } from 'vue'

const opened = ref(false)

function changeEditor() {
  opened.value = !opened.value
  document.querySelector('#monaco-editor').style.display = opened.value ? 'block' : 'none'
}

window.addEventListener('resize', function (ev) {
  if (window.innerWidth > 620) {
    opened.value = false
    document.querySelector('#monaco-editor').style.display = null
  }
})
</script>
<template>
  <mdui-button-icon
    variant="filled"
    class="codebutton"
    :icon="opened ? 'close' : 'code'"
    @click="changeEditor"
  ></mdui-button-icon>
</template>
<style scoped>
.codebutton {
  background-color: #3a3a3a;
  color: white;
  position: fixed;
  font-size: 18pt;
  right: 39px;
  bottom: 115px;
  z-index: 114514;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: none;
}

.codebutton > button {
  padding: 10px;
}

@media (max-width: 620px) {
  .codebutton {
    display: block;
  }
}
</style>
