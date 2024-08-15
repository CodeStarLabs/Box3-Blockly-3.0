<script setup>
import { ref, watch } from 'vue'

const focused = ref(false)

const focus = () => {
  focused.value = true
}
const blur = () => (focused.value = false)
</script>
<template>
  <div class="app-dropdown-box">
    <div tabindex="-1" class="app-dropdown-text" @focus="focus" @blur="blur">
      <slot name="text"></slot>
      <mdui-icon name="arrow_drop_down"></mdui-icon>
    </div>
    <div class="app-dropdown">
      <slot name="options">hi</slot>
    </div>
  </div>
</template>
<style scoped>
.app-dropdown-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  cursor: pointer;
  margin: 0px 15px 0px 15px;
}

.app-dropdown {
  position: absolute;
  border-radius: 4px;
  overflow: hidden;
  width: fit-content;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  margin-top: 45px;
  max-height: 0vh;
  transition: max-height 1s;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
}

.app-dropdown-text:focus + .app-dropdown {
  max-height: 100vh;
}

.app-dropdown-text {
  font-size: 16px;
  display: flex;
  align-items: center;
}

.app-dropdown-text:focus {
  color: rgba(255, 255, 255, 0.85);
}

@media (max-width: 620px) {
  .app-dropdown-text {
    font-size: 14px;
  }

  .app-dropdown-box {
    margin: 0px 10px 0px 10px;
  }
}

@media (max-width: 550px) {
  .app-dropdown-text {
    font-size: 12px;
  }

  .app-dropdown-box {
    margin: 0px 8px 0px 8px;
  }
}
</style>
