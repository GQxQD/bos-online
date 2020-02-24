<template>
  <div class="setup-dialog">
    <div class="dialog--header">
      <div class="header--title">Bilibili OS 安装程序</div>
      <div class="header--close-btn" @click="$emit('close')">x</div>
    </div>
    <div class="dialog--content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setup-dialog',
};
</script>

<style lang="less" scoped>
.setup-dialog {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 450px;
  padding: 5px;
  transform: translate(-50%, -50%);
  background-color: #f4f4f4;

  .dialog--header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 0 5px;

    .header--close-btn {
      width: 50px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      color: #ffffff;
      background-color: #f44236;
      cursor: pointer;
    }
  }

  .dialog--content {
    flex: 1;
    background-color: #180052;
  }
}
</style>
