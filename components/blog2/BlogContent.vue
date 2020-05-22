<template>
  <div class="divmainS">
  <div v-for="(section, index) in content.sections" v-bind:key="index">
      <div class="marcet-recap-title margin-marcet-recap page-new-item">
        {{section.title}}
      </div>
      <div v-html="section.text" class="recap-text page-new-item">
        {{section.text}}
      </div>
      <div><img :src="section.image" class="blog-content-img-width" /></div>
  </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: ["content"]
  };

</script>

<style lang="scss">

  .blogcontent-title {
    font-size: 36px;
    font-weight: bold;
    margin-top:6%;
    margin-bottom:1.5%;
    position: relative;
  }
  @media (max-width: 600px) { 
    .blogcontent-title {
      font-size: 30px;
      font-weight: bolder;
      margin-top:6%;
      position: relative;
      }
    }
  .blogcontent-img-absolute {
    position: absolute; 
    left:-50px;
  }
  @media (max-width: 900px) {
    .blogcontent-img-absolute {
    display:none;
  }
  }
  .blogcontent-content {
    font-size: 24px;
    color: grey;
    font-weight: bold;
  }
  .blog-content-img-width {
    width:100%;
  }

  .marcet-recap-title {
    font-size: 24px;
    font-weight: bold;
  }
  .recap-text {
    font-size: 18px;
    color: $gray-font-color-desktop;
    line-height: 34px;
  }
  .v-html-margin-gilt {
    padding-bottom:2%;
  }

</style>
