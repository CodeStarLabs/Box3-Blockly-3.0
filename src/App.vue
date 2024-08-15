<script setup>
import appheader from './components/Header.vue'
import codebutton from './components/CodeButton.vue'
import { readonly, provide, inject } from 'vue'

//全局属性
const appname = 'Box3 Blockly 3.0'
const appversion = '0w01'
const appgit = 'https://github.com/CodeStarLabs/Box3-Blockly-3.0'

//依赖注入
provide('appname', appname)
provide('appversion', appversion)
provide('appgit', appgit)
provide('save', function () {
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
  var value = encodeURIComponent(Blockly.Xml.domToText(xml))
  localStorage.setItem('box3-blockly-workspace', value)
})
provide('download', function (data, name) {
  var a = document.createElement('a')
  var d = new Blob([data], { type: 'text/plain;charset=utf-8' })
  a.href = window.URL.createObjectURL(d)
  a.download = name
  a.click()
  window.URL.revokeObjectURL(d)
})
</script>
<template>
  <appheader></appheader>
  <codebutton></codebutton>
</template>
<style scoped></style>
