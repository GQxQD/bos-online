<template>
  <div class="system-setup">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'system-setup',
  computed: {
    ...mapGetters('systemSetup', ['currentStepName']),
  },
  watch: {
    currentStepName: {
      handler(step) {
        this.$router.replace({
          name: step,
        });
      },
      immediate: true,
    },
  },
  created() {
    this.setStep(0);
    setTimeout(() => {
      this.setStep(1);
      setTimeout(() => {
        this.setStep(0);
      }, 10000);
    }, 10000);
  },
  methods: {
    ...mapMutations('systemSetup', ['setStep']),
  },
};
</script>

<style lang="less">
.system-setup {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: @theme_blue;

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
