//Game BLOCKS by 编码喵c2022版权所有
const blocksColor = {
  world:"#CD40FF",voxels:"#30BF82",control:"#40BCFF",entity:"#FF4281",vector:"#42FF42",
  player: "#FF737D", event: "#0074FF", str: "160", rgb: "#40FF80"
}
Blockly.Msg['RGB_HUE'] = "#40FF80";
Blockly.HSV_SATURATION=1;
Blockly.HSV_VALUE=0.95;
Blockly.defineBlocksWithJsonArray([
  {
    "type":"setVoxel",
    "message0":"放置方块 %1 于 x: %2 y: %3 z: %4 旋转码：%5",
    "args0":[
    {
      "type":"field_input",
      "name":"VOXEL",
    },
    {
      "type":"input_value",
      "name":"X","check":"Number"
    },
    {
      "type":"input_value",
      "name":"Y","check":"Number"
    },
    {
      "type":"input_value",
      "name":"Z","check":"Number"
    },
    {
      type:"field_dropdown",
      name:"rotate",options:[['0','0'],['1','1'],['2','2'],['3','3']]
    }
    ],
    "previousStatement":null,
    "nextStatement":null,
    "colour":blocksColor.voxels,
    "inputsInline":!0,
  },
  {
    "type":"getVoxel",
    "message0":"获取 x: %1 y: %2 z: %3 的方块id",
    "args0":[
    {
      "type":"input_value",
      "name":"X","check":"Number"
    },
    {
      "type":"input_value",
      "name":"Y","check":"Number"
    },
    {
      "type":"input_value",
      "name":"Z","check":"Number"
    },
    ],
    output:"Number",
    "colour":blocksColor.voxels,
    "inputsInline":!0,
  },
  {
    "type":"setVoxelId",
    "message0":"放置方块 id： %1 于 x: %2 y: %3 z: %4 ",
    "args0":[
    {
      "type":"input_value",
      "name":"VOXEL",
    },
    {
      "type":"input_value",
      "name":"X","check":"Number"
    },
    {
      "type":"input_value",
      "name":"Y","check":"Number"
    },
    {
      "type":"input_value",
      "name":"Z","check":"Number"
    },
    ],
    "previousStatement":null,
    "nextStatement":null,
    "colour":blocksColor.voxels,
    "inputsInline":!0,
  },
  {
    "type":"WSay",
    "message0":"广播消息 %1",
    "args0":[
    {
      "type":"input_value",
      "name":"VALUE",
    }
    ],
    "previousStatement":null,
    "nextStatement":null,
    "colour":blocksColor.world,
    "inputsInline":!0,
  },
  {
    "type":"gravity",
    "message0":"设置世界的重力为 %1",
    "args0":[
    {
      "type":"input_value",
      "name":"Number",
      "check":"Number",
    }
    ],
    "previousStatement":null,
    "nextStatement":null,
    "colour":blocksColor.world,
    "inputsInline":true,
  },
  {
    "type":"output",
    "message0":"输出 %1",
    "args0":[
    {
      "type":"input_value",
      "name":"Text"
    }
    ],
    "previousStatement":null,
    "nextStatement":null,
    "colour":blocksColor.control,
    "inputsInline":true,
  },
  {
    "type":"note",
    "message0":"注释 %1",
    "args0":[
    {
      "type":"field_input",
      "name":"VALUE"
    }
    ],
    "previousStatement":null,
    "nextStatement":null,
    "inputsInline":true,
    "colour":blocksColor.control
  },
  {
    "type":"outError",
    "message0":"输出错误 %1",
    "args0":[
    {
      "type":"input_value",
      "name":"Text",
    }
    ],
    "previousStatement":null,
    "nextStatement":null,
    "colour":blocksColor.control,
    "inputsInline":true,
  },
  {
    "type":"clearConsole",
    "message0":"清空控制台",
    "previousStatement":null,
    "nextStatement":null,
    "colour":blocksColor.control,
    "inputsInline":true,
  },
  {
    "type":"outWarn",
    "message0":"输出警告 %1",
    "args0":[
    {
      "type":"input_value",
      "name":"Text",
    }
    ],
    "previousStatement":null,
    "nextStatement":null,
    "colour":blocksColor.control,
    "inputsInline":true,
  },
  {
    "type":"outDeBug",
    "message0":"输出日志 %1",
    "args0":[
    {
      "type":"input_value",
      "name":"Text",
    }
    ],
    "previousStatement":null,
    "nextStatement":null,
    "colour":blocksColor.control,
    "inputsInline":true,
  },
  {
    "type":"projectName",
    "message0": '地图项目名称',
    "output": "Text",
    "colour": blocksColor.world,
  },
  {
    "type":"url",
    "message0":"当前地图的链接",
    "output":"Text",
    "colour":blocksColor.world,
  },
  {
    "type":"allEntity",
    "message0":"获取世界中所有 %1",
    "args0":[
    {
      "type":"field_dropdown",
      "name":"VALUE",
      "options":[
      ["实体","*"],
      ["玩家","player"],
      ],
    }
    ],
    "output":"array",
    "colour":blocksColor.world,
    "tooltip": "该积木将返回值为一个数组，获取的实体/玩家将存储在数组内",
  },
  {
    "type":"anEntity",
    "message0":"获取单个 %1 为 %2 的实体",
    "args0":[
    {
      "type":"field_dropdown",
      "name":"VALUE",
      "options":[
      ["id","#"],
      ["标签","."],
      ],
    },
    {
      "type":"input_value",
      "name":"Name",
      "check":"String"
    }
    ],
    "output":"entity",
    "colour":blocksColor.world,
    "tooltip":"该积木将返回一个实体",
    "inputsInline":true,
  },
  {
    "type":"vector3",
    "message0":" x: %1 y: %2 z: %3",
    "args0":[
    {
      "type":"input_value",
      "name":"X",
      "check":"Number"
    },
    {
      "type":"input_value",
      "name":"Y",
      "check":"Number"
    },
    {
      "type":"input_value",
      "name":"Z",
      "check":"Number"
    },
    ],
    "output":"Vector3",
    "colour":blocksColor.vector,"inputsInline":true,
  },
  {
    "type":"rgbColor",
    "message0":"颜色 r: %1 g: %2 b: %3",
    "args0":[
    {
      "type":"input_value",
      "name":"R",
      "check":"Number"
    },
    {
      "type":"input_value",
      "name":"G",
      "check":"Number"
    },
    {
      "type":"input_value",
      "name":"B",
      "check":"Number"
    },
    ],
    "output":"rgbColor",
    "colour":blocksColor.rgb,
    "inputsInline":true,
  },
  {
    "type":"rgbaColor",
    "message0":"颜色 r: %1 g: %2 b: %3 a: %4",
    "args0":[
    {
      "type":"input_value",
      "name":"R",
      "check":"Number"
    },
    {
      "type":"input_value",
      "name":"G",
      "check":"Number"
    },
    {
      "type":"input_value",
      "name":"B",
      "check":"Number"
    },
    {
      "type":"input_value",
      "name":"A",
      "check":"Number"
    },
    ],
    "output":"rgbaColor",
    "colour":blocksColor.rgb,
    "inputsInline":true,
  },
  {
    "type":"entityPosition",
    "message0":"设置实体 %1 的位置为 %2 ",
    "args0":[
    {
       "type":"input_value",
       "name":"entity",
       "check":"entity",
     },
     {
       "type":"input_value",
       "name":"pos",
       "check":"Vector3",
     },
     ],
     "previousStatement":null,
     "nextStatement":null,
     "inputsInline":true,
     "colour":blocksColor.entity,
  },
  {
      "type": "entityScale",
      "message0": "设置实体 %1 的大小为 %2 ",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity",
      },
       {
           "type": "input_value",
           "name": "scale",
           "check": "Vector3",
       },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": true,
      "colour": blocksColor.entity,
  },
  {
      "type": "entityOffset",
      "message0": "设置实体 %1 的位移为 %2 ",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity",
      },
       {
           "type": "input_value",
           "name": "offset",
           "check": "Vector3",
       },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": true,
      "colour": blocksColor.entity,
  },
  {
      "type": "entityInvisible",
      "message0": "设置实体 %1 %2 ",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity",
      },
      {
          "type": "field_dropdown",
          "name": "invisible",
          "options": [
              ["隐形", "true"],
              ["不隐型","false"]
          ]
      },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": true,
      "colour": blocksColor.entity,
  },
  {
      "type": "playerInvisible",
      "message0": "设置玩家 %1 %2 ",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity",
      },
      {
          "type": "field_dropdown",
          "name": "invisible",
          "options": [
              ["隐形", "true"],
              ["不隐型", "false"]
          ]
      },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": true,
      "colour": blocksColor.player,
  },
  {
      "type": "playerMuted",
      "message0": "设置玩家 %1 %2 ",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity",
      },
      {
          "type": "field_dropdown",
          "name": "invisible",
          "options": [
              ["允许聊天", "false"],
              ["不允许聊天", "true"]
          ]
      },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": true,
      "colour": blocksColor.player,
  },
  {
      "type": "entityColor",
      "message0": "设置实体 %1 的颜色为 %2 ",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity",
      },
       {
           "type": "input_value",
           "name": "color",
           "check": "rgbaColor",
       },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": true,
      "colour": blocksColor.entity,
  },
  {
      "type": "playerColor",
      "message0": "设置玩家 %1 的颜色为 %2 ",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity",
      },
       {
           "type": "input_value",
           "name": "color",
           "check": "rgbColor",
       },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": true,
      "colour": blocksColor.player,
  },
  {
      "type": "entityEmissive",
      "message0": "设置实体 %1 的发光度为 %2 ",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity",
      },
       {
           "type": "input_value",
           "name": "number",
           "check": "Number",
       },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": true,
      "colour": blocksColor.entity,
  },
  {
      "type": "entityMetaIness",
      "message0": "设置实体 %1 的金属感为 %2 ",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity",
      },
       {
           "type": "input_value",
           "name": "number",
           "check": "Number",
       },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": true,
      "colour": blocksColor.entity,
  },
  {
      "type": "entityShininess",
      "message0": "设置实体 %1 的反光度为 %2 ",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity",
      },
       {
           "type": "input_value",
           "name": "number",
           "check": "Number",
       },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": true,
      "colour": blocksColor.entity,
  },
  {
      "type": "playerEmissive",
      "message0": "设置玩家 %1 的发光度为 %2 ",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity",
      },
       {
           "type": "input_value",
           "name": "number",
           "check": "Number",
       },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline": true,
      "colour": blocksColor.player,
  },
  {
    "type":"entityMesh",
    "message0":"设置实体 %1 的外观为 %2 ",
    "args0":[
    {
       "type":"input_value",
       "name":"entity",
       "check":"entity",
     },
     {
       "type":"input_value",
       "name":"mesh",
       "check":"String",
     },
     ],
     "previousStatement":null,
     "nextStatement":null,
     "inputsInline":true,
     "colour":blocksColor.entity,
  },
  {
    "type":"GameEntity",
    "message0":"实体类",
    "output":"entity",
    "colour":blocksColor.entity
  },
  {
    "type":"GameWorld",
    "message0":"世界类",
    "output":"world",
    "colour":blocksColor.world
  },
  {
    "type":"GameVoxels",
    "message0":"方块类",
    "output":"voxels",
    "colour":blocksColor.voxels
  },
  {
    "type":"GamePlayer",
    "message0":"玩家类",
    "output":"player",
    "colour":blocksColor.player
  },
  {
    "type":"sleep",
    "message0":"等待 %1 秒",
    "args0":[
    {
      "type":"input_value",
      "name":"Number",
      "check":"Number"
    }
    ],
    "nextStatement":null,
    "previousStatement":null,
    "colour":blocksColor.control,
    "tooltip":"仅支持在事件/异步函数中支持",
  },
  {
    "type":"playerName",
    "message0":"玩家 %1 的用户名",
    "args0":[
    {
      "type":"input_value",
      "name":"entity",
      "check":"entity"||!"array"
    }
    ],
    "output":"String",
    "colour":blocksColor.player,
  },
  {
      "type": "playerBoxId",
      "message0": "玩家 %1 的BoxId",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity" || !"array"
      }
      ],
      "output": "String",
      "colour": blocksColor.player,
  },
  {
      "type": "playerUserKey",
      "message0": "玩家 %1 的唯一标识码",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity" || !"array"
      }
      ],
      "output": "String",
      "colour": blocksColor.player,
  },
  {
      "type": "playerSpawnPoint",
      "message0": "设置玩家 %1 的出生点为 %2",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity" || !"array"
      },
      {
          "type": "input_value",
          "name": "pos",
          "check":"Vector3"
      }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline":true,
      "colour": blocksColor.player,
  },
  {
      "type": "playerMovementBounds",
      "message0": "设置玩家 %1 的活动范围为 %2",
      "args0": [
      {
          "type": "input_value",
          "name": "entity",
          "check": "entity" || !"array"
      },
      {
          "type": "input_value",
          "name": "pos",
          "check": "Vector3"
      }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "inputsInline":true,
      "colour": blocksColor.player,
  },
  {
    "type":"whenStart",
    "message0":"当开始运行时",
    "message1":"%1",
    "args1":[
    {
      "type":"input_statement",
      "name":"script",
    }
    ],
    "colour":blocksColor.event,
    "inputsInline":true,
  },
  {
    "type":"onPlayerJoin",
    "message0":"当玩家进入地图时 获取参数 %1 \n %2",
    "args0":[
    {
      "type":"input_value",
      "name":"value",
      "check":"entity",
    },
    {
      "type":"input_statement",
      "name":"script",
    },
    ],
    "colour":blocksColor.event,
    "previousStatement":null,
    "nextStatement":null,
    "inputsInline":true,
  },
  {
      "type": "onInteract",
      "message0": "当世界触发实体互动时 获取参数 %1 %2 \n %3",
      "args0": [
      {
          "type": "input_value",
          "name": "value",
          "check": "entity",
      },
      {
          "type": "input_value",
          "name": "value1",
          "check":"entity"
      },
      {
          "type": "input_statement",
          "name": "script",
      },
      ],
      "colour": blocksColor.event,
      "previousStatement": null,
      "nextStatement": null,
  },
  {
      "type": "onEntityContact",
      "message0": "当实体发生碰撞时 获取参数 %1 %2 %3 %4 \n %5",
      "args0": [
      {
          "type": "input_value",
          "name": "value",
          "check": "entity",
      },
      {
          "type": "input_value",
          "name": "value1",
          "check": "entity"
      },
      {
          "type": "input_value",
          "name": "value2",
      },
      {
          "type": "input_value",
          "name": "value3",
      },
      {
          "type": "input_statement",
          "name": "script",
      },
      ],
      "colour": blocksColor.event,
      "previousStatement": null,
      "nextStatement": null,
  },
  {
      "type": "contactEntity",
      "message0": "碰撞中的第一个实体",
      "output": "entity",
      "colour": blocksColor.event,
  },
  {
      "type": "other",
      "message0": "碰撞中的第二个实体",
      "output": "entity",
      "colour": blocksColor.event,
  },
  {
      "type": "force",
      "message0": "碰撞所产生的力",
      "output": "Vector3",
      "colour": blocksColor.event,
  },
  {
      "type": "axis",
      "message0": "碰撞后物体弹飞的方向",
      "output": "Vector3",
      "colour": blocksColor.event,
  },
  {
      "type": "interactEntity",
      "message0": "发起互动的实体",
      "output": "entity",
      "colour": blocksColor.event,
  },
  {
      "type": "targetEntity",
      "message0": "被互动的实体",
      "output": "entity",
      "colour": blocksColor.event,
  },
  {
    "type":"joinEntity",
    "message0":"进入地图的实体",
    "output":"entity",
    "colour":blocksColor.event,
  },
  {
    "type":"onPlayerLeave",
    "message0":"当玩家离开地图时 获取参数 %1 \n %2",
    "args0":[
    {
      "type":"input_value",
      "name":"value",
      "check":"entity",
    },
    {
      "type":"input_statement",
      "name":"script",
    },
    ],
    "colour":blocksColor.event,
    "previousStatement":null,
    "nextStatement":null,
    "inputsInline":true,
  },
  {
    "type":"leaveEntity",
    "message0":"离开地图的实体",
    "output":"entity",
    "colour":blocksColor.event,
  },
  { 
    type: "text", 
    message0: "%1", 
    args0: [{ type: "field_input", name: "TEXT", text: "" }], 
    output: "String",
    style: "text_blocks", 
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}", 
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}", 
    extensions: ["text_quotes", "parent_tooltip_when_inline"],
   },
   {
       type: "text_join",
       message0: "",
       output: "String",
       style: "text_blocks",
       helpUrl: "%{BKY_TEXT_JOIN_HELPURL}",
       tooltip: "%{BKY_TEXT_JOIN_TOOLTIP}",
       mutator: "text_join_mutator",
       inputsInline:true,
   },
   {
     type:"airFriction",
     message0:"设置世界的速度阻尼为 %1",
     args0:[
     {
       type:"input_value",
       name:"number",
       check:"Number"
     }
     ],
     tooltip:"设置地图的速度阻尼，可以用来模拟大风的环境",
     previousStatement:null,
     nextStatement:null,
     colour:blocksColor.world,
     inputsInline:true,
   },
   {
     type:"maxFog",
     message0:"设置世界最大雾量为 %1",
     args0:[
     {
       type:"input_value",
       name:"number",
       check:"Number"
     }
     ],
     tooltip:"设置地图的最大雾量",
     previousStatement:null,
     nextStatement:null,
     colour:blocksColor.world,
     inputsInline:true,
   },
   {
     type:"fogColor",
     message0:"设置世界雾的颜色为 %1",
     args0:[
     {
       type:"input_value",
       name:"color",
       check:"rgbColor"
     }
     ],
     tooltip:"设置地图雾的颜色",
     previousStatement:null,
     nextStatement:null,
     colour:blocksColor.world,
     inputsInline:true,
   },
   {
     type:"rainColor",
     message0:"设置世界雨的颜色为 %1",
     args0:[
     {
       type:"input_value",
       name:"color",
       check:"rgbaColor"
     }
     ],
     tooltip:"设置地图雨的颜色",
     previousStatement:null,
     nextStatement:null,
     colour:blocksColor.world,
     inputsInline:true,
   },
   {
       type: "fogStartDistance",
       message0: "设置世界雾的起始距离为 %1",
       args0: [
       {
           type: "input_value",
           name: "number",
           check: "Number"
       }
       ],
       tooltip: "设置地图雾的起始距离",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true,
   },
   {
       type: "fogHeightOffset",
       message0: "设置世界雾的起始高度为 %1",
       args0: [
       {
           type: "input_value",
           name: "number",
           check: "Number"
       }
       ],
       tooltip: "设置地图雾的起始高度",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true,
   },
   {
       type: "fogUniformDensity",
       message0: "设置世界雾的均匀密度为 %1",
       args0: [
       {
           type: "input_value",
           name: "number",
           check: "Number"
       }
       ],
       tooltip: "设置地图雾的均匀密度",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true,
   },
   {
       type: "fogHeightFalloff",
       message0: "设置世界雾的衰减速率为 %1",
       args0: [
       {
           type: "input_value",
           name: "number",
           check: "Number"
       }
       ],
       tooltip: "设置地图雾的衰减速率",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true,
   },
   {
       type: "rainSpeed",
       message0: "设置世界雨的速度为 %1",
       args0: [
       {
           type: "input_value",
           name: "number",
           check: "Number"
       }
       ],
       tooltip: "设置地图雨的速度",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true,
   },
   {
     type:"rainDirection",
     message0:"设置世界雨的方向为 %1",
     args0:[
     {
       type:"input_value",
       name:"direction",
       check:"Vector3"
     }
     ],
     tooltip:"设置地图雨的方向",
     previousStatement:null,
     nextStatement:null,
     colour:blocksColor.world,
     inputsInline:true,
   },
   {
     type:"rainDensity",
     message0:"设置世界雨的密度为 %1",
     args0:[
     {
       type:"input_value",
       name:"num",
       check:"Number"
     }
     ],
     tooltip:"设置地图雨的密度",
     previousStatement:null,
     nextStatement:null,
     colour:blocksColor.world,
     inputsInline:true,
   },
   {
     type:"rainInterference",
     message0:"设置世界雨的扰动率为 %1",
     args0:[
     {
       type:"input_value",
       name:"num",
       check:"Number"
     }
     ],
     tooltip:"设置地图雨的扰动率",
     previousStatement:null,
     nextStatement:null,
     colour:blocksColor.world,
     inputsInline:true,
   },
   {
     type:"rainSizeLo",
     message0:"设置世界雨的最小直径为 %1",
     args0:[
     {
       type:"input_value",
       name:"num",
       check:"Number"
     }
     ],
     tooltip:"设置地图雨的最小直径",
     previousStatement:null,
     nextStatement:null,
     colour:blocksColor.world,
     inputsInline:true,
   },
   {
     type:"rainSizeHi",
     message0:"设置世界雨的最大直径为 %1",
     args0:[
     {
       type:"input_value",
       name:"num",
       check:"Number"
     }
     ],
     tooltip:"设置地图雨的最大直径",
     previousStatement:null,
     nextStatement:null,
     colour:blocksColor.world,
     inputsInline:true,
   },
   {
     type:"snowColor",
     message0:"设置世界雪的颜色为 %1",
     args0:[
     {
       type:"input_value",
       name:"color",
       check:"rgbaColor"
     }
     ],
     tooltip:"设置地图雪的颜色",
     previousStatement:null,
     nextStatement:null,
     colour:blocksColor.world,
     inputsInline:true,
   },
   {
       type: "snowSizeLo",
       message0: "设置世界雪的最小直径为 %1",
       args0: [
       {
           type: "input_value",
           name: "num",
           check: "Number"
       }
       ],
       tooltip: "设置地图雪的最小直径",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true,
   },
   {
       type: "snowSizeHi",
       message0: "设置世界雪的最大直径为 %1",
       args0: [
       {
           type: "input_value",
           name: "num",
           check: "Number"
       }
       ],
       tooltip: "设置地图雪的最大直径",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true,
   },
   {
     type:"snowFallSpeed",
     message0:"设置世界雪的下落速度为 %1",
     args0:[
     {
       type:"input_value",
       name:"num",
       check:"Number"
     }
     ],
     tooltip:"设置地图雪的下落速度",
     previousStatement:null,
     nextStatement:null,
     colour:blocksColor.world,
     inputsInline:true,
   },
   {
     type:"snowDensity",
     message0:"设置世界雪的密度为 %1",
     args0:[
     {
       type:"input_value",
       name:"num",
       check:"Number"
     }
     ],
     tooltip:"设置地图雪的密度",
     previousStatement:null,
     nextStatement:null,
     colour:blocksColor.world,
     inputsInline:true,
   },
   {
       type: "snowSpinSpeed",
       message0: "设置世界雪的自旋速度为 %1",
       args0: [
       {
           type: "input_value",
           name: "vector3",
           check: "Vector3"
       }
       ],
       tooltip: "设置地图雪的自选速度",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true,
   },
   {
     type:"snowTexture",
     message0:"设置世界雪的纹理为 %1",
     args0:[
     {
       type:"field_dropdown",
       name:"name",
       options:[
       ['爱心','heart'],
       ['气泡','bubble'],
       ['雪', 'snow'],
       ['雪-2', 'snow2'],
       ['雪-3','snow3'],
       ['蒲公英', 'dandelion'],
       ['树叶', 'leaf'],
       ['枫叶', 'maple'],
       ['樱花', 'sakura'],
       ['星星','star']
       ]
     }
     ],
     tooltip:"设置地图雪的纹理",
     previousStatement:null,
     nextStatement:null,
     colour:blocksColor.world,
     inputsInline:true,
   },
   {
       type:"voxelsId",
       message0:"获取方块 %1 的id",
       args0: [
       {
           type: "input_value",
           name: "name",
           check: "String"
       }
       ],
       tooltip: "获取方块的id",
       output:"Number",
       colour: blocksColor.voxels,
       inputsInline: true,
   },
   {
       type:"voxelsName",
       message0:"获取id为 %1 的方块的名称",
       args0: [
       {
           type: "input_value",
           name: "id",
           check: "Number"
       }
       ],
       tooltip: "获取方块的名称",
       output:"String",
       colour: blocksColor.voxels,
       inputsInline: true,
   },
   {
       type: "entityBounds",
       message0: "实体 %1 的边界框大小",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check:"entity"
           }
       ],
       tooltip: "获取实体的边界框大小",
       output: "Vector3",
       colour: blocksColor.entity,
       inputsInline:true
   },
   {
       type: "entityContactForce",
       message0: "实体 %1 受到的碰撞力",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           }
       ],
       tooltip: "获取实体受到的碰撞力",
       output: "Vector3",
       colour: blocksColor.entity,
       inputsInline: true
   },
   {
       type: "entityCollides",
       message0: "设置实体 %1 %2",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "field_dropdown",
               name: "boolean",
               options: [
                   ['可碰撞','true'],['不可碰撞','false']
               ]
           }
       ],
       tooltip: "设置实体是否可碰撞",
       previousStatement: null,
       nextStatement:null,
       colour: blocksColor.entity,
       inputsInline: true
   },
   {
       type: "entityFixed",
       message0: "设置实体 %1 %2",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "field_dropdown",
               name: "boolean",
               options: [
                   ['固定不动', 'true'], ['不固定', 'false']
               ]
           }
       ],
       tooltip: "设置实体是否固定不动",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.entity,
       inputsInline: true
   },
   {
       type: "entityFriction",
       message0: "设置实体 %1 %2",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "field_dropdown",
               name: "boolean",
               options: [
                   ['滑', '0'], ['粘', '1']
               ]
           }
       ],
       tooltip: "设置实体的粘性",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.entity,
       inputsInline: true
   },
   {
       type: "entityGravity",
       message0: "设置实体 %1 %2",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "field_dropdown",
               name: "boolean",
               options: [
                   ['会下落', 'true'], ['不会下落', 'false']
               ]
           }
       ],
       tooltip: "设置实体是否会下落",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.entity,
       inputsInline: true
   },
   {
       type: "entityRestitution",
       message0: "设置实体 %1 %2",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "field_dropdown",
               name: "boolean",
               options: [
                   ['软', '0'], ['弹', '1']
               ]
           }
       ],
       tooltip: "设置实体的软弹性",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.entity,
       inputsInline: true
   },
   {
       type: "entityMass",
       message0: "设置实体 %1 的质量为 %2 ",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "input_value",
               name: "num",
               check:"Number",
           }
       ],
       tooltip: "设置实体的质量",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.entity,
       inputsInline: true
   },
   {
       type: "entityVelocity",
       message0: "设置实体 %1 的速度为 %2 ",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "input_value",
               name: "vector3",
               check: "Vector3",
           }
       ],
       tooltip: "设置实体的速度",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.entity,
       inputsInline: true
   },
   {
       type: "entitySay",
       message0: "让实体 %1 说话 %2 ",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "input_value",
               name: "text",
               check: "String",
           }
       ],
       tooltip: "让实体说话",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.entity,
       inputsInline: true
   },
   {
       type: "entityEnableInteract",
       message0: "设置实体 %1 %2",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "field_dropdown",
               name: "boolean",
               options: [
                   ['允许互动', 'true'], ['不允许互动', 'false']
               ]
           }
       ],
       tooltip: "设置实体是否允许互动",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.entity,
       inputsInline: true
   },
   {
       type: "entityInteractRadius",
       message0: "设置实体 %1 的互动范围 %2 ",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "input_value",
               name: "num",
               check: "Number",
           }
       ],
       tooltip: "设置实体的互动范围",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.entity,
       inputsInline: true
   },
   {
       type: "entityInteractHint",
       message0: "设置实体 %1 的互动提示文本为 %2 ",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "input_value",
               name: "hint",
               check: "String",
           }
       ],
       tooltip: "设置实体的互动提示文本",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.entity,
       inputsInline: true
   },
   {
       type: "entityInteractColor",
       message0: "设置实体 %1 的互动提示文本颜色为 %2 ",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "input_value",
               name: "color",
               check: "rgbColor",
           }
       ],
       tooltip: "设置实体的互动提示文本颜色",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.entity,
       inputsInline: true
   },
   {
       type: "playerDirectMessage",
       message0: "向玩家 %1 发送私信 %2 ",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "input_value",
               name: "chat",
               check: "String",
           }
       ],
       tooltip: "向玩家发送私信",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.player,
       inputsInline: true
   },
   {
       type: "playerShowName",
       message0: "设置玩家 %1 %2",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "field_dropdown",
               name: "show",
               options: [
                   ['显示名字', 'true'], ['不显示名字', 'false']
               ]
           }
       ],
       tooltip: "设置玩家是否显示名字",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.player,
       inputsInline: true
   },
   {
       type: "playerScale",
       message0: "设置玩家 %1 的大小为 %2 ",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "input_value",
               name: "scale",
               check: "Number",
           }
       ],
       tooltip: "设置玩家的大小",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.player,
       inputsInline: true
   },
   {
       type: "playerMetalness",
       message0: "设置玩家 %1 的金属感为 %2 ",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "input_value",
               name: "num",
               check: "Number",
           }
       ],
       tooltip: "设置玩家的金属感",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.player,
       inputsInline: true
   },
   {
       type: "playerShininess",
       message0: "设置玩家 %1 的反光度为 %2 ",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "input_value",
               name: "num",
               check: "Number",
           }
       ],
       tooltip: "设置玩家的反光度",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.player,
       inputsInline: true
   },
   {
       type: "playerCanFly",
       message0: "设置玩家 %1 %2",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "field_dropdown",
               name: "boolean",
               options: [
                   ['允许飞行', 'true'], ['不允许飞行', 'false']
               ]
           }
       ],
       tooltip: "设置玩家是否允许飞行",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.player,
       inputsInline: true
   },
   {
       type: "playerSpectator",
       message0: "设置玩家 %1 %2",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "field_dropdown",
               name: "boolean",
               options: [
                   ['可以穿墙', 'true'], ['不可以穿墙', 'false']
               ]
           }
       ],
       tooltip: "设置玩家是否可以穿墙",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.player,
       inputsInline: true
   },
   {
       type: "playerEnableJump",
       message0: "设置玩家 %1 %2",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "field_dropdown",
               name: "boolean",
               options: [
                   ['允许跳跃', 'true'], ['不允许跳跃', 'false']
               ]
           }
       ],
       tooltip: "设置玩家是否允许跳跃",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.player,
       inputsInline: true
   },
   {
       type: "playerEnableDoubleJump",
       message0: "设置玩家 %1 %2",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "field_dropdown",
               name: "boolean",
               options: [
                   ['允许二段跳跃', 'true'], ['不允许二段跳跃', 'false']
               ]
           }
       ],
       tooltip: "设置玩家是否允许二段跳跃",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.player,
       inputsInline: true
   },
   {
       type: "entityObject",
       message0: "实体 %1 的 %2",
       args0: [
       {
           type: "input_value",
           name: "entity",
           check:"entity"
       },
       {
           type: "field_dropdown",
           name: "obj",
           options: [
               ["id", "id"],
               ["外观", "mesh"],
               ["位置", "position"],
               ["大小", "meshScale"],
               ["颜色", "meshColor"],
               ["发光度", "meshEmissive"],
               ["金属感", "meshMetalness"],
               ["反光度", "meshShininess"],
               ["位移", "meshOffset"],
               ["质量", "mass"],
               ["互动范围", "interactRadius"],
               ["互动提示文本", "interactHint"],
               ["互动提示文本颜色", "interactColor"]
           ]
       }
       ],
       output: null,
       colour:blocksColor.entity,
   },
   {
       type: "playerWalkSpeed",
       message0: "设置玩家 %1 的最大行走速度为 %2 ",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "input_value",
               name: "number",
               check: "Number",
           }
       ],
       tooltip: "设置玩家的最大行走速度",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.player,
       inputsInline: true
   },
   {
       type: "playerRunSpeed",
       message0: "设置玩家 %1 的最大奔跑速度为 %2 ",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "input_value",
               name: "number",
               check: "Number",
           }
       ],
       tooltip: "设置玩家的最大奔跑速度",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.player,
       inputsInline: true
   },
   {
       type: "playerRunAcceleration",
       message0: "设置玩家 %1 的奔跑加速度为 %2 ",
       args0: [
           {
               type: "input_value",
               name: "entity",
               check: "entity"
           },
           {
               type: "input_value",
               name: "number",
               check: "Number",
           }
       ],
       tooltip: "设置玩家的奔跑加速度",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.player,
       inputsInline: true
   },
   {
       type:"worldQuerySelector",
       message0: "查找世界满足条件 %1 的第一个实体",
       args0: [
           {
               type: "field_input",
               name: "s",
           },
       ],
       tooltip: "查找满足条件的第一个实体",
       output:"entity",
       colour: blocksColor.world,
       inputsInline: true
   },
   {
       type: "lightMode",
       message0: "设置世界的照明类型为 %1",
       args0: [
           {
               type: "field_dropdown",
               name: "boolean",
               options: [
                   ['自然', 'natural'], ['自定义', 'manual']
               ]
           }
       ],
       tooltip: "设置世界的照明类型",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true
   },
   {
       type: "sunFrequency",
       message0: "设置太阳运动的频率为 %1",
       args0: [
           {
               type: "input_value",
               name: "number",
               check:"Number"
           }
       ],
       tooltip: "设置太阳运动的频率",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true
   },
   {
       type: "sunPhase",
       message0: "设置太阳的位置为 %1",
       args0: [
           {
               type: "input_value",
               name: "number",
               check: "Number"
           }
       ],
       tooltip: "设置太阳的位置",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true
   },
   {
       type: "lunarPhase",
       message0: "设置月亮的相位为 %1",
       args0: [
           {
               type: "input_value",
               name: "number",
               check: "Number"
           }
       ],
       tooltip: "设置月亮的相位",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true
   },
   {
       type: "sunDirection",
       message0: "设置太阳光照射方向为 %1",
       args0: [
           {
               type: "input_value",
               name: "vector",
               check: "Vector3"
           }
       ],
       tooltip: "设置太阳光照射方向（仅在自定义光照生效）",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true
   },
   {
       type: "sunLight",
       message0: "设置太阳光颜色为 %1",
       args0: [
           {
               type: "input_value",
               name: "rgb",
               check: "rgbColor"
           }
       ],
       tooltip: "设置太阳光颜色方向（仅在自定义光照生效）",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true
   },
   {
       type: "skyLeftLight",
       message0: "设置-X轴的环境光颜色为 %1",
       args0: [
           {
               type: "input_value",
               name: "rgb",
               check: "rgbColor"
           }
       ],
       tooltip: "设置-X轴的环境光颜色（仅在自定义光照生效）",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true
   },
   {
       type: "skyRightLight",
       message0: "设置+X轴的环境光颜色为 %1",
       args0: [
           {
               type: "input_value",
               name: "rgb",
               check: "rgbColor"
           }
       ],
       tooltip: "设置+X轴的环境光颜色（仅在自定义光照生效）",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true
   },
   {
       type: "skyBottomLight",
       message0: "设置-Y轴的环境光颜色为 %1",
       args0: [
           {
               type: "input_value",
               name: "rgb",
               check: "rgbColor"
           }
       ],
       tooltip: "设置-Y轴的环境光颜色（仅在自定义光照生效）",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true
   },
   {
       type: "skyTopLight",
       message0: "设置+Y轴的环境光颜色为 %1",
       args0: [
           {
               type: "input_value",
               name: "rgb",
               check: "rgbColor"
           }
       ],
       tooltip: "设置+Y轴的环境光颜色（仅在自定义光照生效）",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true
   },
   {
       type: "skyFrontLight",
       message0: "设置-Z轴的环境光颜色为 %1",
       args0: [
           {
               type: "input_value",
               name: "rgb",
               check: "rgbColor"
           }
       ],
       tooltip: "设置-Z轴的环境光颜色（仅在自定义光照生效）",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true
   },
   {
       type: "skyBackLight",
       message0: "设置+Z轴的环境光颜色为 %1",
       args0: [
           {
               type: "input_value",
               name: "rgb",
               check: "rgbColor"
           }
       ],
       tooltip: "设置+Z轴的环境光颜色（仅在自定义光照生效）",
       previousStatement: null,
       nextStatement: null,
       colour: blocksColor.world,
       inputsInline: true
   },
]);

var js=Blockly.JavaScript;
var atomic = js.ORDER_ATOMIC;

js['setVoxel']=function(block){
  let voxel='\''+block.getFieldValue('VOXEL')+'\'';
  let x=Blockly.JavaScript.valueToCode(block, 'X', atomic);
  let y=Blockly.JavaScript.valueToCode(block, 'Y', atomic);
  let z=Blockly.JavaScript.valueToCode(block, 'Z', atomic);
  let rotate=block.getFieldValue('rotate');
  return 'voxels.setVoxel('+x+','+y+','+z+','+voxel+','+rotate+');\n';
}
js['entityObject'] = (a) => {
    let e = js.valueToCode(a, 'entity', 0);
    let o = a.getFieldValue('obj');
    return [`${e}.${o}`, 0];
}
js['worldQuerySelector']=function(a){
  let s=a.getFieldValue("s");
  return ['world.querySelector(\''+s+'\')',0];
}
js['lightMode'] = function (a) {
    let s = a.getFieldValue("boolean");
    return 'world.lightMode=\'' + s + '\';\n';
}
js['getVoxel']=function(block){
  let x=Blockly.JavaScript.valueToCode(block, 'X', atomic);
  let y=Blockly.JavaScript.valueToCode(block, 'Y', atomic);
  let z=Blockly.JavaScript.valueToCode(block, 'Z', atomic);
  return ['voxels.getVoxel('+x+','+y+','+z+')',0];
}
js['setVoxelId']=function(block){
  let voxel=js.valueToCode(block,'VOXEL',0);
  let x=Blockly.JavaScript.valueToCode(block, 'X', atomic);
  let y=Blockly.JavaScript.valueToCode(block, 'Y', atomic);
  let z=Blockly.JavaScript.valueToCode(block, 'Z', atomic);
  return 'voxels.setVoxel('+x+','+y+','+z+','+voxel+');\n';
}

js['WSay']=function(block){
  let value=js.valueToCode(block,'VALUE',atomic);
  return 'world.say('+value+');\n';
}

js['projectName']=function(){
  return["world.projectName",atomic]
}
js['clearConsole']=function(){return "console.clear();\n"}

js['url']=function(){return["world.url",atomic];}

js['gravity']=function(a){
  let number=js.valueToCode(a,'Number',atomic);
  return 'world.gravity='+number+';\n';
}

js['output']=function(a){
  let value=js.valueToCode(a,'Text',atomic);
  return 'console.log('+value+');\n';
}

js['outError']=function(a){
  let value=js.valueToCode(a,'Text',atomic);
  return 'console.error('+value+');\n';
}

js['outWarn']=function(a){
  let value=js.valueToCode(a,'Text',atomic);
  return 'console.warn('+value+');\n';
}

js['outDeBug']=function(a){
  let value=js.valueToCode(a,'Text',atomic);
  return 'console.debug('+value+');\n';
}

js['allEntity']=function(a){
  let value=a.getFieldValue('VALUE');
  return ['world.querySelectorAll(\''+value+'\')',atomic];
}

js['anEntity']=function(a){
  let value=a.getFieldValue('VALUE');
  let name=js.valueToCode(a,'Name',atomic);
  return ['world.querySelector(\''+value+name.replace(/["'`]/g,"")+'\')',atomic];
}

js['note']=function(a){
  let value=a.getFieldValue('VALUE');
  return '//'+value+'\n';
}

js['vector3']=function(a){
  let x=js.valueToCode(a,'X',atomic);
  let y=js.valueToCode(a,'Y',atomic);
  let z=js.valueToCode(a,'Z',atomic);
  return ['new GameVector3('+x+','+y+','+z+')',atomic];
}

js['rgbColor']=function(a){
  let x=js.valueToCode(a,'R',atomic);
  let y=js.valueToCode(a,'G',atomic);
  let z=js.valueToCode(a,'B',atomic);
  return ['new GameRGBColor('+x+','+y+','+z+')',atomic];
}

js['rgbaColor']=function(a){
  let x=js.valueToCode(a,'R',atomic);
  let y=js.valueToCode(a,'G',atomic);
  let z=js.valueToCode(a,'B',atomic);
  let w=js.valueToCode(a,'A',atomic);
  return ['new GameRGBAColor('+x+','+y+','+z+','+w+')',atomic];
}

js['entityPosition']=function(a){
  let e=js.valueToCode(a,'entity',atomic);
  let pos=js.valueToCode(a,'pos',atomic);
  return e+'.position='+pos+';\n';
}
js['entityOffset'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let off = js.valueToCode(a, 'offset', atomic);
    return e + '.meshOffset=' + off + ';\n';
}

js['entityScale'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let scale = js.valueToCode(a, 'scale', atomic);
    return e + '.meshScale=' + scale + ';\n';
}
js['entityInteractRadius'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let r = js.valueToCode(a, 'num', atomic);
    return e + '.interactRadius=' + r + ';\n';
}
js['entityInteractHint'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let h = js.valueToCode(a, 'hint', atomic);
    return e + '.interactHint=' + h + ';\n';
}
js['entityInteractColor'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let c = js.valueToCode(a, 'color', atomic);
    return e + '.interactColor=' + c + ';\n';
}

js['entitySay'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let b = js.valueToCode(a, 'text', atomic);
    return e + '.say(' + b + ');\n';
}

js['entityColor'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let color = js.valueToCode(a, 'color', atomic);
    return e + '.meshColor=' + color + ';\n';
}

js['playerColor'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let color = js.valueToCode(a, 'color', atomic);
    return e + '.player.color=' + color + ';\n';
}

js['entityInvisible'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let t = a.getFieldValue("invisible");
    return e + '.meshInvisible=' + t + ';\n';
}

js['playerInvisible'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let t = a.getFieldValue("invisible");
    return e + '.player.invisible=' + t + ';\n';
}

js['playerShowName'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let t = a.getFieldValue("show");
    return e + '.player.showName=' + t + ';\n';
}
js['playerCanFly'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let b = a.getFieldValue("boolean");
    return e + '.player.canFly=' + b + ';\n';
}
js['playerSpectator'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let b = a.getFieldValue("boolean");
    return e + '.player.spectator=' + b + ';\n';
}
js['playerEnableJump'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let b = a.getFieldValue("boolean");
    return e + '.player.enableJump=' + b + ';\n';
}
js['playerEnableDoubleJump'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let b = a.getFieldValue("boolean");
    return e + '.player.enableJump=' + b + ';\n';
}

js['playerMuted'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let t = a.getFieldValue("invisible");
    return e + '.player.muted=' + t + ';\n';
}

js['entityMesh']=function(a){
  let e=js.valueToCode(a,'entity',atomic);
  let mesh=js.valueToCode(a,'mesh',atomic);
  return e+'.mesh='+mesh+';\n';
}

js['entityEmissive'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let mesh = js.valueToCode(a, 'number', atomic);
    return e + '.meshEmissive=' + mesh + ';\n';
}
js['playerWalkSpeed'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let n = js.valueToCode(a, 'number', atomic);
    return e + '.player.walkSpeed=' + n + ';\n';
}
js['playerRunSpeed'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let n = js.valueToCode(a, 'number', atomic);
    return e + '.player.runSpeed=' + n + ';\n';
}
js['playerRunAcceleration'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let n = js.valueToCode(a, 'number', atomic);
    return e + '.player.runAccerleration=' + n + ';\n';
}
js['playerEmissive'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let mesh = js.valueToCode(a, 'number', atomic);
    return e + '.player.emissive=' + mesh + ';\n';
}
js['playerMetalness'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let n = js.valueToCode(a, 'num', atomic);
    return e + '.player.metalness=' + n + ';\n';
}
js['playerShininess'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let n = js.valueToCode(a, 'num', atomic);
    return e + '.player.shininess=' + n + ';\n';
}
js['playerScale'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let s = js.valueToCode(a, 'scale', atomic);
    return e + '.player.scale=' + s + ';\n';
}
js['playerDirectMessage'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let chat = js.valueToCode(a, 'chat', atomic);
    return e + '.player.directMessage(' + chat + ');\n';
}

js['entityMetaIness'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let mesh = js.valueToCode(a, 'number', atomic);
    return e + '.meshMetaIness=' + mesh + ';\n';
}

js['entityShininess'] = function (a) {
    let e = js.valueToCode(a, 'entity', atomic);
    let mesh = js.valueToCode(a, 'number', atomic);
    return e + '.meshShininess=' + mesh + ';\n';
}

js['entityBounds'] = function (b) {
    let e = js.valueToCode(b, 'entity', 0);
    return [e+'.bounds',0]
}
js['entityContactForce'] = function (b) {
    let e = js.valueToCode(b, 'entity', 0);
    return [e + '.contactForce', 0]
}
js['entityCollides'] = function (a) {
    let e = js.valueToCode(a, 'entity', 0);
    let b = a.getFieldValue('boolean');
    return e + '.collides=' + b + ';\n';
}

js['entityFriction'] = function (a) {
    let e = js.valueToCode(a, 'entity', 0);
    let b = a.getFieldValue('boolean');
    return e + '.friction=' + b + ';\n';
}

js['entityGravity'] = function (a) {
    let e = js.valueToCode(a, 'entity', 0);
    let b = a.getFieldValue('boolean');
    return e + '.gravity=' + b + ';\n';
}
js['entityEnableInteract'] = function (a) {
    let e = js.valueToCode(a, 'entity', 0);
    let b = a.getFieldValue('boolean');
    return e + '.enableInteract=' + b + ';\n';
}
js['entityRestitution'] = function (a) {
    let e = js.valueToCode(a, 'entity', 0);
    let b = a.getFieldValue('boolean');
    return e + '.restitution=' + b + ';\n';
}
js['entityMass'] = function (a) {
    let e = js.valueToCode(a, 'entity', 0);
    let b = js.valueToCode(a,'num',0);
    return e + '.mass=' + b + ';\n';
}
js['entityVelocity'] = function (a) {
    let e = js.valueToCode(a, 'entity', 0);
    let b = js.valueToCode(a, 'vector3', 0);
    return e + '.velocity=' + b + ';\n';
}

js['entityFixed'] = function (a) {
    let e = js.valueToCode(a, 'entity', 0);
    let b = a.getFieldValue('boolean');
    return e + '.fixed=' + b + ';\n';
}

js['GameEntity']=function(b){
  return ['new GameEntity()',atomic];
}
js['GameWorld']=function(b){
  return ['new GameWorld()',atomic];
}
js['GameVoxels']=function(b){
  return ['new GameVoxels()',atomic];
}
js['GamePlayer']=function(b){
  return ['new GamePlayer()',atomic];
}

js['sleep']=function(a){
  let number=js.valueToCode(a,'Number',atomic);
  return "await sleep("+new Number(number)*1000+");\n";
}

js['playerName']=function(a){
  let obj=js.valueToCode(a,'entity',atomic);
  return [obj+'.player.name',atomic];
}
js['playerBoxId'] = function (a) {
    let obj = js.valueToCode(a, 'entity', atomic);
    return [obj + '.player.boxId', atomic];
}
js['playerUserKey'] = function (a) {
    let obj = js.valueToCode(a, 'entity', atomic);
    return [obj + '.player.userKey', atomic];
}
js['playerSpawnPoint'] = function (a) {
    let obj = js.valueToCode(a, 'entity', atomic);
    let v = js.valueToCode(a, 'pos', atomic);
    return obj + '.player.spawnPoint='+v+';\n';
}
js['playerMovementBounds'] = function (a) {
    let obj = js.valueToCode(a, 'entity', atomic);
    let v = js.valueToCode(a, 'pos', atomic);
    return obj + '.player.movementBounds='+v+';\n';
}

js['voxelsId'] = function (a) {
    let name = js.valueToCode(a, 'name', atomic);
    return ['voxels.id('+name+')', 0];
}
js['voxelsName'] = function (a) {
    let id = js.valueToCode(a, 'id', atomic);
    return ['voxels.name('+id+')', 0];
}

js['whenStart']=function(a){
  let script=js.statementToCode(a,'script',atomic);
  return '(async function(){\n'+script+'}());'
}
js['onPlayerJoin']=function(a){
  let script=js.statementToCode(a,'script',atomic);
  return 'world.onPlayerJoin(async({entity})=>{\n'+script+'});\n'
}
js['onInteract'] = function (a) {
    let script = js.statementToCode(a, 'script', atomic);
    return 'world.onInteract(async({entity,targetEntity})=>{\n' + script + '});\n'
}
js['onEntityContact'] = function (a) {
    let script = js.statementToCode(a, 'script', atomic);
    return 'world.onEntityContact(async({entity,other,force,axis})=>{\n' + script + '});\n'
}
js['contactEntity'] = function (a) {
    return ['entity', atomic];
}
js['other'] = function (a) {
    return ['other', atomic];
}
js['force'] = function (a) {
    return ['force', atomic];
}
js['axis'] = function (a) {
    return ['axis', atomic];
}
js['joinEntity']=function(a){
  return ['entity',atomic];
}
js['interactEntity'] = function (a) {
    return ['entity', atomic];
}
js['targetEntity'] = function (a) {
    return ['targetEntity', atomic];
}
js['onPlayerLeave']=function(a){
  let script=js.statementToCode(a,'script',atomic);
  return 'world.onPlayerLeave(async({entity})=>{\n'+script+'});\n'
}
js['leaveEntity']=function(a){
  return ['entity',atomic];
}
js['airFriction']=(a)=>{
  let num=js.valueToCode(a,'number',atomic);
  return 'world.airFriction='+num+';\n'
}
js['maxFog']=(a)=>{
  let num=js.valueToCode(a,'number',atomic);
  return 'world.maxFog='+num+';\n'
}
js['fogColor']=(a)=>{
  let num=js.valueToCode(a,'color',atomic);
  return 'world.fogColor='+num+';\n';
}
js['rainColor']=(a)=>{
  let num=js.valueToCode(a,'color',atomic);
  return 'world.rainColor='+num+';\n';
}
js['rainDirection']=(a)=>{
  let num=js.valueToCode(a,'direction',atomic);
  return 'world.rainDirection='+num+';\n';
}
js['fogStartDistance'] = (a) => {
    let num = js.valueToCode(a, 'number', atomic);
    return 'world.fogStartDistance=' + num + ';\n';
}
js['fogHeightOffset'] = (a) => {
    let num = js.valueToCode(a, 'number', atomic);
    return 'world.fogHeightOffset=' + num + ';\n';
}
js['fogUniformDensity'] = (a) => {
    let num = js.valueToCode(a, 'number', atomic);
    return 'world.fogUniformDensity=' + num + ';\n';
}
js['fogHeightFalloff'] = (a) => {
    let num = js.valueToCode(a, 'number', atomic);
    return 'world.fogHeightFalloff=' + num + ';\n';
}
js['rainSpeed'] = (a) => {
    let num = js.valueToCode(a, 'number', atomic);
    return 'world.rainSpeed=' + num + ';\n';
}
js['rainDensity'] = (a) => {
    let num = js.valueToCode(a, 'num', atomic);
    return 'world.rainDensity=' + num + ';\n';
}
js['rainInterference'] = (a) => {
    let num = js.valueToCode(a, 'num', atomic);
    return 'world.rainInterference=' + num + ';\n';
}
js['rainSizeLo'] = (a) => {
    let num = js.valueToCode(a, 'num', atomic);
    return 'world.rainSizeLo=' + num + ';\n';
}
js['rainSizeHi'] = (a) => {
    let num = js.valueToCode(a, 'num', atomic);
    return 'world.rainSizeHi=' + num + ';\n';
}
js['snowColor']=(a)=>{
  let num=js.valueToCode(a,'color',atomic);
  return 'world.snowColor='+num+';\n';
}
js['snowSizeLo'] = (a) => {
    let num = js.valueToCode(a, 'num', atomic);
    return 'world.snowSizeLo=' + num + ';\n';
}
js['snowSizeHi'] = (a) => {
    let num = js.valueToCode(a, 'num', atomic);
    return 'world.snowSizeHi=' + num + ';\n';
}
js['snowFallSpeed']=(a)=>{
  let num=js.valueToCode(a,'num',atomic);
  return 'world.snowFallSpeed='+num+';\n';
}
js['snowSpinSpeed'] = (a) => {
    let v = js.valueToCode(a, 'vector3', atomic);
    return 'world.snowSpinSpeed=' + v + ';\n';
}
js['snowDensity']=(a)=>{
  let num=js.valueToCode(a,'num',atomic);
  return 'world.snowDensity='+num+';\n';
}
js['snowTexture']=(a)=>{
  let name=a.getFieldValue('name');
  return 'world.snowTexture=\'snow/'+name+'.part\';\n';
}
js['sunFrequency'] = (a) => {
    let num = js.valueToCode(a, 'number', atomic);
    return 'world.sunFrequency=' + num + ';\n';
}
js['sunPhase'] = (a) => {
    let num = js.valueToCode(a, 'number', atomic);
    return 'world.sunPhase=' + num + ';\n';
}
js['lunarPhase'] = (a) => {
    let num = js.valueToCode(a, 'number', atomic);
    return 'world.lunarPhase=' + num + ';\n';
}
js['sunDirection'] = (a) => {
    let num = js.valueToCode(a, 'vector', atomic);
    return 'world.sunDirection=' + num + ';\n';
}
js['sunLight'] = (a) => {
    let num = js.valueToCode(a, 'rgb', atomic);
    return 'world.sunLight=' + num + ';\n';
}
js['skyLeftLight'] = (a) => {
    let num = js.valueToCode(a, 'rgb', atomic);
    return 'world.skyLeftLight=' + num + ';\n';
}
js['skyRightLight'] = (a) => {
    let num = js.valueToCode(a, 'rgb', atomic);
    return 'world.skyRightLight=' + num + ';\n';
}
js['skyBottomLight'] = (a) => {
    let num = js.valueToCode(a, 'rgb', atomic);
    return 'world.skyBottomLight=' + num + ';\n';
}
js['skyTopLight'] = (a) => {
    let num = js.valueToCode(a, 'rgb', atomic);
    return 'world.skyTopLight=' + num + ';\n';
}
js['skyFrontLight'] = (a) => {
    let num = js.valueToCode(a, 'rgb', atomic);
    return 'world.skyFrontLight=' + num + ';\n';
}
js['skyBackLight'] = (a) => {
    let num = js.valueToCode(a, 'rgb', atomic);
    return 'world.skyBackLight=' + num + ';\n';
}