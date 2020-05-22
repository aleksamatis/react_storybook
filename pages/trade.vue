<template>
<div>
    <header-section />
    <trading-platform />
    <platforms />
    <platform-profit class="page-fixed-item"/>
    <instruments />
    <multi-platform />
    <global-network />
    <footer-component />
</div>
</template>
<script>
import HeaderSection from "~/components/HeaderSection.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import TradingPlatform from "~/components/trade/TradingPlatform.vue";
import Platforms from "~/components/trade/Platforms.vue";
import Instruments from "~/components/trade/Instruments.vue";
import PlatformProfit from "~/components/trade/PlatformProfit.vue";
import GlobalNetwork from "~/components/trade/GlobalNetwork.vue";
import MultiPlatform from "~/components/trade/MultiPlatform.vue";

 
export default {
  components: {
    TradingPlatform,
    HeaderSection,
    FooterComponent,
    Platforms,
    PlatformProfit,
    Instruments,
    GlobalNetwork,
    MultiPlatform
  }
};
</script>
<style lang="scss">
 .trade-visibility-hidden {
    display: block;
  }
  .trade-visibility-hidden-2 {
    display:none;
  }
   
  @media(max-width: 700px) {
  .trade-visibility-hidden-2 {
    display:block;
  }
  }

  @media(max-width: 700px) {
  .trade-visibility-hidden {
    display: none;
  }
  }
  .trade-heading {
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    text-align: center;
    word-wrap: break-word;
    width:80%;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
  .trade-heading {
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    text-align: left;
    word-wrap: break-word;
    width:100%;
    margin: 0 auto;
  }
  }
  @media (max-width: 500px) {
    .trade-heading {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      text-align: left;
      line-height: 120%;
      word-wrap: break-word;
    }
  }
</style>
