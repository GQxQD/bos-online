<template>
  <div class="desktop-panel">
    <div class="desktop-background"></div>
    <div v-for="i in 0" :key="i">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
      atque harum sequi. Architecto
      eaque eligendi expedita explicabo fugiat id, inventore iure, pariatur quas recusandae sint
      tenetur voluptas. Accusantium, modi nihil!
    </div>
  </div>
</template>

<script>
export default {
  name: 'desktop-panel',
};
</script>

<style lang="less" scoped>
.desktop-panel {
  position: relative;
  height: 100%;
  overflow: auto;
  padding-bottom: 45px;
  background-color: #01affd;

  .desktop-background {
    width: 100%;
    height: 100%;
    background-image: url(../../../assets/images/desktop_bg.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
  }
}
</style>
