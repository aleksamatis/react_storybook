<template>
  <div class="broker-promises">
    <div class="theman">
      <img src="/img/img_acter.jpg" class="theman-broker" />
      <div class="textman">"VINNI"JONES</div>
    </div>
  </div>
</template>

<style lang="scss">
  .broker-promises {
    display: flex;
    align-items: flex-end;
    justify-content: center
  }

  .theman-broker {
    vertical-align: bottom;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .theman {
    width: 458px;
    margin: 0 auto;
    position: relative;
  }

  @media (max-width: 1500px) {
    .theman {
      width: 300px;
      margin: 0 auto;
      position: relative;
    }
  }

  @media (max-width: 600px) {
    .theman {
      width: 300px;
      margin: 0 auto;
    }
  }

  .textman {
    position: absolute;
    width: 50%;
    height: 20%;
    z-index: 2;
    font-size: 100px;
    bottom: -0.62em;
    right: 3.5em;
    color: #cbcbcb;
    text-align: center;
  }

  @media (max-width: 1500px) {
    .textman {
      position: absolute;
      width: 50%;
      font-weight: bold;
      line-height: 140%;
      height: 20%;
      z-index: 2;
      font-size: 50px;
      bottom: -1em;
      right: 3.5em;
      color: #cbcbcb;
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    .textman {
      position: absolute;
      width: 50%;
      font-weight: bold;
      line-height: 140%;
      height: 20%;
      z-index: 2;
      font-size: 50px;
      bottom: -1em;
      right: 3.5em;
      letter-spacing: 2px;
      color: #cbcbcb;
      text-align: center;
    }
  }

</style>
