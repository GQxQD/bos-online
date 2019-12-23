<template>
  <div class="desktop-panel">
    <div class="desktop-background"></div>
    <div class="desktop-container" @click="handleDesktopClick">
      <div v-for="i in 0" :key="i">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
        atque harum sequi. Architecto
        eaque eligendi expedita explicabo fugiat id, inventore iure, pariatur quas recusandae sint
        tenetur voluptas. Accusantium, modi nihil!
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'desktop-panel',
  methods: {
    ...mapMutations(['setStartMenuVisible']),
    handleDesktopClick() {
      this.setStartMenuVisible(false);
    },
  },
};
</script>

<style lang="less" scoped>
.desktop-panel {
  position: relative;
  height: 100%;
  overflow: hidden;
  padding-bottom: 45px;
  background-color: #01affd;

  .desktop-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../../../assets/images/desktop_bg.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
  }

  .desktop-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>
