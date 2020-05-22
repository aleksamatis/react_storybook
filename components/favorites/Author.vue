<template>
  <div class="authors-main">
    <div class="page-new-item">
      <div class="favorites-authors-flex">
      <img v-bind:src="item.author.image" />
      <div class="favorites-authors">{{item.author.name}}</div>
      <div class="s-btn"><el-button disabled size="small">Отписаться</el-button></div>
      </div>
      <div class="margin-to-color-author-link-gray">
      <div v-for="(link,index) in item.links" v-bind:key="index" class="color-author-link-gray">
        {{formatFromIsoToString(link.time)}}
        <nuxt-link v-bind:to="link.link" class="color-author-link">{{link.text}}</nuxt-link>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from 'moment';
  export default {
    components: {},
    props: ["item"],
    methods: {
      formatFromIsoToString(val) {
        return moment(val).fromNow();
      }
    }
  };

</script>
<style lang="scss">
  .authors-main {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    margin-top:1.2%;
  }
  .favorites-authors {
    font-size: 24px;
    font-weight: bold;
    line-height: 100%;
    margin-left:10px;
    margin-right: 10px;
    color: black;
  }
  .favorites-authors-flex {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .color-author-link-gray {
    color: $gray-font-color-blog-author;
    padding-top:10px;
    padding-bottom:10px;
  }
  .color-author-link{
    font-size:15px;
    color: $blue-color-and-link;
    line-height: 140.62%
  }
  .margin-to-color-author-link-gray {
    margin-top:7%;
  }
   @media (max-width: 700px) {
  .s-btn {
    width: 100%;
    padding-left: 77px;
    margin-top:-10px;
  }
  }

</style>
