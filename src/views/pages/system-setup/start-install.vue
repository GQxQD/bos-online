<template>
  <div class="start-install">
    <setup-dialog @close="handleClose">
      <div class="dialog-header">
        <div class="logo">
          <img src="./images/logo-white.png" alt="logo">
        </div>
        <div class="text">Bilibili OS</div>
      </div>
      <div class="dialog-content">
        <div class="install-btn" @click="handleNextStep">现在安装(I)</div>
      </div>
      <div class="dialog-footer">
        <div class="fix-computer-btn">修复计算机(R)</div>
      </div>
    </setup-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import SetupDialog from '@/views/pages/system-setup/components/setup-dialog';

export default {
  name: 'start-install',
  components: { SetupDialog },
  methods: {
    ...mapMutations('systemSetup', ['setStep', 'increaseStep']),
    handleClose() {
      this.setStep(0);
    },
    handleNextStep() {
      this.increaseStep();
    },
  },
};
</script>

<style lang="less" scoped>
.start-install {
  width: 100%;
  height: 100%;
  background-color: #180052;

  .dialog-header {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 40px 0 50px;

    .logo {
      width: 40px;
      height: 40px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .text {
      margin-left: 10px;
      font-size: 25px;
      color: #ffffff;
    }
  }

  .dialog-content {
    padding: 50px 0 140px;
    text-align: center;

    .install-btn {
      display: inline-block;
      padding: 5px 20px;
      border: 1px solid #f4f4f4;
      color: #f4f4f4;
      cursor: pointer;
    }
  }

  .dialog-footer {
    padding: 0 20px;

    .fix-computer-btn {
      font-size: 14px;
      color: #f4f4f4;
      cursor: pointer;
    }
  }
}
</style>
