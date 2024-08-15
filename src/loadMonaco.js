import * as monaco from 'monaco-editor'

const monacoEditor = monaco.editor.create(document.querySelector('#monaco-editor'), {
  language: 'javascript',
  theme: 'vs-dark',
  readOnly: true,
  automaticLayout: true,
  autoIndent: true
})

const resize_ele = document.querySelector('.resize-hr')

window.addEventListener('load', () => (resize_ele.style.display = 'block'))

var monacoEditor_WIDTH = window.innerWidth * 0.3 > 300 ? window.innerWidth * 0.3 : 300

function resize() {
  if (window.innerWidth > 620) {
    resize_ele.style.display = 'block'
    document.querySelector('.blockly-editor').style.width =
      window.innerWidth - monacoEditor_WIDTH - 5 + 'px'
    document.querySelector('#monaco-editor').style.width = monacoEditor_WIDTH + 'px'
  } else {
    document.querySelector('.blockly-editor').style.width = window.innerWidth + 'px'
    resize_ele.style.display = 'none'
    document.querySelector('#monaco-editor').style.width = window.innerWidth + 'px'
  }
  Blockly.svgResize(Blockly.mainWorkspace)
}

Blockly.mainWorkspace.addChangeListener(function (event) {
  const code =
    '//代码由https://box3.codestarlabs.top/blockly3生成\n' +
    Blockly.JavaScript.workspaceToCode(Blockly.mainWorkspace)
  monacoEditor.setValue(code)
})

resize_ele.addEventListener('mousedown', function (ev) {
  this.over = true;
  this.pos = ev.clientX;
  document.body.style.cursor = "ew-resize";
})
window.addEventListener('mouseup', function () {
  resize_ele.over = false;
  document.body.style.cursor = null;
  resize()
})

document.addEventListener('mousemove', function (ev) {
  if (resize_ele.over) {
    if (monacoEditor_WIDTH + resize_ele.pos - ev.clientX <= 300) monacoEditor_WIDTH = 300
    else {
      monacoEditor_WIDTH += resize_ele.pos - ev.clientX
      resize_ele.pos = ev.clientX
    }
    resize()
  } else Blockly.svgResize(Blockly.mainWorkspace)
})

window.addEventListener('resize', resize)

window.addEventListener('load', function () {
  let l = document.querySelector('.loading-box')
  l.classList.add('hide')
  setTimeout(() => l.remove(), 500)
  resize()
})
