<template>
<div>
 <header-section />
    <div>
    <partner-header />
    </div>
    <partner-story v-bind:story="story"/>
    <carrier-liteforex v-bind:content="content" />
    <footer-component />
</div>
</template>

<script>
import HeaderSection from "~/components/HeaderSection.vue";
import PartnerHeader from "~/components/partnership/PartnerHeader.vue"
import FooterComponent from "~/components/FooterComponent.vue";
import PartnerStory from "~/components/partnership/PartnerStory.vue";
import CarrierLiteforex from "~/components/partnership/CarrierLiteforex.vue";

export default {
  components: {
    HeaderSection,
    PartnerHeader,
    FooterComponent,
    PartnerStory,
    CarrierLiteforex 
    
   },
asyncData: function({$axios}) {
  return $axios.get('/api/partnership.json').then(res =>{
    return res.data;
  })
}
};

</script>

<style lang="scss">
.vbindclass {
  padding-top:4%;
}
</style>
