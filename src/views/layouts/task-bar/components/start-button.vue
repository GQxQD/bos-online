<template>
  <div class="start-button">
    <div class="start-button__inner"
         :class="{active: startMenuVisible}"
         @click="handleClick">始
    </div>
    <div class="start-button--popover" v-show="startMenuVisible">
      <div class="start-button--popover__sidebar">
        <div class="button">源</div>
        <div class="button">设</div>
        <div class="button">图</div>
        <div class="button">档</div>
        <div class="button">像</div>
      </div>
      <div class="start-button--popover__program-list"></div>
      <div class="start-button--popover__shortcut"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'start-button',
  data() {
    return {};
  },
  computed: {
    ...mapState(['startMenuVisible']),
  },
  mounted() {
  },
  methods: {
    ...mapMutations(['setStartMenuVisible']),
    handleClick() {
      this.setStartMenuVisible(!this.startMenuVisible);
    },
  },
};
</script>

<style lang="less" scoped>
.start-button {
  position: relative;

  .start-button__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 100%;
    color: #fff;
    cursor: pointer;
    transition: all .3s;

    &.active,
    &:hover {
      background-color: rgba(255, 255, 255, .1);
    }
  }

  .start-button--popover {
    position: absolute;
    top: -500px;
    display: flex;
    width: 600px;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.81);

    .start-button--popover__sidebar {
      display: flex;
      flex-direction: column-reverse;
      width: 48px;
      height: 100%;

      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46px;
        color: #ffffff;
        cursor: pointer;
        transition: all .3s;

        &:hover {
          background-color: rgba(255, 255, 255, .1);
        }
      }
    }

    .start-button--popover__program-list {
      width: 272px;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: rgba(255, 255, 255, .1);
    }

    .start-button--popover__shortcut {
      flex: 1;
      height: 100%;
    }
  }
}
</style>
