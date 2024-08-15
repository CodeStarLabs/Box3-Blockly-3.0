<script setup>
defineProps(['final'])
</script>

<template>
  <div class="app-dropdown-option" :style="{ ['padding-bottom']: !final ? '0px' : '10px' }">
    <div>
      <slot></slot>
    </div>
    <div class="dropdown-option-hr" v-if="!final"></div>
  </div>
</template>

<style scoped>
.app-dropdown-option {
  text-align: center;
  padding: 10px 30px 0px 30px;
  font-size: 15px;
  color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
}

.app-dropdown-option:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.dropdown-option-hr {
  height: 1px;
  width: calc(100% + 20px);
  background: rgba(0, 0, 0, 0.02);
  margin-top: 8px;
}

@media (max-width: 620px) {
  .app-dropdown-option {
    font-size: 13px;
  }
}

@media (max-width: 550px) {
  .app-dropdown-option {
    font-size: 11.5px;
  }
}
</style>
