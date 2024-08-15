//初始化blockly
//定义默认主题

Blockly.Themes.CUSTOM_THEME = Blockly.Theme.defineTheme('CUSTOM_THEME', {
  base: Blockly.Themes.Classic,
  categoryStyles: {
    custom_category: {}
  },
  componentStyles: {
    toolboxBackgroundColour: '#FFF',
    insertionMarkerColour: '#f5f5f5',
    insertionMarkerOpacity: 0.3,
    cursorColour: '#f5f5f5',
    toolboxBackgroundColour: '#fefefe',
    flyoutBackgroundColour: '#fefefe'
  }
})
//定义积木盒子样式
class CustomCategory extends Blockly.ToolboxCategory {
  constructor(categoryDef, toolbox, opt_parent) {
    super(categoryDef, toolbox, opt_parent)
  }
  addColourBorder_(colour) {
    this.rowDiv_.style.backgroundColor = colour
  }
  setSelected(isSelected) {
    var labelDom = this.rowDiv_.getElementsByClassName('blocklyTreeLabel')[0]
    if (isSelected) {
      this.rowDiv_.style.backgroundColor = this.colour_
      this.rowDiv_.style.boxShadow = '1px 1px 10px grey'
    } else {
      this.rowDiv_.style.backgroundColor = this.colour_
      labelDom.style.color = 'white'
      this.rowDiv_.style.boxShadow = ''
    }
    // This is used for accessibility purposes.
    Blockly.utils.aria.setState(
      /** @type {!Element} */(this.htmlDiv_),
      Blockly.utils.aria.State.SELECTED,
      isSelected
    )
  }
}

//注册
Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory,
  true
)

//加载工作区
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  scrollbars: true,
  grid: {
    spacing: 50,
    length: 1.5,
    colour: 'grey',
    snap: true
  },
  trashcan: true,
  theme: Blockly.Themes.CUSTOM_THEME,
  renderer: 'zelos',
  media: "./media/",
  zoom: {
    startScale: 0.9
  }
})
