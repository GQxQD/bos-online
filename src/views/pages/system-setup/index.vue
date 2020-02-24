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
        if (step !== this.$route.name) {
          this.$router.replace({
            name: step,
          });
        }
      },
      immediate: true,
    },
  },
  mounted() {
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
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
