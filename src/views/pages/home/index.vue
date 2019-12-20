<template>
  <div class="home">
    <div class="desktop-container">
      <desktop-panel/>
    </div>
    <div class="task-bar-container">
      <task-bar/>
    </div>
  </div>
</template>

<script>
import TaskBar from '@/views/layouts/task-bar/index';
import DesktopPanel from '@/views/layouts/desktop-panel/index';

export default {
  name: 'home',
  components: { DesktopPanel, TaskBar },
};
</script>

<style lang="less" scoped>
.home {
  position: relative;
  height: 100%;

  .desktop-container {
    height: 100%;
  }

  .task-bar-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 45px;
  }
}
</style>
