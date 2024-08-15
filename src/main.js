import './assets/main.css'

import { createApp, provide } from 'vue'
import App from './App.vue'
import './loadBlockly.js'
import './loadMonaco.js'

createApp(App).mount('#app')

window.onbeforeunload = () => true

  ; (function () {
    //工作区积木加载
    if (localStorage.getItem('box3-blockly-workspace')) {
      var xml = Blockly.Xml.textToDom(
        decodeURIComponent(localStorage.getItem('box3-blockly-workspace'))
      )
      Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace)
    } else {
      fetch('./default.xml')
        .then((res) => res.text())
        .then((xml) => Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), Blockly.mainWorkspace))
    }
  })()
