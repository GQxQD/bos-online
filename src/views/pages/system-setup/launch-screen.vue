<template>
  <div class="launch-screen">
    <div class="logo-image">
      <img src="./images/logo.png" alt="logo">
    </div>
    <div class="launch-loading">
      <b-launch-loading/>
    </div>
  </div>
</template>

<script>
import BLaunchLoading from '@/components/b-launch-loading/index';

export default {
  name: 'launch-screen',
  components: { BLaunchLoading },
};
</script>

<style lang="less" scoped>
.launch-screen {
  position: relative;
  width: 100%;
  height: 100%;

  .logo-image {
    position: absolute;
    top: 20%;
    left: 50%;
    width: 120px;
    height: 120px;
    transform: translateX(-50%);

    img {
      width: 100%;
      height: 100%;
    }
  }

  .launch-loading {
    position: absolute;
    bottom: 20%;
    left: 50%;
    width: 40px;
    height: 40px;
    transform: translateX(-50%);
  }
}
</style>
