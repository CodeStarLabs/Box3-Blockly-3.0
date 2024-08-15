<script setup>
import { inject, ref } from 'vue'
import { dialog } from 'mdui/functions/dialog'
import { prompt } from 'mdui/functions/prompt'
import Dropdown from './Dropdown.vue'
import Option from './Option.vue'
import AboutDialog from './AboutDialog.vue'

const appname = inject('appname')
const save = inject('save')
const download = inject('download')

Blockly.dialog.setPrompt = window.prompt = function (a, b, c) {
  prompt({
    headline: '系统',
    description: a,
    confirmText: '确定',
    cancelText: '取消',
    onConfirm(value) {
      c && c(value, 0)
    },
    onCancel() { }
  })
}

function undo() {
  Blockly.mainWorkspace.undo()
}

function redo() {
  Blockly.mainWorkspace.undo(1)
}

function savefile() {
  save()
  dialog({
    headline: '保存',
    description: '文件保存成功！',
    closeOnOverlayClick: true,
    actions: [
      {
        text: '确定'
      }
    ]
  })
}

function saveLocal() {
  var xml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace))
  prompt({
    headline: '另存为',
    description: '请输入文件名',
    confirmText: '保存',
    cancelText: '取消',
    closeOnOverlayClick: true,
    onConfirm: (value) => {
      download(xml, value + '.xml')
    }
  })
}

function downloadJS() {
  let code =
    '//此代码由https://box3.codestarlabs.top/blockly3生成\n' +
    Blockly.JavaScript.workspaceToCode(Blockly.mainWorkspace)
  prompt({
    headline: '保存js',
    description: '请输入文件名',
    confirmText: '保存',
    cancelText: '取消',
    closeOnOverlayClick: true,
    onConfirm: (value) => {
      download(code, value + '.js')
    }
  })
}

function copy(ev, s) {
  ev.clipboardData.setData('text', s)
  ev.preventDefault()
  window.removeEventListener('copy', copy)
}

function copyCode() {
  let code =
    '//此代码由https://box3.codestarlabs.top/blockly3生成\n' +
    Blockly.JavaScript.workspaceToCode(Blockly.mainWorkspace)
  if (window.clipboardData) {
    window.clipboardData.setData(code)
  } else {
    window.addEventListener('copy', (ev) => copy(ev, code))
    document.execCommand('Copy')
  }
  dialog({
    headline: '复制',
    description: 'js代码复制成功！',
    closeOnOverlayClick: true,
    actions: [
      {
        text: '确定'
      }
    ]
  })
}

async function openLocal() {
  var workspace = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace))
  if (workspace) {
    let result = await new Promise((resolve, reject) => {
      dialog({
        headline: '打开文件',
        description: '打开本地文件后工作区的积木将被清空，请问是否继续？',
        closeOnOverlayClick: true,
        actions: [
          {
            text: '取消',
            onClick: () => resolve(0)
          },
          {
            text: '继续',
            onClick: () => resolve(1)
          }
        ]
      })
    })
    if (!result) return
  }
  var input = document.createElement('input')
  input.type = 'file'
  input.accept = '.xml'
  input.click()
  input.onchange = async function (ev) {
    let text = await input.files[0].text()
    Blockly.mainWorkspace.clear()
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(text), Blockly.mainWorkspace)
    dialog({
      headline: '打开文件',
      closeOnOverlayClick: true,
      description: '打开本地文件' + input.files[0].name + '成功！',
      actions: [
        {
          text: '确定'
        }
      ],
      onClose: () => input.remove()
    })
  }
}

function toSite() {
  window.open('https://www.codestarlabs.top')
}

function openAboutDialog() {
  document.querySelector('.about-dialog').open = true
}
</script>

<template>
  <div class="app-header">
    <div class="app-title-box">
      <div class="app-logo"></div>
      <h3 class="app-title-box-text">{{ appname }}</h3>
    </div>
    <div class="app-options-box">
      <Dropdown>
        <template v-slot:text>文件</template>
        <template v-slot:options>
          <Option @click="savefile">保存</Option>
          <Option @click="saveLocal">另存为...</Option>
          <Option @click="openLocal">打开本地（*.xml）</Option>
          <Option :final="1" @click="downloadJS">下载js代码</Option>
        </template>
      </Dropdown>
      <Dropdown>
        <template v-slot:text>编辑</template>
        <template v-slot:options>
          <Option @click="undo">撤销（Ctrl+Z）</Option>
          <Option @click="redo">重做（Ctrl+Y）</Option>
          <Option :final="1" @click="copyCode">复制代码</Option>
        </template>
      </Dropdown>
      <Dropdown>
        <template v-slot:text>关于</template>
        <template v-slot:options>
          <Option @click="openAboutDialog">关于...</Option>
          <Option :final="1" @click="toSite">码星实验室</Option>
        </template>
      </Dropdown>
    </div>
  </div>
  <AboutDialog></AboutDialog>
</template>

<style scoped>
.app-header {
  display: flex;
  position: relative;
  color: white;
  background-color: rgb(57, 91, 243);
  z-index: 999;
  width: 100%;
  padding: 0px 10px 0px 10px;
  box-shadow: 0px 2px 6px rgba(21, 63, 248, 0.55);
  flex-direction: row;
}

.app-title-box-text {
  margin: 2px;
  padding: 0;
  font-size: 21pt;
}

.app-title-box {
  user-select: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  padding: 10px 15px 10px 15px;
}

.app-options-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 10px 0px 10px;
}

.app-title-box:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.app-logo {
  height: 50px;
  width: 50px;
  background-image: url('../logo.png');
  background-size: cover;
  margin-right: 10px;
}

@media (max-width: 620px) {
  .app-logo {
    height: 40px;
    width: 40px;
  }

  .app-title-box-text {
    font-size: 18pt;
  }

  .app-header {
    padding: 0px 8px 0px 8px;
  }
}

@media (max-width: 620px) {
  .app-logo {
    height: 35px;
    width: 35px;
  }

  .app-title-box-text {
    font-size: 16pt;
  }

  .app-header {
    padding: 0px 6px 0px 6px;
  }
}
</style>
