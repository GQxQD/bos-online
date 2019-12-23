<template>
  <div class="task-bar">
    <start-button/>
  </div>
</template>

<script>
import StartButton from '@/views/layouts/task-bar/components/start-button';

export default {
  name: 'task-bar',
  components: { StartButton },
};
</script>

<style lang="less" scoped>
.task-bar {
  display: flex;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
}
</style>
