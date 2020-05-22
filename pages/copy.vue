<template>
  <div>
    <header-section />
    <copy-header />
    <copy-content />
    <p>Здесь какой то контент</p>
    <footer-component />
  </div>
</template>

<script>
  import HeaderSection from "~/components/HeaderSection.vue";
  import CopyContent from "~/components/copy/CopyContent.vue";
  import FooterComponent from "~/components/FooterComponent.vue";
  import CopyHeader from "~/components/copy/CopyHeader.vue";
  export default {
    components: {
      HeaderSection,
      CopyContent,
      CopyHeader,
      FooterComponent,
    },
};
</script>

<style>
</style>
