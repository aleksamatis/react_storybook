<template>
<div class="blog">
    <header-section />
    <blog-header />
    <div class="main-blog">
      <div v-for="record in records" v-bind:key="record.id" class="media">
        <blog-list-item v-bind:record="record"/>
      </div>
    </div>
    <blog-footer class="section1_2" />
    <footer-component class="section8 page-fixed-item" />
</div>
</template>
<script>
import HeaderSection from "~/components/HeaderSection.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import BlogListItem from "~/components/blog/BlogListItem.vue";
import BlogHeader from "~/components/blog/BlogHeader.vue";
import BlogFooter from "~/components/blog/BlogFooter.vue";
export default {
  components: {
    HeaderSection,
    FooterComponent,
    BlogHeader,
    BlogFooter,
    BlogListItem,
  },
  asyncData: function({$axios}) {
    return $axios.get('/api/blog.json').then(res =>{
      return res.data;
    })
  }
};
</script>
<style lang="scss">
.media {
   width: 50%;
}
@media (max-width: 500px) {
  .media {
    width: 100%;
  }
}
.main-blog {  
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  margin: auto;
}
</style>
