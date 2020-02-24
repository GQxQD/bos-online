<template>
  <div class="boot-screen">
    <div class="boot-text">Press any key to boot from CD or DVD...</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'boot-screen',
  mounted() {
    setTimeout(() => {
      this.increaseStep();
    }, 2000);
  },
  methods: {
    ...mapMutations('systemSetup', ['increaseStep']),
  },
};
</script>

<style lang="less" scoped>
.boot-screen {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  cursor: none;

  .boot-text {
    font-family: "monospace", serif;
    color: #ffffff;
  }
}
</style>
