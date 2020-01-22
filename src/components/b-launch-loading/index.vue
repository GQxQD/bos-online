<template>
  <div class="b-launch-loading">
    <div class="ball ball1">
      <div class="inner-ball"></div>
    </div>
    <div class="ball ball2">
      <div class="inner-ball"></div>
    </div>
    <div class="ball ball3">
      <div class="inner-ball"></div>
    </div>
    <div class="ball ball4">
      <div class="inner-ball"></div>
    </div>
    <div class="ball ball5">
      <div class="inner-ball"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BLaunchLoading',
};
</script>

<style lang="less" scoped>
.b-launch-loading {
  position: relative;
  width: 100%;
  height: 100%;

  .ball {
    position: absolute;
    /*width: 44px;*/
    /*height: 44px;*/
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: rotate(225deg);
    animation: orbit 6.96s infinite;

    .inner-ball {
      position: absolute;
      left: 0;
      top: 0;
      width: 6px;
      height: 6px;
      border-radius: 6px;
      background-color: #ffffff;
    }

    &.ball1 {
      animation-delay: 1.52s;
    }

    &.ball2 {
      animation-delay: 0.3s;
    }

    &.ball3 {
      animation-delay: 0.61s;
    }

    &.ball4 {
      animation-delay: 0.91s;
    }

    &.ball5 {
      animation-delay: 1.22s;
    }
  }


  @keyframes orbit {
    0% {
      opacity: 1;
      z-index: 99;
      transform: rotate(180deg);
      animation-timing-function: ease-out;
    }

    7% {
      opacity: 1;
      transform: rotate(300deg);
      animation-timing-function: linear;
      origin: 0%;
    }

    30% {
      opacity: 1;
      transform: rotate(410deg);
      animation-timing-function: ease-in-out;
      origin: 7%;
    }

    39% {
      opacity: 1;
      transform: rotate(645deg);
      animation-timing-function: linear;
      origin: 30%;
    }

    70% {
      opacity: 1;
      transform: rotate(770deg);
      animation-timing-function: ease-out;
      origin: 39%;
    }

    75% {
      opacity: 1;
      transform: rotate(900deg);
      animation-timing-function: ease-out;
      origin: 70%;
    }

    76% {
      opacity: 0;
      transform: rotate(900deg);
    }

    100% {
      opacity: 0;
      transform: rotate(900deg);
    }
  }
}
</style>
