<script setup>
import { inject, watch } from 'vue'

const appversion = inject('appversion')
const appgit = inject('appgit')

function closeDialog() {
  let dialog = document.querySelector('.about-dialog')
  dialog.open = false
}
</script>
<template>
  <mdui-dialog close-on-esc close-on-overlay-click class="about-dialog">
    <mdui-top-app-bar slot="header" style="padding-left: 20px">
      <mdui-top-app-bar-title>关于</mdui-top-app-bar-title>
      <mdui-button-icon icon="close" style="float: right" @click="closeDialog"></mdui-button-icon>
    </mdui-top-app-bar>
    <div class="about-box">
      <div class="about-logo-box">
        <img src="/logo.png" />
      </div>
      <div class="about-content">
        <p>
          BOX3 Blockly 3.0是一款开源、基于google
          blockly的box3图形化编辑器，降低学习编程的门槛，帮助新手学习API与JS，体验到编程的乐趣
        </p>
        <p>版本号：beta-{{ appversion }}</p>
        <p>
          链接：<a href="https://box3.codestarlabs.top/blockly3">https://box3.codestarlabs.top/blockly3</a>
        </p>
        <p>作者：<a href="https://www.codestarlabs.top">CodeStarLabs团队</a></p>
        <p>
          Git仓库：<a :href="appgit">{{ appgit }}</a>
        </p>
        <p>
          本项目使用<a href="https://cn.vuejs.org">Vue3</a>构建，UI使用<a href="https://mdui.org">mdui</a>设计
        </p>
        <p style="text-align: center; font-size: 13px">Copyright©2024 -CodeStarLabs团队</p>
      </div>
    </div>
  </mdui-dialog>
</template>
<style scoped>
.about-box {
  min-width: 300px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

.about-logo-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 20px 0px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.about-logo-box img {
  height: 90px;
  border-radius: 50%;
}

p {
  margin: 10px 0px 10px 0px;
}
</style>
