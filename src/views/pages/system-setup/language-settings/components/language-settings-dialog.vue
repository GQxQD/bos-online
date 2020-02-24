<template>
  <setup-dialog @close="handleClose">
    <div class="language-settings-dialog">
      <div class="content--title">
        <div class="logo">
          <img src="../../images/logo-white.png" alt="logo">
        </div>
        <div class="text">Bilibili OS</div>
      </div>
      <div class="content--form">
        <div class="form-item">
          <div class="form-item--label">要安装的语言(E)：</div>
          <div class="form-item--input">
            <select>
              <option value="zh-CN">中文(简体，中国)</option>
              <option value="chou-xiang">抽象语(一级)</option>
              <option value="en">英语(美国)</option>
            </select>
          </div>
        </div>
        <div class="form-item">
          <div class="form-item--label">时间和货币格式(Y)：</div>
          <div class="form-item--input">
            <select>
              <option value="zh-CN">中文(简体，中国)</option>
              <option value="en">英语(美国)</option>
            </select>
          </div>
        </div>
        <div class="form-item">
          <div class="form-item--label">键盘和输入方法(K)：</div>
          <div class="form-item--input">
            <select>
              <option value="ms-pinyin">哔哩拼音</option>
              <option value="en">搜猫五笔</option>
            </select>
          </div>
        </div>
      </div>
      <div class="content--tips">
        输入语言和其他首选项，然后单击“下一步”继续。
      </div>
      <div class="next-step">
        <div class="next-step--btn" @click="handleNextStep">下一步(N)</div>
      </div>
    </div>
  </setup-dialog>
</template>

<script>
import { mapMutations } from 'vuex';
import SetupDialog from '@/views/pages/system-setup/components/setup-dialog';

export default {
  name: 'language-settings-dialog',
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
.language-settings-dialog {

  .content--title {
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

  .content--form {
    .form-item {
      display: flex;
      align-items: center;
      padding: 0 80px;

      + .form-item {
        margin-top: 15px;
      }

      .form-item--label {
        width: 150px;
        text-align: right;
        font-size: 14px;
        color: #ffffff;
      }

      .form-item--input {
        flex: 1;

        select {
          width: 100%;
        }
      }
    }
  }

  .content--tips {
    padding: 50px 0;
    text-align: center;
    font-size: 14px;
    color: #ffffff;
  }

  .next-step {
    padding: 0 10px;
    text-align: right;

    .next-step--btn {
      display: inline-block;
      padding: 5px 10px;
      background-color: #f4f4f4;
      cursor: pointer;
    }
  }
}
</style>
