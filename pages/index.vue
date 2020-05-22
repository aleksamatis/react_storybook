<template>
  <div class="grid">
    <header-section class="section1" />
    <lite-forex class="section2" />
    <note-mobile class="section3" />
    <deales-traders class="section4_1 page-fixed-item" />
    <details-traders class="section4_2 page-item" />
    <deales-platforms class="section5_1 page-fixed-item" />
    <details-platforms class="section5_2 page-item" />
    <broker-promis class="section6_1 page-fixed-item" />
    <broker-promises class="section6_2" />
    <pay-partners class="section7" />
    <footer-component class="section8 page-fixed-item" />
  </div>
</template>

<script>
import HeaderSection from "~/components/HeaderSection.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import LiteForex from "~/components/about/LiteForex.vue";
import NoteMobile from "~/components/about/NoteMobile.vue";
import DealesTraders from "~/components/about/DealesTraders.vue";
import DetailsTraders from "~/components/about/DetailsTraders.vue";
import DealesPlatforms from "~/components/about/DealesPlatforms.vue";
import DetailsPlatforms from "~/components/about/DetailsPlatforms.vue";
import BrokerPromis from "~/components/about/BrokerPromis.vue";
import BrokerPromises from "~/components/about/BrokerPromises.vue";
import PayPartners from "~/components/about/PayPartners.vue";

export default {
  components: {
    HeaderSection,
    LiteForex,
    NoteMobile,
    DealesTraders,
    DetailsTraders,
    DealesPlatforms,
    DetailsPlatforms,
    BrokerPromis,
    BrokerPromises,
    PayPartners,
    FooterComponent
  }
};
</script>

<style lang="scss">
.grid {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-template-areas:
    "hd hd"
    "hd1 hd1"
    "hd2 hd2"
    "hd3 hd4"
    "hd05 hd06"
    "hd5 hd5"
    "hd6 hd7"
    "hd8 hd8"
    "hd9 hd9"
}
.section1 {
  grid-area: hd;
}
.section2 {
  grid-area: hd1;
}
.section3 {
  grid-area: hd2;
}
.section5 {
  grid-area: hd5;
}
.section5_1 {
  grid-area: hd05;
  margin-bottom: 100px;
}
.section5_2 {
  grid-area: hd06;
  margin-bottom: 100px;
}
.section7 {
  grid-area: hd8;
}
.section8 {
  grid-area: hd9;
}
.section4_1 {
  grid-area: hd3;
  margin-top:100px;
}
.section4_2 {
  grid-area: hd4;
  margin-top:100px;
}
.section6_1 {
  grid-area: hd6;
  margin-top:100px;
}
.section6_2 {
  grid-area: hd7;
  margin-top:100px;
}
.section7_1 {
  grid-area: hd8;
}
.section7_2 {
  grid-area: hd9;
}

@media (max-width: 700px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-template-areas:
    "hd hd"
    "hd1 hd1"
    "hd2 hd2"
    "hd3 hd3"
    "hd4 hd4"
    "hd05 hd05"
    "hd06 hd06"
    "hd5 hd5"
    "hd6 hd6"
    "hd7 hd7"
    "hd8 hd8"
    "hd9 hd9"
  }
}
@media (max-width: 500px) {
  .position_Man {
    display: none;
  }
}

@media (max-width: 500px) {
  .visible_Round {
    display: block;
  }
}
@media (max-width: 500px) {
  .low_Menu {
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 1200px) {
.section4_1 {
  grid-area: hd3;
  margin-top:0px;
}
}
@media (max-width: 500px) {
.section4_1 {
  grid-area: hd3;
  margin-top:20px;
}
}
@media (max-width: 1200px) {
.section4_2 {
  grid-area: hd4;
  margin-top:0px;
}
}
@media (max-width: 1200px) {
.section5_1 {
  grid-area: hd05;
  margin-bottom: 0;
}
}
@media (max-width: 500px) {
.section5_1 {
  grid-area: hd05;
  margin-bottom: 0;
  margin-top:50px;
}
}
@media (max-width: 500px) {
.section6_1 {
  grid-area: hd6;
  margin-bottom: 0;
  margin-top:0px;
}
}
@media (max-width: 1200px) {
.section5_2 {
  grid-area: hd06;
  margin-bottom: 0;
}
}

@media (max-width: 1200px) {
.section6_1 {
  grid-area: hd6;
  margin-top:50px;
}
}
@media (max-width: 1200px) {
.section6_2 {
  grid-area: hd7;
  margin-top:100px;
}
}
@media (max-width: 500px) {
.section6_2 {
  grid-area: hd7;
   margin-top:40px;
}
}
</style>
